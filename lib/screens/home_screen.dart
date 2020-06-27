import 'package:flutter/material.dart';
import 'package:hele/screens/home/settings.dart';
import 'package:hele/widgets/hele_button.dart';

import 'package:hele/helpers/globals.dart' as globals;

import 'home/chat.dart';
import 'home/wip.dart';

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

  void _goToCalendar() {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => WipScreen()));
  }

  void _goToChat() {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => ChatScreen()));
  }

  void _goToGroupChat() {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => WipScreen()));
  }

  void _goToMap() {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => WipScreen()));
  }

  void _goToHelp() {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => WipScreen()));
  }

  void _goToSettings() {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => SettingsScreen()));
  }

  Widget _buildDrawer() {
    return Drawer(
      child: ListView(
        // Important: Remove any padding from the ListView.
        padding: EdgeInsets.zero,
        children: <Widget>[
          DrawerHeader(
              child: Center(child: Image.asset('assets/logo-hele.png'))),
          ListTile(
            leading: Icon(
              Icons.calendar_today,
            ),
            title: Text('Calendrier & Rendez-vous'),
            onTap: () {
              Navigator.pop(context);
              _goToCalendar();
            },
          ),
          ListTile(
            leading: Icon(Icons.person),
            title: Text('Chat'),
            onTap: () {
              Navigator.pop(context);
              _goToChat();
            },
          ),
          ListTile(
            leading: Icon(Icons.people),
            title: Text('Chat de groupe'),
            onTap: () {
              Navigator.pop(context);
              _goToGroupChat();
            },
          ),
          ListTile(
            leading: Icon(Icons.map),
            title: Text('Carte'),
            onTap: () {
              Navigator.pop(context);
              _goToMap();
            },
          ),
          ListTile(
            leading: Icon(Icons.help),
            title: Text('Aide & Numéros utiles'),
            onTap: () {
              Navigator.pop(context);
              _goToHelp();
            },
          ),
          ListTile(
            leading: Icon(Icons.settings),
            title: Text('Paramètres'),
            onTap: () {
              Navigator.pop(context);
              _goToSettings();
            },
          ),
          SizedBox(height: 24),
          Center(
            child: Text(
              "Connecté en tant que " + globals.loggedInUser.username,
              textAlign: TextAlign.center,
            ),
          )
        ],
      ),
    );
  }

  Widget _buildHome() {
    return Column(children: <Widget>[
      Text(
        "Fiche conseil de 140 caractères, elle dira que l'utilisateur est maitre de son destin, qu'il faut avoir confiance en soi. Courage et force.",
        textAlign: TextAlign.center,
      ),
      Container(
          margin: EdgeInsets.only(bottom: 16, top: 16),
          child: Row(children: <Widget>[
            Icon(Icons.calendar_today, size: 48),
            Expanded(
                child: Text(
                    "Pas de rendez-vous.\nContactez un professionnel de santé dès maintenant",
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 18)))
          ])),
      HeleButton(
          onClick: _goToCalendar,
          text: "PRENDRE UN RENDEZ-VOUS",
          state: HeleButtonState.idle),
      Container(
          margin: EdgeInsets.only(bottom: 16, top: 16),
          child: Text(
              "Vous pouvez parler avec des jeunes de votre âge en rejoignant le chat de groupe.")),
    ]);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Accueil'),
          actions: [],
        ),
        drawer: _buildDrawer(),
        body: Container(
            margin: EdgeInsets.all(16),
            child: SingleChildScrollView(child: _buildHome())));
  }
}

enum DrawerMenu { home, calendar, chat, group_chat, map, help, settings }
