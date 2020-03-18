import 'package:flutter/material.dart';
import 'package:hele/helpers/launch_url.dart';
import 'package:hele/responses/register_response.dart';
import 'package:hele/widgets/hele_button.dart';
import 'package:validators/validators.dart';
import 'package:hele/helpers/hele_http_service.dart';


class RegisterScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return new RegisterScreenState();
  }
}

class RegisterScreenState extends State<StatefulWidget> {
  HeleButtonState _registerButtonState = HeleButtonState.idle;
  String _error;
  String _phone;
  String _username;
  String _establishmentCode = "BDX";
  int _age;
  int _regionId = 2;
  bool _agreeTos = false;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  BuildContext _context;

  @override
  void initState() {
    super.initState();
  }

  void _registerAsync() async {
    setState(() { _registerButtonState = HeleButtonState.loading; _error = null; });
    try {
      RegisterResponse res = await heleHttpService.call<RegisterResponse>('register', body: {
        'phone': this._phone,
        'username': this._username,
        'age': this._age.toString(),
        'region_id': this._regionId.toString(),
        'establishment_code': this._establishmentCode,
      });
      setState(() { _registerButtonState = HeleButtonState.success; _error = null; });
      print(res.password);
      Navigator.pushReplacementNamed(context, '/');
    } catch (e) {
      setState(() { _registerButtonState = HeleButtonState.idle; });
      heleHttpService.errorHandler(_context, e, {
        BadRequestException: (BadRequestException e) {
          setState(() { _error = e.errors.join('\n'); });
        }
      });
      print(e.toString());
    }
  }

  Widget _setupLoginLink() {
    return GestureDetector(
      onTap: () {
        Navigator.pushReplacementNamed(context, '/login');
      },
      child: Text.rich(
        TextSpan(
          text: "Vous avez déjà un compte ? ",
          children: <TextSpan>[
            TextSpan(text: 'Connectez-vous', style: TextStyle(
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

  Widget _setupTosCheckbox() {
    return Container(
      child: Column(
        children: <Widget>[
          new CheckboxListTile(
              value: _agreeTos,
              onChanged: (bool value) => setState(() => _agreeTos = value),
              title: GestureDetector(
                onTap: () {
                  launchURL("https://hele-app.fr/cg-app.html");
                },
                child: Text.rich(
                  TextSpan(
                    text: "J'accepte les ",
                    children: <TextSpan>[
                      TextSpan(text: 'Conditions Générales', style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: Colors.lightBlue,
                        decoration: TextDecoration.underline,
                        decorationColor: Colors.lightBlue,
                      )),
                    ],
                  ),
                )
              ),
              controlAffinity: ListTileControlAffinity.leading,
          ),
        ]
      )
    );
  }

  Widget _setupRegisterButton() {
    return HeleButton(onClick: () {
      if (_registerButtonState == HeleButtonState.loading) {
        return;
      }
      if (!_agreeTos) {
        setState(() {
          _registerButtonState = HeleButtonState.idle;
          _error = "Vous devez acceptez les Conditions Générales.";
        });
        return;
      }
      if (_formKey.currentState.validate()) {
        _formKey.currentState.save();
        this._registerAsync();
      }
    }, state: _registerButtonState, text: "S'INSCRIRE");
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
        children: [
          TextFormField(
            onSaved: (value) => this._phone = value,
            keyboardType: TextInputType.phone,
            decoration: InputDecoration(labelText: 'N° de téléphone'),
            validator: (value) {
              if (!matches(value, r'^[0|\+33][6-7][0-9]{8}$')) {
                return 'Entrez un numéro de téléphone mobile valide.';
              }
              return null;
            },
          ),
          TextFormField(
            onSaved: (value) => this._username = value,
            keyboardType: TextInputType.text,
            decoration: InputDecoration(labelText: 'Pseudonyme (public)'),
            validator: (value) {
              if (!matches(value, r'^[a-zA-Z0-9-_]{3,20}$')) {
                return "Entrez un pseudonyme allant de 3 à 20 caractères (sans espace).";
              }
              return null;
            },
          ),
          TextFormField(
            onSaved: (value) => this._establishmentCode = value,
            keyboardType: TextInputType.text,
            decoration: InputDecoration(labelText: 'Code établissement'),
            validator: (value) {
              if (value.isEmpty) {
                return "Veuillez entrer un code d'établissement.";
              }
              return null;
            },
          ),
          TextFormField(
            onSaved: (value) => this._age = int.parse(value),
            keyboardType: TextInputType.number,
            decoration: InputDecoration(labelText: 'Âge'),
            validator: (value) {
              if (value.isEmpty) {
                return "Veuillez entrer votre âge.";
              }
              int v = int.parse(value);
              if (v < 10 || v > 99) {
                return "Entrez votre âge.";
              }
              return null;
            },
          ),
          _setupTosCheckbox(),
          _setupErrorMessage(),
          _setupRegisterButton(),
        ]
      )
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('RegisterScreen'),
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
                          child: _setupLoginLink()
                        )
                      ),
                    )
                  ],
                ),
              )
          );
        })
    );
  }
}
