const ERROR_CODES = {
  'E_USER_IDENTIFIER_REQUIRED': "Entrez votre identifiant.",
  'E_PASSWORD_REQUIRED': "Entrez votre mot de passe.",
  'E_USER_IDENTIFIER_OR_PASSWORD_INCORRECT': "Identifiant ou mot de passe incorrect.",
  'E_PHONE_REQUIRED': "Entrez votre numéro de téléphone.",
  'E_PHONE_WRONG_FORMAT': "Votre numéro de téléphone est incorrect.",
  'E_USERNAME_WRONG_FORMAT': "Votre pseudo ne respecte pas les conditions.",
  'E_AGE_REQUIRED': "Entrez votre âge.",
  'E_AGE_VALIDATION': "Vous n'avez pas l'âge de vous inscrire sur cette application.",
  'E_ESTABLISHMENT_CODE_REQUIRED': "Entre le code d'établissement qui vous a été transmis.",
  'E_ESTABLISHMENT_CODE_NOT_FOUND': "Cet établissement n'existe pas.",
};

String getErrorMessage(String code) {
  String val = ERROR_CODES[code];
  return val != null ? val : "MissingErr: $code";
}