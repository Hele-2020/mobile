import 'dart:async';
import 'package:flutter/material.dart';
import 'package:hele/models/api_response.dart';
import 'package:hele/models/user.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:loading_animations/loading_animations.dart';
import 'package:hele/helpers/hele_http_service.dart';

import 'package:hele/helpers/globals.dart' as globals;

class SplashScreen extends StatelessWidget {
  SplashScreen(BuildContext context) {
    this.getTokenAsync().then((String token) {
      if (token != null) {
        this.checkTokenAsync(token).then((User user) {
          globals.loggedInUser = user;
          globals.jwtToken = token;
          if (user.isPro()) {
            Navigator.pushReplacementNamed(context, '/pro/home');
          } else {
            Navigator.pushReplacementNamed(context, '/home');
          }
        }).catchError((Object e) {
          globals.loggedInUser = null;
          globals.jwtToken = null;
          Navigator.pushReplacementNamed(context, '/login');
        });
      } else {
        globals.loggedInUser = null;
        globals.jwtToken = null;
        Navigator.pushReplacementNamed(context, '/login');
      }
    });
  }

  Future<String> getTokenAsync() async {
    //await new Future.delayed(const Duration(seconds: 1));
    SharedPreferences prefs = await SharedPreferences.getInstance();
    return prefs.getString('jwt_token') ?? null;
  }

  Future<User> checkTokenAsync(String token) async {
    APIResponse response =
        await heleHttpService.call('check', accessToken: token);
    User user = User.fromJson(response.data);
    if (response.data.containsKey('chats')) {
      for (final e in response.data['chats']) {
        if (e['type'] == "PRIVATE") {
          user.privateChats.add(e['id']);
        } else if (e['type'] == "GROUP") {
          user.groupChats.add(e['id']);
        }
      }
    }
    return user;
  }

  @override
  Widget build(BuildContext context) {
    return Center(
        child: LoadingBouncingGrid.square(
            backgroundColor: Colors.cyan, inverted: true));
  }
}
