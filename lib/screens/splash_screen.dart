import 'dart:async';
import 'package:flutter/material.dart';
import 'package:hele/models/user.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:loading_animations/loading_animations.dart';
import 'package:hele/helpers/hele_http_service.dart';
import 'package:hele/responses/auth/token_check_response.dart';

import 'package:hele/helpers/globals.dart' as globals;


class SplashScreen extends StatelessWidget {

  SplashScreen(BuildContext context) {
    this.getTokenAsync().then((String token) {
      if (token != null) {
        this.checkTokenAsync(token).then((User user) {
          if (user == null) {
            globals.loggedInUser = null;
            globals.jwtToken = null;
            Navigator.pushReplacementNamed(context, '/login');
          } else {
            globals.loggedInUser = user;
            globals.jwtToken = token;
            if (user.isPro()) {
              Navigator.pushReplacementNamed(context, '/pro/home');
            } else {
              Navigator.pushReplacementNamed(context, '/home');
            }
          }
        });
      } else {
        globals.loggedInUser = null;
        globals.jwtToken = null;
        Navigator.pushReplacementNamed(context, '/login');
      }
    });
  }

  Future<String> getTokenAsync() async {
    await new Future.delayed(const Duration(seconds : 1));
    SharedPreferences prefs = await SharedPreferences.getInstance();
    return prefs.getString('jwt_token') ?? null;
  }

  Future<User> checkTokenAsync(String token) async {
    TokenCheckResponse response = await heleHttpService.call<TokenCheckResponse>('check', accessToken: token);
    return response.user;
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: LoadingBouncingGrid.square(
        backgroundColor: Colors.cyan, inverted: true
      )
    );
  }
}
