import 'package:flutter/material.dart';
import 'package:hele/helpers/hele_http_service.dart';
import 'package:hele/models/user.dart';
import 'package:hele/responses/login_response.dart';
import 'package:hele/widgets/hele_button.dart';
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

  BuildContext _context;

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
      _loginSuccess(response.user);
    } catch (e) {
      heleHttpService.errorHandler(_context, e, {
        UnauthorizedException: _loginFailed,
        NotFoundException: _loginFailed,
      });
      print(e.toString());
    }
  }

  void _loginFailed() {
    setState(() {
      _loginButtonState = HeleButtonState.idle;
      _error = "N° de téléphone ou mot de passe incorrect.";
    });
  }

  void _loginSuccess(User user) {
    String route = '/';
    if (user.isPro()) {
      route = '/pro/home';
    }
    Navigator.pushReplacementNamed(context, route);
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

  Widget _setupRegisterLink() {
    return GestureDetector(
      onTap: () {
        Navigator.pushReplacementNamed(context, '/register');
      },
      child: Text.rich(
        TextSpan(
          text: "Vous n'avez pas de compte ? ",
          children: <TextSpan>[
            TextSpan(text: 'Enregistrez-vous', style: TextStyle(
              fontWeight: FontWeight.bold,
              color: Colors.lightBlue,
              decoration: TextDecoration.underline,
              decorationColor: Colors.lightBlue,
            )),
          ],
        ),
      )
    );
  }

  Widget _setupLoginButton() {
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

  Widget _setupForm() {
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
          _setupLoginButton()
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
        Builder(
          builder: (BuildContext newContext) {
            _context = newContext;
            return Center(
              child: Container(
                height: double.maxFinite,
                margin: EdgeInsets.all(20.0),
                child: new Stack(
                  //alignment:new Alignment(x, y)
                  children: <Widget>[
                    new Positioned(
                      child: _setupForm()
                    ),
                    new Positioned(
                      child: new Align(
                        alignment: FractionalOffset.bottomCenter,
                        child: Padding(
                          padding: const EdgeInsets.only(bottom: 64.0),
                          child: _setupRegisterLink()
                        )
                      ),
                    )
                  ],
                ),
              )
            );
          }
        )
    );
  }
}
