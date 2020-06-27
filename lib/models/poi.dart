import 'package:flutter/foundation.dart';

class POI {
  final int id;
  final String name;
  final String description;
  final String address;
  final String zipcode;
  final bool city;
  final int hour;
  final int phone;
  final String site;
  final double latitude;
  final double longitude;
  final int regionId;
  final DateTime createdAt;
  final DateTime updatedAt;

  POI({
    @required this.id,
    @required this.description,
    @required this.address,
    @required this.name,
    @required this.zipcode,
    @required this.city,
    @required this.hour,
    @required this.phone,
    @required this.site,
    @required this.latitude,
    @required this.longitude,
    @required this.regionId,
    @required this.createdAt,
    @required this.updatedAt,
  });

  factory POI.fromJson(Map<String, dynamic> json) {
    return POI(
        id: json['id'] as int,
        name: json['name'] as String,
        description: json['description'] as String,
        address: json['address'] as String,
        zipcode: json['zipcode'] as String,
        city: json['city'] as bool,
        hour: json['hour'] as int,
        phone: json['phone'] as int,
        site: json['site'] as String,
        latitude: json['latitude'] as double,
        longitude: json['longitude'] as double,
        regionId: json['region_id'] as int,
        createdAt: json['createdAt'] as DateTime,
        updatedAt: json['updatedAt'] as DateTime,
      );
  }
}
