import 'package:hele/models/user.dart';

class PasswordResetResponse {
  final User user;
  final String password;

  PasswordResetResponse({
    this.user,
    this.password,
  });

  factory PasswordResetResponse.fromJson(Map<String, dynamic> json) {
    return PasswordResetResponse(
      user: json['user'] == null ? User.fromJson(json['user']) : null,
      password: json['password'] ?? null,
    );
  }
}