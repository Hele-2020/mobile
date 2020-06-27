import 'package:flutter/material.dart';
import 'package:hele/models/poi.dart';
import 'package:hele/models/region.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter_map/flutter_map.dart';
// import 'package:flutter_map_marker_cluster/flutter_map_marker_cluster.dart';
import 'package:latlong/latlong.dart';

class MapScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => MapScreenState();
}

class MapScreenState extends State<MapScreen> {
  int _zoom = 13;
  LatLng _center = new LatLng(48.858372, 2.2944984);
  Region _selectedRegion = null;
  List<Region> _allRegions = [];
  List<POI> _pois = [];

  @override
  void initState() {
    super.initState();
    _selectedRegion = getCurrentUserRegion();
    _allRegions = getRegions();
    _pois = getPOIs(_selectedRegion);
  }

  Region getCurrentUserRegion() {
    return null;
  }

  List<Region> getRegions() {
    return [];
  }

  List<POI> getPOIS(Region region) {
    if (region == null) {
      return [];
    }
    return [];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text("Points d'intérêt")),
        body: FlutterMap(
          options: MapOptions(
            center: _center,
            zoom: _zoom,
            plugins: [
              // MarkerClusterPlugin(),
            ],
          ),
          layers: [
            TileLayerOptions(
                urlTemplate:
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                subdomains: ['a', 'b', 'c']),
            // MarkerClusterLayerOptions(
            //   maxClusterRadius: 120,
            //   markers: [],
            // )
          ],
        ));
  }
}
