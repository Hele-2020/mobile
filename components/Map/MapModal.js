import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Linking,
    Modal,
    TouchableHighlight,
    ScrollView,
    Platform
} from 'react-native';

import {Icon} from 'native-base';

export default class MapModal extends React.Component
{
    constructor(props) {
        super(props)
    }

    dialCall = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = `tel:${number}`;
        } else {
            phoneNumber = `telprompt:${number}`;
        }
        Linking.openURL(phoneNumber);
    };

    render() {
        const poi = this.props.poi
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modalVisible}>
                    <View style={{marginTop: 22}}>
                        <ScrollView>

                            <TouchableHighlight
                                style={{alignItems:'center'}}
                                onPress={() => this.props.modal(false, '')}>
                                <Icon
                                    style={{color: "#59358B"}}
                                    name="arrow-dropdown-circle" />
                            </TouchableHighlight>

                            <View style={{margin: 10, marginTop: 15}}>


                                <Text style={styles.title}>{poi.name}</Text>

                                <View style={{borderColor: "#59358B", borderWidth: 2}}>

                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Description : </Text>
                                        <Text>{poi.description}</Text>
                                    </View>

                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Adresse :</Text>
                                        <Text selectable={true}>{poi.address}</Text>
                                    </View>

                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Code postale :</Text>
                                        <Text>{poi.zipcode}</Text>
                                    </View>

                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Ville :</Text>
                                        <Text>{poi.city}</Text>
                                    </View>


                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Horaires :</Text>
                                        <Text>{poi.hour}</Text>
                                    </View>

                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Telephone :</Text>
                                        <Text style={{textDecorationLine: "underline", color:"#59358B"}} selectable={true} onPress={()=> {this.dialCall(poi.phone)} }>{poi.phone}</Text>
                                    </View>


                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Site internet:</Text>
                                        <Text onPress={()=>{ Linking.openURL('http://'+ poi.site )}} style={{textDecorationLine: "underline", color:"#59358B"}} selectable={true} >{poi.site}</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textAlign: "center",
        backgroundColor:  "#59358B",
        padding: 23,
        fontSize: 18,
        color: "white"
    }, info: {
        fontWeight: 'bold',
        fontSize: 15
    }, blocInfo: {
        margin: 10,
        fontSize: 20
    }
})
