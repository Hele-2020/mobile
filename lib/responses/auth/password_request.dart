import 'package:flutter/foundation.dart';

class PasswordRequestResponse {
  final String code;
  final int userId;

  PasswordRequestResponse({
    @required this.code,
    this.userId,
  });

  factory PasswordRequestResponse.fromJson(Map<String, dynamic> json) {
    return PasswordRequestResponse(
      code: json['code'],
      userId: json['user_id'],
    );
  }
}