import 'package:flutter/material.dart';

import 'screens/home_pro_screen.dart';
import 'screens/splash_screen.dart';
import 'screens/auth/login_screen.dart';
import 'screens/auth/register_screen.dart';
import 'screens/home_screen.dart';
import 'screens/home/settings.dart';
import 'themes/light.dart';
import 'themes/dark.dart';
import 'package:oktoast/oktoast.dart';

class HeleApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return OKToast(
        position: ToastPosition.bottom,
        animationCurve: Curves.easeIn,
        animationBuilder: Miui10AnimBuilder(),
        animationDuration: Duration(milliseconds: 200),
        duration: Duration(seconds: 3),
        radius: 0,
        textPadding: EdgeInsets.all(16),
        child: MaterialApp(
            theme: lightTheme,
            darkTheme: darkTheme,
            themeMode: ThemeMode.system,
            title: 'Hélé',
            initialRoute: '/',
            routes: <String, WidgetBuilder>{
              // Guest routes
              '/': (BuildContext context) => SplashScreen(context),
              '/login': (BuildContext context) => LoginScreen(),
              '/register': (BuildContext context) => RegisterScreen(),
              // User routes
              '/home': (BuildContext context) => HomeScreen(),
              '/settings': (BuildContext context) => SettingsScreen(),

              // Professional routes
              '/pro/home': (BuildContext context) => HomeProScreen(),
            }));
  }
}
