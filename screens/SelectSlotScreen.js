import React, { Component } from 'react'
import {Text, View, StyleSheet,TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import axios from 'axios';

export default class SelectSlotScreen extends Component {
    static navigationOptions = {
        title: 'Vos créneaux',
    };

    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Créneaux', 'Selectionné'],
          tableData: [],
        }
    }
    
      componentDidMount(){
        // axios.get()
      }


      _SelectIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
      }
     
      render() {
        const state = this.state;
        const element = (data, index) => (
          <TouchableOpacity onPress={() => this._SelectIndex(index)}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>button</Text>
            </View>
          </TouchableOpacity>
        );
     
        return (
          <View style={styles.container}>
            <Table borderStyle={{borderColor: 'transparent'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
              {
                state.tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                    {
                      rowData.map((cellData, cellIndex) => (
                        <Cell key={cellIndex} data={cellIndex === 1 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                      ))
                    }
                  </TableWrapper>
                ))
              }
            </Table>
          </View>
        )
      }
    }
     
    const styles = StyleSheet.create({
      container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
      head: { height: 40, backgroundColor: '#808B97' },
      text: { margin: 6 },
      row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
      btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
      btnText: { textAlign: 'center', color: '#fff' }
    });

