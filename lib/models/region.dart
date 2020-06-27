import 'package:flutter/foundation.dart';

class Region {
  final int id;
  final String name;
  final double latitude;
  final double longitude;
  final double latitudeDelta;
  final double longitudeDelta;
  final DateTime createdAt;
  final DateTime updatedAt;

  Region({
    @required this.id,
    @required this.name,
    @required this.latitude,
    @required this.longitude,
    @required this.latitudeDelta,
    @required this.longitudeDelta,
    @required this.createdAt,
    @required this.updatedAt,
  });

  factory Region.fromJson(Map<String, dynamic> json) {
    return Region(
        id: json['id'] as int,
        name: json['name'] as String,
        latitude: json['latitude'] as double,
        longitude: json['longitude'] as double,
        latitudeDelta: json['latitudeDelta'] as double,
        longitudeDelta: json['longitudeDelta'] as double,
        createdAt: json['createdAt'] as DateTime,
        updatedAt: json['updatedAt'] as DateTime,
      );
  }
}
