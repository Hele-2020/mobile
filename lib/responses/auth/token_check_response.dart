import 'package:flutter/foundation.dart';
import 'package:hele/models/user.dart';

class TokenCheckResponse {
  final User user;

  TokenCheckResponse({
    @required this.user
  });

  factory TokenCheckResponse.fromJson(Map<String, dynamic> json) {
    User u = User.fromJson(json);
    return TokenCheckResponse(
      user: u
    );
  }
}