import React from 'react'
import { View,StyleSheet} from 'react-native'
import { DataTable,Checkbox } from 'react-native-paper'

const General=(props)=>{
    
    return(
        <View>
            <DataTable.Header>
       <DataTable.Title >Select</DataTable.Title>
       <DataTable.Title style={{marginLeft:-100}}>Service</DataTable.Title>
     </DataTable.Header>
     <DataTable.Row>
     <DataTable.Cell>
         <View><Checkbox color='#b0003c'

         status={props.oils}
         onPress={props.oilpress}
         /></View>
         </DataTable.Cell>
         <DataTable.Cell style={{marginLeft:-100}}>Engine Oil</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row>
     <DataTable.Cell>
         <View><Checkbox color='#b0003c' 
         status={props.fluids}
         onPress={props.fluidpress}
         /></View>
         </DataTable.Cell>
         <DataTable.Cell style={{marginLeft:-100}} >Transmission and Differential Fluids</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row>
     <DataTable.Cell>
         <View><Checkbox color='#b0003c' 
         status={props.battries}
         onPress={props.batterypress}
         /></View>
         </DataTable.Cell>
         <DataTable.Cell style={{marginLeft:-100}}>Battery</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row>
     <DataTable.Cell>
         <View><Checkbox color='#b0003c' 
         
         status={props.brakes}
         onPress={props.brakepress}
         /></View>
         </DataTable.Cell>
         <DataTable.Cell style={{marginLeft:-100}}>Brake System</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row>
     <DataTable.Cell>
         <View><Checkbox color='#b0003c' 
         status={props.filters}
         onPress={props.filterpress}
         /></View>
         </DataTable.Cell>
         <DataTable.Cell style={{marginLeft:-100}}>Lube, Oil & Filter Service</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row>
     <DataTable.Cell>
         <View><Checkbox color='#b0003c' 
         status={props.others}
         onPress={props.otherpress}
         /></View>
         </DataTable.Cell>
         <DataTable.Cell style={{marginLeft:-100}}>Other</DataTable.Cell>
         </DataTable.Row>
     
        </View>
    )
}

const style=StyleSheet.create({
    
    
})

export default General