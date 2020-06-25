import 'package:flutter/foundation.dart';
import 'package:hele/models/access_token.dart';
import 'package:hele/models/user.dart';

class LoginResponse {
  final User user;
  final String accessToken;

  LoginResponse({
    @required this.user,
    @required this.accessToken,
  });

  factory LoginResponse.fromJson(Map<String, dynamic> json) {
    User u = User.fromJson(json['user']);
    //AccessToken at = AccessToken.fromJson(json['accessToken']);
    return LoginResponse(
      user: u,
      accessToken: json['accessToken'],
    );
  }
}