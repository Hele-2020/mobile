import 'package:flutter/material.dart';

import 'screens/home_pro_screen.dart';
import 'screens/splash_screen.dart';
import 'screens/auth/login_screen.dart';
import 'screens/auth/register_screen.dart';
import 'screens/home_screen.dart';
import 'themes/light.dart';
import 'themes/dark.dart';
import 'package:oktoast/oktoast.dart';

class HeleApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return OKToast(
      /// set toast style, optional
      child: MaterialApp(
        theme: darkTheme,
        title: 'Hélé',
        initialRoute: '/',
        routes: <String, WidgetBuilder>{
          // Guest routes
          '/': (BuildContext context) => SplashScreen(context),
          '/login': (BuildContext context) => LoginScreen(),
          '/register': (BuildContext context) => RegisterScreen(),
          // User routes
          '/home': (BuildContext context) => HomeScreen(),

          // Professional routes
          '/pro/home': (BuildContext context) => HomeProScreen(),

        }
      )
    );
  }
}
