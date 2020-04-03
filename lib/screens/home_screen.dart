import 'package:flutter/material.dart';
import 'package:hele/widgets/hele_button.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:hele/helpers/globals.dart' as globals;

class HomeScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return new HomeScreenState();
  }
}

class HomeScreenState extends State<StatefulWidget> {

  @override
  void initState() {
    super.initState();
  }

  void _logoutAsync(context) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.remove('jwt_token');
    await prefs.remove('jwt_refresh_token');
    Navigator.pushReplacementNamed(context, '/login');
  }

  void _goToCalendar() {
    print("Go to calendar");
  }

  Widget _buildDrawer() {
    return Drawer(
        child: ListView(
          // Important: Remove any padding from the ListView.
          padding: EdgeInsets.zero,
          children: <Widget>[
            DrawerHeader(
              child: Center(
                child: Image.asset('assets/logo-hele.png')
              )
            ),
            ListTile(
              leading: Icon(Icons.home),
              title: Text("Accueil"),
              selected: true,
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: Icon(Icons.calendar_today,),
              title: Text('Calendrier & Réservation'),
              onTap: () {
                Navigator.pop(context);
                _goToCalendar();
              },
            ),
            ListTile(
              leading: Icon(Icons.person),
              title: Text('Chat'),
              enabled: false,
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: Icon(Icons.people),
              title: Text('Chat de groupe'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: Icon(Icons.map),
              title: Text('Carte'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: Icon(Icons.help),
              title: Text('Aide & Numéros utiles'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: Icon(Icons.settings),
              title: Text('Paramètres'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
            Container(
              child: Text(
                "Connecté en tant que " + globals.loggedInUser.username,
                textAlign: TextAlign.right,
              ),
              padding: EdgeInsets.only(right: 12)
            )
          ],
        ),
      );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Accueil'),
      ),
      drawer: _buildDrawer(),
      body:
        Container(
          margin: const EdgeInsets.all(20.0),
          child: Column(
              children: <Widget>[
                Text(
                  "Fiche conseil de 140 caractères, elle dira que l'utilisateur est maitre de son destin, qu'il faut avoir confiance en soi. Courage et force.",
                  textAlign: TextAlign.center,
                ),
                Container(
                  margin: EdgeInsets.only(bottom: 16, top: 16),
                  child: Row(
                    children: <Widget>[
                      Icon(
                        Icons.calendar_today,
                        size: 48
                      ),
                      Expanded(
                        child: Text(
                          "Pas de rendez-vous.\nContactez un professionnel de santé dès maintenant",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: 18
                          )
                        )
                      )
                    ]
                  )
                ),
                HeleButton(onClick: _goToCalendar, text: "PRENDRE UN RENDEZ-VOUS", state: HeleButtonState.idle),
                Container(
                  margin: EdgeInsets.only(bottom: 16, top: 16),
                  child: Text("Vous pouvez parler avec des jeunes de votre âge en rejoignant le chat de groupe.")
                ),
                GestureDetector(
                  onTap: () async {
                    this._logoutAsync(context);
                  },
                  child: Text("[DEV] Se déconnecter")
                ),
              ]
          )
        )
    );
  }
}
