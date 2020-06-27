import 'package:flutter/foundation.dart';

class Message {
  final int id;
  final String username;
  final String content;
  final DateTime timestamp;

  Message({
    @required this.id,
    @required this.username,
    @required this.content,
    @required this.timestamp,
  });

  factory Message.fromJson(Map<String, dynamic> json) {
    return Message(
        id: json['id'] as int,
        username: json['username'] as String,
        content: json['content'] as String,
        timestamp: json['timestamp'] as DateTime);
  }
}
