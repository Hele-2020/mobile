import 'package:flutter/material.dart';
import 'package:hele/helpers/hele_http_service.dart';
import 'package:hele/responses/auth/password_request.dart';
import 'package:hele/responses/auth/password_reset.dart';
import 'package:oktoast/oktoast.dart';
import 'package:validators/validators.dart';


class PasswordResetDialog {

  final List<GlobalKey<FormState>> _formKeys = [GlobalKey<FormState>(), GlobalKey<FormState>()];
  String _phone;
  String _code;

  _sendPasswordRequest(BuildContext context) async {
    if (_formKeys[0].currentState.validate()) {
      _formKeys[0].currentState.save();
      print('Demande de code for ' + this._phone);
      try {
        var response = await heleHttpService.call<PasswordRequestResponse>('password.request', body: { 'phone': this._phone });
        if (response.code != null) {
          print(response.code);
        }
        Navigator.of(context).pop();
        this._showForgotPasswordDialog2(context);
      } catch (e) {
        heleHttpService.errorHandler(e, {
          BadRequestException: _tooManyAttempts
        });
        print(e.toString());
      }
    }
  }

  _sendPasswordReset(BuildContext context) async {
    if (_formKeys[1].currentState.validate()) {
      _formKeys[1].currentState.save();
      print('Code : ' + this._code + ', pour la réinitialisation de ' + this._phone);
      try {
        var response = await heleHttpService.call<PasswordResetResponse>('password.reset', body: { 'phone': this._phone, 'code': this._code });
        if (response.password != null) {
          print(response.password);
        }
        Navigator.of(context).pop();
      } catch (e) {
        heleHttpService.errorHandler(e, {
          BadRequestException: _badCode
        });
      }
    }
  }

  _badCode() {
    showToast("Code invalide. Veuillez réessayer.");
  }

  _tooManyAttempts() {
    showToast("Vous devez patienter avant de demander un nouveau code.");
  }

  showForgotPasswordDialog(BuildContext context, {String identification, Function onError}) async {
    return showDialog(
      context: context,
      builder: (_context) => AlertDialog(
        title: Text('Réinitialisation'),
        content: Form(
          key: _formKeys[0],
          child: Column(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text('La réinitialisation du mot de passe se fait en 2 étapes:\n1. Un code de vérification vous est envoyé par SMS.\n2. Votre nouveau mot de passe vous est envoyé après vérification.'),
              TextFormField(
                initialValue: identification,
                onSaved: (value) => this._phone = value,
                keyboardType: TextInputType.phone,
                decoration: InputDecoration(labelText: 'N° de téléphone'),
                validator: (value) {
                  if (!matches(value, r'^[0|\+33][6-7][0-9]{8}$')) {
                    return 'Entrez un numéro de téléphone mobile valide.';
                  }
                  return null;
                },
              )
            ],
          )
        ),
        actions: <Widget>[
          new FlatButton(
            child: Text('Envoyer'),
            onPressed: () => this._sendPasswordRequest(_context)
          )
        ],
      )
    );
  }

  _showForgotPasswordDialog2(BuildContext context) async {
    return showDialog(
      context: context,
      builder: (_context) => AlertDialog(
        title: Text('Réinitialisation'),
        content: Form(
          key: _formKeys[1],
          child: Column(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text('Un code vous a été envoyé par SMS ...'),
              TextFormField(
                onSaved: (value) => this._code = value,
                keyboardType: TextInputType.text,
                decoration: InputDecoration(labelText: 'Code de vérification'),
              )
            ],
          )
        ),
        actions: <Widget>[
          new FlatButton(
            child: Text('Réinitialisation'),
            onPressed: () => this._sendPasswordReset(_context)
          )
        ],
      )
    );
  }
}