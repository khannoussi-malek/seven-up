import 'dart:convert';

import 'package:convex_bottom_bar/convex_bottom_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';
import 'package:http/http.dart' as http;

class AppMap extends StatefulWidget {
  const AppMap({super.key});

  @override
  State<AppMap> createState() => _AppMapState();
}

class _AppMapState extends State<AppMap> {
  Color areaColor = Colors.red;

  @override
  void initState() {
    super.initState();
    getWeather();
  }

  Future<void> getWeather() async {
    var response = await http.get(Uri.parse(
        'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.419&current_weather=true'));
    var current_weather = jsonDecode(response.body)["current_weather"];

    setState(() {
      if (current_weather["temperature"] < 9) {
        areaColor = Colors.green;
      }
    });
  }

  Future<void> addSignale(latitude, longitude) async {
    print({'lg': longitude, 'lat': latitude});
    var response = await http.post(Uri.parse('http://10.0.2.2:80/signale/'),
        body: jsonEncode({'lg': longitude, 'lat': latitude}),
        headers: {"Content-type": "application/json"});
    print(response.body);
  }

  LatLng point = LatLng(33.892166, 9.561555499999997);
  LatLng? suspectPoint;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          FlutterMap(
            options: MapOptions(
                onTap: (x, p) {
                  setState(() {
                    suspectPoint = p;
                    addSignale(p.latitude, p.longitude);
                  });
                },
                center: LatLng(33.892166, 9.561555499999997),
                zoom: 10.0),
            children: [
              TileLayer(
                urlTemplate:
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                subdomains: ['a', 'b', 'c'],
              ),
              suspectPoint != null
                  ? MarkerLayer(
                      markers: [
                        Marker(
                            width: 100.0,
                            height: 100.0,
                            point: point,
                            builder: (ctx) => Icon(
                                  Icons.location_on,
                                  color: Colors.red,
                                )),
                        Marker(
                            width: 100.0,
                            height: 100.0,
                            point: suspectPoint!,
                            builder: (ctx) => Icon(
                                  Icons.location_on,
                                  color: Colors.red,
                                ))
                      ],
                    )
                  : MarkerLayer(
                      markers: [
                        Marker(
                            width: 100.0,
                            height: 100.0,
                            point: point,
                            builder: (ctx) => Icon(
                                  Icons.location_on,
                                  color: Colors.red,
                                )),
                      ],
                    ),
              CircleLayer(circles: [
                CircleMarker(
                    point: LatLng(33.892166, 9.561555499999997),
                    color: areaColor.withOpacity(0.3),
                    borderStrokeWidth: 3.0,
                    borderColor: Colors.blue,
                    radius: 100 //radius
                    )
              ])
            ],
          )
        ],
      ),
      bottomNavigationBar: ConvexAppBar(
        backgroundColor: Color.fromRGBO(252, 211, 106, 1),
        style: TabStyle.react,
        items: [
          TabItem(icon: Icons.tips_and_updates, title: "Tips"),
          TabItem(icon: Icons.map, title: "Map"),
          TabItem(icon: Icons.question_answer, title: "Q&A"),
        ],
        initialActiveIndex: 1,
        onTap: (int i) => print('click index=$i'),
      ),
    );
  }
}
