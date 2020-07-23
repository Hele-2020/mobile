import 'package:flutter/material.dart';
import 'package:hele/models/api_response.dart';
import 'package:hele/models/message.dart';
import 'package:hele/helpers/hele_http_service.dart';
import 'package:hele/helpers/globals.dart' as globals;
import 'package:oktoast/oktoast.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;

class ChatScreen extends StatefulWidget {
  final int chatId;

  const ChatScreen(int chatId) : this.chatId = chatId;

  @override
  State<StatefulWidget> createState() => ChatScreenState(this.chatId);
}

class ChatScreenState extends State<ChatScreen> {
  List<Message> _messages = [];
  final int chatId;
  final TextEditingController textEditingController = TextEditingController();
  final ScrollController listScrollController =
      ScrollController(keepScrollOffset: true);
  final FocusNode focusNode = FocusNode();
  IO.Socket socket;

  ChatScreenState(int chatId) : this.chatId = chatId;

  @override
  void initState() {
    super.initState();
    _initConnection();
    _initMessages();
  }

  void _initConnection() {
    print(chatId);
    this.socket =
        IO.io('${BASE_URL}/private-chat?chatId=${chatId}', <String, dynamic>{
      'transports': ['websocket'],
      'autoConnect': true,
      'extraHeaders': {'authorization': 'Bearer ${globals.jwtToken}'}
    });

    this.socket.on('connect', (data) => {print('connected')});
    this.socket.on('message', _onMessage);
    this.socket.on('error', (data) => {print(data)});
  }

  void _onMessage(data) {
    _messages.add(Message.fromJson(data));
    setState(() {
      _messages = _messages;
      listScrollController.animateTo(
          listScrollController.position.maxScrollExtent + 50,
          duration: Duration(milliseconds: 300),
          curve: Curves.easeOut);
    });
  }

  Future<void> _initMessages() async {
    APIResponse response = await heleHttpService.call('chat.messages',
        params: {'id': '1'}, accessToken: globals.jwtToken);

    List<Message> msgs = new List();
    for (final m in response.data) {
      msgs.insert(0, Message.fromJson(m));
    }
    setState(() {
      _messages = msgs;
    });
  }

  Widget _processMessage(Message m) {
    bool isMe = m.username == globals.loggedInUser.username;
    Color backColor = isMe ? Colors.lightBlue[300] : Colors.grey[300];
    return new Row(
        mainAxisAlignment:
            isMe ? MainAxisAlignment.end : MainAxisAlignment.start,
        children: <Widget>[
          Container(
            child: Text(
              m.body,
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
    content = content.trim();
    if (content != '') {
      textEditingController.clear();

      this.socket.emit('message', content);
    } else {
      print('Here');
    }
  }

  Widget _buildInput() {
    return new Container(
      padding: EdgeInsets.only(left: 8.0),
      child: Row(children: <Widget>[
        Flexible(
          child: Container(
            child: TextField(
              style: TextStyle(fontSize: 15.0, color: Colors.red),
              controller: textEditingController,
              decoration: InputDecoration.collapsed(
                hintText: 'Entrez votre message',
                hintStyle: TextStyle(color: Colors.grey),
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
          color: Colors.red,
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
