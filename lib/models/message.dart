import 'package:flutter/foundation.dart';

class Message {
  final int id;
  final String username;
  final String body;
  final DateTime timestamp;

  Message({
    @required this.id,
    @required this.username,
    @required this.body,
    @required this.timestamp,
  });

  factory Message.fromJson(Map<String, dynamic> json) {
    return Message(
        id: json['id'] as int,
        username: json['user']['username'] as String,
        body: json['body'] as String,
        timestamp: DateTime.parse(json['updated_at']));
  }
}
