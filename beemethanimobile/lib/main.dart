import 'package:beemethanimobile/login.dart';
import 'package:beemethanimobile/maps.dart';
import 'package:beemethanimobile/register.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: "/",
      routes: {
        "/": (_) => Login(),
        "/register": (_) => Register(),
        "/map": (_) => AppMap()
      },
    );
  }
}
