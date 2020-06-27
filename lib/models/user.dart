import 'package:flutter/foundation.dart';

class User {
  final int id;
  final String username;
  final String phone;
  final String email;
  final String role;
  final int active;
  final int birthyear;
  final int establishment_id;
  final String phone_pro;
  final String profession;
  final String city;
  final String last_login;
  final String created_at;
  final String updated_at;

  User({
    @required this.id,
    @required this.phone,
    @required this.email,
    @required this.username,
    @required this.role,
    @required this.active,
    @required this.birthyear,
    @required this.establishment_id,
    @required this.phone_pro,
    @required this.profession,
    @required this.city,
    @required this.last_login,
    @required this.created_at,
    @required this.updated_at,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'] as int,
      username: json['username'] as String,
      phone: json['phone'] as String,
      email: json['email'] as String,
      role: json['role'] as String,
      active: json['active'] as int,
      birthyear: json['birthyear'] as int,
      establishment_id: json['establishment_id'] as int,
      phone_pro: json['phonePro'] as String,
      profession: json['profession'] as String,
      city: json['city'] as String,
      last_login: json['last_login'] as String,
      created_at: json['createdAt'] as String,
      updated_at: json['updated_at'] as String,
    );
  }

  bool isYoung() => this.role == "YOUNG";
  bool isMod() => this.role == "MODERATOR";
  bool isPro() => this.role == "PROFESSIONAL";
  bool isAdmin() => this.role == "ADMIN";
}
