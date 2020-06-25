import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:package_info/package_info.dart';

class SettingsScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => SettingsScreenState();
}

class SettingsScreenState extends State<SettingsScreen> {
  PackageInfo _packageInfo = PackageInfo(
    appName: 'Unknown',
    packageName: 'Unknown',
    version: 'Unknown',
    buildNumber: 'Unknown',
  );

  @override
  void initState() {
    super.initState();
    _initPackageInfo();
  }

  Future<void> _initPackageInfo() async {
    final PackageInfo info = await PackageInfo.fromPlatform();
    setState(() {
      _packageInfo = info;
    });
  }

  void _logoutAsync() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.remove('jwt_token');
    await prefs.remove('jwt_refresh_token');
    Navigator.pop(context);
    Navigator.pushReplacementNamed(context, '/login');
  }

  Widget _buildSimplePopup() {
    return PopupMenuButton<SettingsChoices>(
      onSelected: (value) => {
        if (value == SettingsChoices.disconnect) {_logoutAsync()}
      },
      itemBuilder: (context) => [
        PopupMenuItem(
          value: SettingsChoices.disconnect,
          child: Text("Déconnexion"),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            title: Text("Paramètres"), actions: <Widget>[_buildSimplePopup()]),
        body: SingleChildScrollView(
            child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
              Card(
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10)),
                  child: Column(
                    children: <Widget>[
                      ListTile(
                        title: Text("Rien ici pour l'instant"),
                      )
                    ],
                  )),
              SizedBox(height: 12),
              Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    Text(
                        "Hélé v${_packageInfo.version}+${_packageInfo.buildNumber}")
                  ])
            ])));
  }
}

enum SettingsChoices { disconnect }
