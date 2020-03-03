import 'package:flutter/material.dart';

class HomeProScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('PRO'),
      ),
      body:
        Center(
          child: Container(
            margin: const EdgeInsets.all(20.0),
            child: Text('PRO SCREEN')
          )
        )
    );
  }
}
