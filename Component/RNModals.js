import React from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import {Button,DataTable} from 'react-native-paper'
import RNModal from 'react-native-modal'

export default function RNModals(props) {
    return (
        <RNModal isVisible={props.isVisible} animationIn='bounceIn' animationOut='slideOutDown'  transparent={true} >
                
               
                    <View style={style.container}>
                    <ScrollView persistentScrollbar={true}>
                <View>

                    <Text style={style.text} >{props.text}</Text>
                <DataTable>
                        <DataTable.Row>
                        <DataTable.Title>#</DataTable.Title>
                            <DataTable.Title style={{marginLeft:-200}}>Include Services</DataTable.Title>
                            </DataTable.Row>
                            {props.children}
                </DataTable>
                </View>
                </ScrollView>
                
                <Button onPress={props.Press} mode='contained'style={style.button} color='#880000' ><Text>Back</Text></Button>
               </View>
                
            </RNModal>
        
        
        
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
        borderRadius:15,
        marginTop:'30%',
        height:'90%',
        paddingTop:30,
        marginBottom:'30%'
    },
   
       
    
    button:{
        margin:20
    },
    text:{
        fontSize:17,
        fontFamily:'RobotoBold',
        fontWeight:'900',
       marginLeft:10
    }
})
