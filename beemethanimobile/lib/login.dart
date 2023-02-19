import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:http/http.dart' as http;

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  String errMsg = "";
  TextEditingController _usernameCtrl = TextEditingController();
  TextEditingController _passwordCtrl = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            SizedBox(height: 120),
            Image.asset('assets/img/logo1.png'),
            SizedBox(
              height: 70,
            ),
            Stack(
              children: [
                Container(
                  height: MediaQuery.of(context).size.height - 283,
                  decoration: const BoxDecoration(
                      color: Color.fromRGBO(252, 211, 106, 1),
                      borderRadius: BorderRadius.only(
                          topLeft: Radius.circular(30.0),
                          topRight: Radius.circular(30.0))),
                ),
                Column(
                  children: [
                    Container(
                        margin: EdgeInsets.only(top: 50, left: 50, right: 50),
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: Color.fromRGBO(252, 211, 106, 1),
                            ),
                            color: Colors.white,
                            borderRadius:
                                BorderRadius.all(Radius.circular(10.0))),
                        child: Center(
                          child: Padding(
                            padding: const EdgeInsets.all(20.0),
                            child: Column(children: [
                              Text(
                                errMsg,
                                style: GoogleFonts.skranji(color: Colors.red),
                              ),
                              TextField(
                                controller: _usernameCtrl,
                                style: GoogleFonts.skranji(),
                                decoration: InputDecoration(
                                    hintStyle: GoogleFonts.skranji(),
                                    border: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(30.0),
                                    ),
                                    enabledBorder: const OutlineInputBorder(
                                      borderSide: const BorderSide(
                                          color:
                                              Color.fromRGBO(252, 211, 106, 1),
                                          width: 3.0),
                                    ),
                                    focusedBorder: const OutlineInputBorder(
                                      borderSide: const BorderSide(
                                          color:
                                              Color.fromRGBO(252, 211, 106, 1),
                                          width: 3.0),
                                    ),
                                    hintText: 'Username'),
                              ),
                              SizedBox(
                                height: 10,
                              ),
                              TextField(
                                controller: _passwordCtrl,
                                style: GoogleFonts.skranji(),
                                obscureText: true,
                                decoration: InputDecoration(
                                    hintStyle: GoogleFonts.skranji(),
                                    border: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(30.0),
                                    ),
                                    enabledBorder: const OutlineInputBorder(
                                      borderSide: const BorderSide(
                                          color:
                                              Color.fromRGBO(252, 211, 106, 1),
                                          width: 3.0),
                                    ),
                                    focusedBorder: const OutlineInputBorder(
                                      borderSide: const BorderSide(
                                          color:
                                              Color.fromRGBO(252, 211, 106, 1),
                                          width: 3.0),
                                    ),
                                    hintText: 'Password'),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              Align(
                                alignment: Alignment.bottomLeft,
                                child: Text(
                                  "Forget Password",
                                  style: GoogleFonts.skranji(color: Colors.red),
                                ),
                              )
                            ]),
                          ),
                        )),
                    SizedBox(
                      height: 10,
                    ),
                    Container(
                      margin: EdgeInsets.only(left: 50, right: 50),
                      child: Align(
                        alignment: Alignment.bottomRight,
                        child: InkWell(
                          onTap: () {
                            Navigator.pushNamed(context, '/register');
                          },
                          child: Text(
                            "Create new Account ?",
                            style: GoogleFonts.skranji(color: Colors.red),
                          ),
                        ),
                      ),
                    ),
                    Container(
                      width: 150,
                      child: ElevatedButton(
                          style: ButtonStyle(
                              foregroundColor: MaterialStateProperty.all<Color>(
                                  Colors.transparent),
                              backgroundColor: MaterialStateProperty.all<Color>(
                                Color.fromRGBO(127, 221, 76, 1),
                              ),
                              shape: MaterialStateProperty.all<
                                      RoundedRectangleBorder>(
                                  RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20.0),
                              ))),
                          onPressed: () async {
                            var response = await http.post(
                                Uri.parse("http://10.0.2.2:80/users/login"),
                                body: jsonEncode({
                                  "username": _usernameCtrl.text,
                                  "password": _passwordCtrl.text
                                }),
                                headers: {"Content-type": "application/json"});
                            if (response.body != "Not Found") {
                              Navigator.pushReplacementNamed(context, "/map");
                            } else {
                              setState(() {
                                errMsg = "Invalid credentials ! ";
                              });
                            }
                          },
                          child: Text("Login",
                              style: GoogleFonts.skranji(
                                  color: Colors.white, fontSize: 20))),
                    )
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
