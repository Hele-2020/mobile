// import React, { Component } from 'react'
// import { AsyncStorage, StyleSheet, View, Text,TouchableOpacity,Button} from 'react-native';
// import TimePicker from 'react-native-simple-time-picker';
// import DatePicker from 'react-native-datepicker';
// import axios from 'axios';
// import Api from '../config/Api';

// export default class SlotformScreen extends Component {
//     static navigationOptions = {
//         title: 'Crée un créneau',
//     };
    
//     state = {
//         selectedHours: 0,
//         selectedMinutes: 0,
//         date: '',
//         slot:'',
//         currentDate : new Date().getDate(),
//         currentMonth : new Date().getMonth() + 1,
//         currentYear : new Date().getFullYear(),
//     }

//     Register = async () => {

//         const date = this.state.date;

//         if(this.state.selectedHours === 24){
//             this.setState({selectedHours : 0})
//         }
//         if(this.state.selectedMinutes === 60){
//             this.setState({selectedMinutes : 0})
//         }
//         const hours = this.state.selectedHours + ":" +this.state.selectedMinutes;
//         this.setState({slot : date + ' ' + hours})
//         const token = await AsyncStorage.getItem('userToken');

//         console.log(this.state.slot)
//         const headers = {
//             'Authorization': 'bearer ' + token,
//         }

//         axios.post(Api.url('/make/slot'),{start_time : this.state.slot},{headers: headers})
//         .then(function (response) {
//             console.log(response)
//             alert('Vous venez de crée un créneau pour le '+ date + ' à ' + hours)
//             //faire une redirection vers la liste des créneaux
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

//     }
     
//     render() {
//         const { selectedHours, selectedMinutes } = this.state;
//         return (
//           <View style={styles.container}>

//                 <DatePicker
//                     style={styles.Select}
//                     date={this.state.date}
//                     mode="date"
//                     format="DD-MM-YYYY"
//                     minDate={this.state.currentDate+'-'+this.state.currentMonth+'-'+this.state.currentYear}
//                     confirmBtnText="Confirm"
//                     cancelBtnText="Cancel" 
//                     onDateChange={(date) => this.setState({date: date})}
//                 />
                
//                 <TimePicker
//                     style={styles.Select}
//                     selectedHours={selectedHours}
//                     selectedMinutes={selectedMinutes}
//                     onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
//                 />

//                 <View>
//                     <TouchableOpacity onPress={this.Register} ><Text style={styles.button}>REGISTER</Text></TouchableOpacity>
//                 </View>
//           </View>
//         );
//     }
    
// }

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         marginLeft:50,
//         marginRight:50,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     Select: {
//         width: 350,
//         height: 55,
//         backgroundColor: '#fff',
//         margin: 10,
//         padding: 8,
//         borderRadius: 14,
//     },
//     button : {
//         margin:20,
//         backgroundColor: '#8A2BE2',
//         width : 200,
//         height : 20,
//         textAlign: 'center',
//         borderRadius: 40,
//     },
// })