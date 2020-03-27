import 'dart:async';
import 'package:sentry/sentry.dart';
import 'package:flutter/material.dart';

import 'app.dart';

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

void sentryReport(Object exception, StackTrace stackTrace) {
  // TODO: put the url in a config
  SentryClient(dsn: "https://3b0099a1c96042f7a621d2553edbe980@sentry.io/5177713").captureException(
    exception: exception,
    stackTrace: stackTrace,
  );
}
