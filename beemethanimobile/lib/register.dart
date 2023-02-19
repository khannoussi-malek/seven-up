import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:http/http.dart' as http;

class Register extends StatefulWidget {
  const Register({super.key});

  @override
  State<Register> createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  TextEditingController _usernameCtrl = TextEditingController();
  TextEditingController _emailCtrl = TextEditingController();
  TextEditingController _passwordCtrl = TextEditingController();
  TextEditingController _confirmPasswordCtrl = TextEditingController();
  String errMsg = "";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color.fromRGBO(252, 211, 106, 1),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            SizedBox(height: 60),
            Image.asset('assets/img/logo2.png'),
            SizedBox(
              height: 40,
            ),
            Stack(
              children: [
                Container(
                  height: MediaQuery.of(context).size.height - 110,
                  decoration: const BoxDecoration(
                      color: Color.fromRGBO(252, 211, 106, 1),
                      borderRadius: BorderRadius.only(
                          topLeft: Radius.circular(30.0),
                          topRight: Radius.circular(30.0))),
                ),
                Column(
                  children: [
                    Text(
                      errMsg,
                      style: GoogleFonts.skranji(color: Colors.red),
                    ),
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
                              TextField(
                                style: GoogleFonts.skranji(),
                                controller: _usernameCtrl,
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
                              SizedBox(
                                height: 20,
                              ),
                              TextField(
                                style: GoogleFonts.skranji(),
                                controller: _emailCtrl,
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
                                    hintText: 'Email'),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              TextField(
                                style: GoogleFonts.skranji(),
                                obscureText: true,
                                controller: _passwordCtrl,
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
                              TextField(
                                style: GoogleFonts.skranji(),
                                obscureText: true,
                                controller: _confirmPasswordCtrl,
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
                                    hintText: 'Confirm password'),
                              ),
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
                            Navigator.pop(context);
                          },
                          child: Text(
                            "I have an account",
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
                                Color.fromRGBO(255, 182, 3, 1),
                              ),
                              shape: MaterialStateProperty.all<
                                      RoundedRectangleBorder>(
                                  RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20.0),
                              ))),
                          onPressed: () async {
                            if (_passwordCtrl.text ==
                                _confirmPasswordCtrl.text) {
                              var response = await http.post(
                                  Uri.parse("http://10.0.2.2:80/users/"),
                                  body: jsonEncode({
                                    "username": _usernameCtrl.text,
                                    "password": _passwordCtrl.text,
                                    "email": _emailCtrl.text,
                                  }),
                                  headers: {
                                    "Content-type": "application/json"
                                  });
                              if (jsonDecode(response.body)["err"] == false) {
                                Navigator.popAndPushNamed(context, "/login");
                              } else {
                                setState(() {
                                  errMsg = "User already exist";
                                });
                              }
                            } else {
                              setState(() {
                                errMsg = "Invalid Password";
                              });
                            }
                          },
                          child: Text("Validate",
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
