import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Linking,
    Modal,
    ScrollView,
    Platform,
    TouchableOpacity 
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
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modalVisible}>
                    
                        <ScrollView  style={styles.container}>
                            <TouchableOpacity
                                style={{alignItems:'center', marginTop: "4%", marginBottom: 5}}
                                onPress={() => this.props.modal(false, '')}>
                                <Icon
                                    style={{color: "#59358B", fontSize: 50}}
                                    name="arrow-dropdown-circle"  
                                />
                                    
                            </TouchableOpacity>

                            <View  style={{margin : 10, marginTop: 5,  backgroundColor: 'rgba(255,255,255, 0.9)'}}>

                                <Text style={styles.title}>{poi.name}</Text>
                                <View style={styles.containerInfo}>

                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Description : </Text>
                                        <Text selectable={true}>{poi.description}</Text>
                                    </View>

                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Adresse :</Text>
                                        <Text selectable={true}>{poi.address}</Text>
                                    </View>

                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Code postale :</Text>
                                        <Text selectable={true}>{poi.zipcode}</Text>
                                    </View>

                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Ville :</Text>
                                        <Text selectable={true}>{poi.city}</Text>
                                    </View>


                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Horaires :</Text>
                                        <Text selectable={true}>{poi.hour}</Text>
                                    </View>
                                    
                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Telephone :</Text>

                                        <TouchableOpacity onPress={()=> {this.dialCall(poi.phone)} }>

                                            <Text style={{textDecorationLine: "underline", color:"#59358B"}} selectable={true}>{poi.phone}</Text>

                                        </TouchableOpacity>
                                        
                                    </View>

                                    <View style={styles.blocInfo}>
                                        <Text style={styles.info}>Site internet :</Text>

                                        <TouchableOpacity onPress={()=>{ Linking.openURL('http://'+ poi.site )}} >
                                            <Text style={{textDecorationLine: "underline", color:"#59358B"}} selectable={true} >{poi.site}</Text>
                                        </TouchableOpacity>
                                        
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                </Modal>
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
    }, containerInfo: {
       
       
        padding: 10,
        marginTop: 8,
        borderColor: "transparent",
        borderWidth : 1, 
        ...Platform.select({
            android: {
                shadowColor:"#000",
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation : 7, 
            }, ios: {
                borderColor: "#59358B", 
            }
        })

    }, container : {
        ...Platform.select({
            ios:{
                marginTop: 18,
            },
            android :{
                marginTop: 5,
            }
        }),
        backgroundColor: 'rgba(255,255,255, 0.9)'
    }
})
