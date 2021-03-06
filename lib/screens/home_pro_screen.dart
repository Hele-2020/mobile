import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:hele/helpers/globals.dart' as globals;

class HomeProScreen extends StatelessWidget {

  void _logoutAsync(context) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.remove('jwt_token');
    await prefs.remove('jwt_refresh_token');
    Navigator.pushReplacementNamed(context, '/login');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('PRO'),
      ),
      body:
        Center(
          child: Container(
            margin: const EdgeInsets.all(20.0),
            child: GestureDetector(
              onTap: () async {
                this._logoutAsync(context);
              },
              child: Text(globals.loggedInUser.username)
            )
          )
        )
    );
  }
}
