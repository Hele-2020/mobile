import 'dart:async';
import 'package:sentry/sentry.dart';
import 'package:flutter/material.dart';

import 'app.dart';

bool get isInDebugMode {
  // Assume you're in production mode.
  bool inDebugMode = false;

  // Assert expressions are only evaluated during development. They are ignored
  // in production. Therefore, this code only sets `inDebugMode` to true
  // in a development environment.
  assert(inDebugMode = true);

  return inDebugMode;
}

// TODO: put the url in a config
SentryClient _sentry = SentryClient(dsn: "https://3b0099a1c96042f7a621d2553edbe980@sentry.io/5177713");

void main() {
  // Run the whole app in a zone to capture all uncaught errors.
  runZoned(
    () => runApp(HeleApp()),
    onError: (Object error, StackTrace stackTrace) {
      sentryReport(error, stackTrace);
    },
  );

  FlutterError.onError = (details, {bool forceReport = false}) {
    sentryReport(details.exception, details.stack);
    FlutterError.dumpErrorToConsole(details, forceReport: forceReport);
  };
}

void sentryReport(Object error, StackTrace stackTrace) {
    // Print the exception to the console.
    print('Caught error: $error');
    if (isInDebugMode) {
      // Print the full stacktrace in debug mode.
      print(stackTrace);
      return;
    } else {
      // Send the Exception and Stacktrace to Sentry in Production mode.
      _sentry.captureException(
        exception: error,
        stackTrace: stackTrace,
      );
    }
}
