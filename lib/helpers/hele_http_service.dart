import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;
import 'package:hele/models/api_response.dart';
import 'package:oktoast/oktoast.dart';

import 'error_codes.dart';

const BASE_URL = "http://192.168.1.12:3333";
// const BASE_URL = "http://35.181.29.4";

class HeleHttpService {
  // Add routes here
  static const Map<String, Map<String, String>> _routes = {
    'login': {'method': 'POST', 'url': '/auth/login'},
    'register': {'method': 'POST', 'url': '/auth/register'},
    'check': {'method': 'GET', 'url': '/auth/me'},
    'password.request': {'method': 'POST', 'url': '/auth/password/request'},
    'password.reset': {'method': 'POST', 'url': '/auth/password/reset'},
    'chat.messages': {'method': 'GET', 'url': '/chat/private/:id'}
  };

  // I did not find how to call http.get for example with 'get' in
  // the 'method' variable: http[method](...) - not working like in JS
  // So, this is a workaround.
  static const Map<String, Function> _httpHelper = {
    'get': http.get,
    'post': http.post,
    'patch': http.patch,
    'delete': http.delete,
    'head': http.head,
    'put': http.put,
  };

  Future<http.Response> _call(String routeName,
      {Map<String, String> headers, Map<String, String> params, body}) async {
    Map<String, String> route = _routes[routeName];

    if (route == null) {
      throw Exception("Route '$routeName' is not implemented.");
    }
    String url = route['url'].replaceAllMapped(
        new RegExp(r':\w+'), (match) => params[match[0].substring(1)]);
    String method = route['method'].toLowerCase();
    if (body != null) {
      return await _httpHelper[method](BASE_URL + url,
          body: body, headers: headers);
    } else {
      return await _httpHelper[method](BASE_URL + url, headers: headers);
    }
  }

  Future<APIResponse> call(String routeName,
      {Map<String, String> headers,
      Map<String, String> params,
      body,
      String accessToken}) async {
    if (headers == null) {
      headers = new Map<String, String>();
    }
    if (accessToken != null) {
      headers[HttpHeaders.authorizationHeader] = "Bearer $accessToken";
    }
    var res =
        await _call(routeName, body: body, params: params, headers: headers);
    dynamic jsonContent = _verifyResponse(res);
    APIResponse response = APIResponse.fromJson(jsonContent);
    return response;
  }

  dynamic _verifyResponse(http.Response res) {
    int statusCode = res.statusCode;
    if (statusCode < 400) {
      var responseJson = json.decode(res.body.toString());
      return responseJson;
    }
    if (statusCode == 401 || statusCode == 403) {
      throw UnauthorizedException();
    }
    if (statusCode == 404) {
      throw NotFoundException(res.body.toString());
    }
    if (statusCode >= 400 && statusCode < 500) {
      throw BadRequestException(res.body.toString());
    }
    if (statusCode >= 500) {
      throw FetchDataException(
          'Server error with status code : ${res.statusCode}');
    }
  }

  void errorHandler(Exception e, Map<Type, Function> functions) {
    Map<Type, Function> funcs = {
      SocketException: (Exception e) {
        showToast("Pas de connexion internet");
      },
      BadRequestException: (Exception e) {
        showToast("Requête invalide.");
      },
      UnauthorizedException: (Exception e) {
        showToast("Non autorisé.");
      },
      NotFoundException: (Exception e) {
        showToast("Élément non trouvé.");
      },
      HeleApiException: (Exception e) {
        showToast("Erreur serveur. Veuillez réessayer dans quelques minutes.");
      },
      ...functions,
    };
    Function func = funcs[e.runtimeType];
    if (func != null) {
      func(e);
    } else {
      showToast("Erreur non gérée (${e.runtimeType})");
    }
  }
}

final heleHttpService = HeleHttpService();

class HeleApiException implements Exception {
  final _message;
  final _prefix;

  HeleApiException([this._message, this._prefix]);

  String toString() {
    return "$_prefix$_message";
  }
}

class FetchDataException extends HeleApiException {
  FetchDataException([String message]) : super(message, "Error fetching: ");
}

class BadRequestException extends HeleApiException {
  dynamic json;
  List<String> errors;

  BadRequestException([message]) : super(message, "Invalid request: ") {
    try {
      errors = new List<String>();
      this.json = jsonDecode(message);
      if (this.json['errors'] == null) return;
      for (var i = 0; i < this.json['errors'].length; ++i) {
        var currentError = this.json['errors'][i];
        if (currentError == null || currentError['message'] == null) {
          continue;
        }
        errors.add(getErrorMessage(currentError['message']));
      }
    } catch (e) {
      this.json = null;
    }
  }
}

class UnauthorizedException extends HeleApiException {
  UnauthorizedException([message]) : super(message, "Unauthorized: ");
}

class NotFoundException extends HeleApiException {
  NotFoundException([message]) : super(message, "Not found: ");
}

class InvalidInputException extends HeleApiException {
  InvalidInputException([String message]) : super(message, "Invalid input: ");
}
