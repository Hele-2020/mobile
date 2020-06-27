import 'package:flutter/material.dart';
import 'package:hele/helpers/hele_http_service.dart';
import 'package:hele/widgets/auth/password_reset_dialog.dart';
import 'package:hele/responses/auth/login_response.dart';
import 'package:hele/widgets/hele_button.dart';
import 'package:hele/widgets/hele_link_text.dart';
import 'package:oktoast/oktoast.dart';
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
    setState(() {
      _loginButtonState = HeleButtonState.loading;
      _error = null;
    });
    try {
      var response =
          await heleHttpService.call<LoginResponse>('login', body: _getForm());
      setState(() {
        _loginButtonState = HeleButtonState.success;
      });
      SharedPreferences prefs = await SharedPreferences.getInstance();
      await prefs.setString('jwt_token', response.accessToken);
      // await prefs.setString('jwt_refresh_token', response.accessToken.refreshToken);
      _loginSuccess();
    } catch (e) {
      print(e.toString());
      setState(() {
        _loginButtonState = HeleButtonState.error;
      });
      heleHttpService.errorHandler(e, {
        BadRequestException: _loginFailed,
      });
    }
  }

  void _loginFailed(Error e) {
    setState(() {
      _error = "N° de téléphone ou mot de passe incorrect.";
    });
  }

  void _loginSuccess() {
    Navigator.pushReplacementNamed(context, '/');
  }

  Map<String, String> _getForm() {
    Map<String, String> form = {'password': _password};
    if (_identification.contains('@')) {
      form['email'] = _identification;
    } else {
      form['phone'] = _identification;
    }
    return form;
  }

  Widget _setupRegisterLink(BuildContext context) {
    return Row(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
      Text("Vous n'avez pas de compte ? "),
      HeleLinkText(
          text: "Enregistrez-vous",
          onTap: () {
            Navigator.pushReplacementNamed(context, '/register');
          })
    ]);
  }

  Widget _setupForgotPasswordLink(BuildContext context) {
    return Row(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
      Text("Mot de passe oublié ? "),
      HeleLinkText(
          text: "Réinitialisez-le",
          onTap: () {
            this._formKey.currentState.save();
            this.passwordResetDialog.showForgotPasswordDialog(context,
                identification: this._identification);
          })
    ]);
  }

  Widget _setupLoginButton() {
    return HeleButton(
        onClick: () {
          if (_loginButtonState == HeleButtonState.loading) {
            return;
          }
          if (_formKey.currentState.validate()) {
            _formKey.currentState.save();
            this._loginAsync();
          }
        },
        state: _loginButtonState,
        text: "CONNEXION");
  }

  Widget _setupQuickLoginYoungButton() {
    return HeleButton(
        onClick: () {
          this._identification = '0600000000';
          this._password = 'C/a8}k}f+K';
          this._loginAsync();
        },
        state: HeleButtonState.idle,
        text: "[DEV] Quick co YOUNG");
  }

  Widget _setupQuickLoginProButton() {
    return HeleButton(
        onClick: () {
          this._identification = '0600000001';
          this._password = 'bN2BVC<(QV';
          this._loginAsync();
        },
        state: HeleButtonState.idle,
        text: "[DEV] Quick co PRO");
  }

  Widget _setupTestToastButton() {
    return HeleButton(
        onClick: () {
          showToast("Blah blah");
        },
        state: HeleButtonState.idle,
        text: "[DEV] Show toast");
  }

  Widget _setupErrorMessage() {
    return new Visibility(
        child: new Padding(
            padding: const EdgeInsets.all(16.0),
            child: new Text(
              _error == null ? "" : _error,
              style: const TextStyle(
                color: Colors.red,
                fontSize: 16.0,
              ),
            )),
        visible: _error != null);
  }

  Widget _setupForm(BuildContext context) {
    return Form(
        key: _formKey,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Center(child: Image.asset('assets/logo-hele-large.png')),
            SizedBox(height: 48),
            TextFormField(
              onSaved: (value) => this._identification = value,
              keyboardType: TextInputType.phone,
              decoration: InputDecoration(labelText: 'N° de téléphone'),
              validator: (value) {
                if (!matches(value, r'^[0|\+33][6-7][0-9]{8}$')) {
                  if (matches(value, r'^[\w\.]{2,}@\w{2,}\.\w{2,4}$'))
                    return null;
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
            SizedBox(height: 12),
            _setupLoginButton(),
            SizedBox(height: 12),
            _setupRegisterLink(context),
            SizedBox(height: 12),
            _setupForgotPasswordLink(context),
            SizedBox(height: 12),
            _setupQuickLoginYoungButton(),
            _setupQuickLoginProButton(),
            _setupTestToastButton(),
          ],
        ));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Connexion'),
        ),
        body: SingleChildScrollView(
          child: Container(
              margin: EdgeInsets.all(20.0), child: _setupForm(context)),
        ));
  }
}
