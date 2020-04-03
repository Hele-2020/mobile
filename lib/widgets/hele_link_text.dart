import 'package:flutter/material.dart';

class HeleLinkText extends StatelessWidget {
  final Function onTap;
  final String text;
  final TextStyle style;

  HeleLinkText({
    @required this.onTap,
    @required this.text,
    this.style,
  });

  @override
  Widget build(BuildContext context) {
    ThemeData theme = Theme.of(context);
    return GestureDetector(
      onTap: this.onTap,
      child: Text.rich(
        TextSpan(
          text: this.text,
          style: this.style != null ? this.style : TextStyle(
            fontWeight: FontWeight.bold,
            color: theme.accentColor,
            decoration: TextDecoration.underline,
            decorationColor: theme.accentColor,
          )
        )
      )
    );
  }
}