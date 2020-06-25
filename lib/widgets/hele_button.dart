import 'package:flutter/material.dart';

enum HeleButtonState {
  idle,
  disabled,
  loading,
  success,
  error
}

class HeleButton extends StatelessWidget {
  final HeleButtonState state;
  final Function onClick;
  final String text;
  final String color;

  HeleButton({
    @required this.onClick,
    @required this.state,
    @required this.text,
    this.color,
  });

  Color _getColor(BuildContext context) {
    ThemeData theme = Theme.of(context);
    final Map<String, Color> colors = {
      'primary': theme.primaryColor,
      'secondary': theme.accentColor,
    };
    if (this.color == null) {
      return colors['primary'];
    }
    return colors[this.color] != null ? colors[this.color] : colors['primary'];
  }

  @override
  Widget build(BuildContext context) {
    ThemeData theme = Theme.of(context);
    return new FlatButton(
      child: new LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          return Container(
            width: constraints.maxWidth,
            child: getComponent(),
          );
        }
      ),
      onPressed: state == HeleButtonState.disabled || state == HeleButtonState.loading ? null : onClick,
      shape: RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(18.0),
      ),
      color: _getColor(context),
      disabledColor: theme.primaryColorLight,
      
    );
  }

  Widget getComponent() {
    if (state == HeleButtonState.idle || state == HeleButtonState.error) {
      return Text(
        text,
        textAlign: TextAlign.center,
        style: const TextStyle(
          color: Colors.white,
          fontSize: 16.0,
        ),
      );
    } else if (state == HeleButtonState.loading) {
      return Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          CircularProgressIndicator(
            valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
          )
        ]
      );
    } else {
      return Icon(Icons.check, color: Colors.white);
    }
  }
}