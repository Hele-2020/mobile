import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class Tchat extends Component {
    render() {
        const { message } = this.props
        return (
            <View style={styles.view}>
                <View style={styles.viewBloc}>
                    <View style={styles.viewImg}>
                        <Image style={styles.stretchImg}
                            source={require('../../../assets/logohele.png')} />
                    </View>
                    <View style={styles.viewBackComment}>
                        <View style={styles.viewNamePsy}>
                            <Text style={styles.textNamePsy} >Dr Robin</Text>
                        </View>
                        <View style={styles.viewCommentPsy}>
                            <Text style={styles.textComment}>{ message }</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    view: {
        // flex: 5,
        // backgroundColor: "blue",
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: "flex-start",
    },
    viewBloc: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row",
        height: "20%",
        // backgroundColor: "orange",
    },
    viewCommentPsy: {
        alignItems: "center",
        justifyContent: "center",
    },
    viewBackComment: {
        backgroundColor: "#F1F0EF",
        alignItems: "flex-start",
        flexDirection: "column",
        width: "80%",
        height: "auto",
        marginLeft: 15,
        padding: 7,
        borderRadius: 20,
    },
    viewName: {
        // backgroundColor: "white",
        alignItems: "flex-start",
    },
    viewImg: {
        alignItems: "flex-start",
        position: "relative",
        justifyContent: "center",
        alignContent: "flex-start",
        height: "40%",
    },
    stretchImg: {
        resizeMode: "contain",
        width: 35,
    },
    textComment: {
        color: "black",
        fontSize: 15,
    },
    viewNamePsy: {
        // backgroundColor: "white",
        alignItems: "flex-start",
    },
    textNamePsy: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "black",
        // color: "#59358B",
    }
});
