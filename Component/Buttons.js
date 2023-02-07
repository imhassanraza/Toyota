import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

export default function Buttons(props) {
    return (
        <View style={style.button}>
            <Button mode='contained' color='#b0003c' onPress={props.press} >Appointment Submit</Button>
        </View>
    )
}

const style=StyleSheet.create({
    button:{
        margin: 15,
        marginLeft:40,
        marginRight:40
    }
})