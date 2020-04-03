import 'package:flutter/material.dart';
import 'package:hele/helpers/hele_http_service.dart';
import 'package:hele/widgets/auth/password_reset_dialog.dart';
import 'package:hele/responses/auth/login_response.dart';
import 'package:hele/widgets/hele_button.dart';
import 'package:hele/widgets/hele_link_text.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:validators/validators.dart';

class LoginScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return new LoginScreenState();
  }
}

class LoginScreenState extends State<StatefulWidget> {
  HeleButtonState _loginButtonState = HeleButtonState.idle;
  String _error;
  String _identification;
  String _password;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final passwordResetDialog = new PasswordResetDialog();

  @override
  void initState() {
    super.initState();
  }

  void _loginAsync() async {
    setState(() { _loginButtonState = HeleButtonState.loading; _error = null; });
    try {
      var response = await heleHttpService.call<LoginResponse>('login', body: _getForm());
      setState(() { _loginButtonState = HeleButtonState.success; });
      SharedPreferences prefs = await SharedPreferences.getInstance();
      await prefs.setString('jwt_token', response.accessToken.token);
      await prefs.setString('jwt_refresh_token', response.accessToken.refreshToken);
      _loginSuccess();
    } catch (e) {
      setState(() {
        _loginButtonState = HeleButtonState.error;
      });
      heleHttpService.errorHandler(e, {
        BadRequestException: _loginFailed,
      });
      print(e.toString());
    }
  }

  void _loginFailed(Exception e) {
    setState(() { _error = "N° de téléphone ou mot de passe incorrect."; });
  }

  void _loginSuccess() {
    Navigator.pushReplacementNamed(context, '/');
  }

  Map<String, String> _getForm() {
    Map<String, String> form = {
      'password': _password
    };
    if (_identification.contains('@')) {
      form['email'] = _identification;
    } else {
      form['phone'] = _identification;
    }
    return form;
  }

  Widget _setupRegisterLink(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text("Vous n'avez pas de compte ? "),
        HeleLinkText(
          text: "Enregistrez-vous",
          onTap: () {
            Navigator.pushReplacementNamed(context, '/register');
          }
        )
      ]
    );
  }

  Widget _setupForgotPasswordLink(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text("Mot de passe oublié ? "),
        HeleLinkText(
          text: "Réinitialisez-le",
          onTap: () {
            this._formKey.currentState.save();
            this.passwordResetDialog.showForgotPasswordDialog(context, identification: this._identification);
          }
        )
      ]
    );
  }

  Widget _setupLoginButton(BuildContext context) {
    return HeleButton(onClick: () {
      if (_loginButtonState == HeleButtonState.loading) {
        return;
      }
      if (_formKey.currentState.validate()) {
        _formKey.currentState.save();
        this._loginAsync();
      }
    }, state: _loginButtonState, text: "CONNEXION");
  }

  Widget _setupErrorMessage() {
    return new Padding(
      padding: const EdgeInsets.all(16.0),
      child: new Text(
        _error == null ? "" : _error,
        style: const TextStyle(
          color: Colors.red,
          fontSize: 16.0,
        ),
      )
    );
  }

  Widget _setupForm(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          TextFormField(
            onSaved: (value) => this._identification = value,
            keyboardType: TextInputType.phone,
            decoration: InputDecoration(labelText: 'N° de téléphone'),
            validator: (value) {
              if (!matches(value, r'^[0|\+33][6-7][0-9]{8}$')) {
                if (matches(value, r'^[\w\.]{2,}@\w{2,}\.\w{2,4}$')) return null;
                return 'Entrez un numéro de téléphone mobile valide.';
              }
              return null;
            },
          ),
          TextFormField(
            onSaved: (value) => this._password = value,
            obscureText: true,
            decoration: InputDecoration(labelText: 'Mot de passe'),
            validator: (value) {
              if (value.isEmpty) {
                return "Veuillez entrer votre mot de passe.";
              }
              return null;
            },
          ),
          _setupErrorMessage(),
          _setupLoginButton(context)
        ],
      )
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('LoginScreen'),
      ),
      body:
        Center(
          child: Container(
            height: double.maxFinite,
            margin: EdgeInsets.all(20.0),
            child: new Stack(
              //alignment:new Alignment(x, y)
              children: <Widget>[
                new Positioned(
                  child: _setupForm(context)
                ),
                new Positioned(
                  child: new Align(
                    alignment: FractionalOffset.bottomCenter,
                    child: Padding(
                      padding: const EdgeInsets.only(bottom: 64.0),
                      child: _setupRegisterLink(context)
                    )
                  ),
                ),
                new Positioned(
                  child: new Align(
                    alignment: FractionalOffset.bottomCenter,
                    child: Padding(
                      padding: const EdgeInsets.only(bottom: 32.0),
                      child: _setupForgotPasswordLink(context)
                    )
                  ),
                )
              ],
            ),
          )
        )
    );
  }
}
