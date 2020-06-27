import 'package:flutter/material.dart';
import 'package:hele/models/message.dart';

import 'package:hele/helpers/globals.dart' as globals;
import 'package:oktoast/oktoast.dart';

class ChatScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => ChatScreenState();
}

class ChatScreenState extends State<ChatScreen> {
  List<Message> _messages = [];

  final TextEditingController textEditingController = TextEditingController();
  final ScrollController listScrollController =
      ScrollController(keepScrollOffset: true);
  final FocusNode focusNode = FocusNode();

  @override
  void initState() {
    super.initState();
    _initMessages();
  }

  Future<void> _initMessages() async {
    // TODO: call API
    List<Message> msgs = new List();
    msgs.add(new Message(
        id: 1,
        username: "pro",
        content: "Premier message du pro",
        timestamp: DateTime.now().subtract(Duration(minutes: 1))));
    msgs.add(new Message(
        id: 2,
        username: "jeune",
        content: "Premier msg du jeune",
        timestamp: DateTime.now().subtract(Duration(seconds: 24))));
    msgs.add(new Message(
        id: 4,
        username: "jeune",
        content: "lol",
        timestamp: DateTime.now().subtract(Duration(seconds: 23))));
    msgs.add(new Message(
        id: 3,
        username: "pro",
        content:
            "Deuxième message du professionnel un peu plus long cette fois, devrait faire plusieurs lignes",
        timestamp: DateTime.now().subtract(Duration(minutes: 22))));
    setState(() {
      _messages = msgs;
    });
  }

  Widget _processMessage(Message m) {
    bool isMe = m.username == globals.loggedInUser.username;
    Color backColor = isMe ? Colors.lightBlue[300] : Colors.grey[300];
    //Alignment alignment = isMe ? Alignment.centerRight : Alignment.centerLeft;
    return new Row(
        mainAxisAlignment:
            isMe ? MainAxisAlignment.end : MainAxisAlignment.start,
        children: <Widget>[
          Container(
            //alignment: alignment,
            child: Text(
              m.content,
              style: TextStyle(color: Colors.black, fontSize: 12),
            ),
            padding: EdgeInsets.fromLTRB(15.0, 10.0, 15.0, 10.0),
            constraints: BoxConstraints(maxWidth: 300),
            decoration: BoxDecoration(
                color: backColor, borderRadius: BorderRadius.circular(8.0)),
            margin: EdgeInsets.only(bottom: 10.0, right: 10.0),
          )
        ]);
  }

  void _onSendMessage(String content, int type) {
    if (content.trim() != '') {
      textEditingController.clear();

      // var documentReference = Firestore.instance
      //     .collection('messages')
      //     .document(groupChatId)
      //     .collection(groupChatId)
      //     .document(DateTime.now().millisecondsSinceEpoch.toString());

      // Firestore.instance.runTransaction((transaction) async {
      //   await transaction.set(
      //     documentReference,
      //     {
      //       'idFrom': id,
      //       'idTo': peerId,
      //       'timestamp': DateTime.now().millisecondsSinceEpoch.toString(),
      //       'content': content,
      //       'type': type
      //     },
      //   );
      // });
      _messages.add(new Message(
          id: 0,
          username: "jeune",
          content: content,
          timestamp: DateTime.now()));
      setState(() {
        _messages = _messages;
        listScrollController.animateTo(
            listScrollController.position.maxScrollExtent + 50,
            duration: Duration(milliseconds: 300),
            curve: Curves.easeOut);
      });
    } else {
      showToast('Ecrivez quelque chose');
    }
  }

  Widget _buildInput() {
    return new Container(
      padding: EdgeInsets.only(left: 8.0),
      child: Row(children: <Widget>[
        Flexible(
          child: Container(
            child: TextField(
              style: TextStyle(fontSize: 15.0),
              controller: textEditingController,
              decoration: InputDecoration.collapsed(
                hintText: 'Entrez votre message',
                //hintStyle: TextStyle(color: greyColor),
              ),
              focusNode: focusNode,
            ),
          ),
        ),
        // Send message
        Material(
          child: Container(
            margin: EdgeInsets.symmetric(horizontal: 8.0),
            child: IconButton(
              icon: Icon(Icons.send),
              onPressed: () => _onSendMessage(textEditingController.text, 0),
              //color: primaryColor,
            ),
          ),
          color: Colors.white,
        ),
      ]),
      width: double.infinity,
      height: 50.0,
      decoration: BoxDecoration(
          border: Border(top: BorderSide(width: 0.5)), color: Colors.white),
    );
  }

  Widget _buildMessagesList() {
    return Flexible(
        child: ListView.builder(
      padding: EdgeInsets.all(10.0),
      itemBuilder: (context, index) => _processMessage(_messages[index]),
      itemCount: _messages.length,
      // reverse: true,
      // shrinkWrap: true,
      controller: listScrollController,
    ));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text("Chat")),
        body: WillPopScope(
          child: Stack(
            children: <Widget>[
              Column(
                children: <Widget>[
                  // List of messages
                  _buildMessagesList(),
                  Container(),
                  // Input content
                  _buildInput(),
                ],
              ),
            ],
          ),
          onWillPop: () {
            Navigator.pop(context);
            return Future.value(false);
          },
        ));
  }
}
