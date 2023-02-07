import React,{useState} from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import { DataTable,RadioButton,Button } from 'react-native-paper'
import RNModals from './RNModals'

export default function Periodic(navigation) {
    const [value,setValue]=useState('')
    const [rnService,setRnService]=useState(false)
    const [rnSuperM,setRnSuperM]=useState(false)
    const [rnLightM,setRnLightM]=useState(false)
    const [rnMM,setRnMM]=useState(false)
    const [rnHM,setRnHM]=useState(false)

   
   

      

    return (
        
        
        <View>
           
           <RNModals isVisible={rnService} Press={()=>setRnService(false)} text='First Free Service at 1000KM'>
           <DataTable.Row>
                        <DataTable.Cell>1</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Initial Check Up</DataTable.Cell>
                            </DataTable.Row>
                           </RNModals>
           <RNModals isVisible={rnSuperM} Press={()=>setRnSuperM(false)} text='Super Light Periodic Maintenance at 5000 KM'>
           <DataTable.Row>
                        <DataTable.Cell>1</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Engine Oil Change</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>2</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Engine Oil Filter Change</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>3</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Air Filter Cleaning / Replacement</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>4</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>General Check Up</DataTable.Cell>
                            </DataTable.Row>
                            
           </RNModals>
           <RNModals isVisible={rnLightM} Press={()=>setRnLightM(false)} text='Light Periodic Maintenance at 10000 KM'>
           <DataTable.Row>
                        <DataTable.Cell>1</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Engine Oil Change</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>2</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Engine Oil Filter Change</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>3</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Air Filter Cleaning / Replacement</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>4</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Tune Up</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>5</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>General Check Up</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>6</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Brake & Clutch Paddle Free Play & Height</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>7</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Wheel Alignment</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>8</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Wheel Balancing</DataTable.Cell>
                            </DataTable.Row>
                            
           </RNModals>

           <RNModals isVisible={rnMM} Press={()=>setRnMM(false)} text='Medium Periodic Maintenance at 20000 KM'>
           <DataTable.Row>
                        <DataTable.Cell>1</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Engine Oil Change</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>2</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Engine Oil Filter Change</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>3</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Air Filter Cleaning / Replacement</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>4</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Tune Up</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>5</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>General Check Up</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>6</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Brake & Clutch Paddle Free Play & Height</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>7</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Wheel Alignment</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>8</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Wheel Balancing</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>9</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Throttle Body Service</DataTable.Cell>
                            </DataTable.Row>
                            
           </RNModals>

           <RNModals isVisible={rnHM} Press={()=>setRnHM(false)} text='Heavy Periodic Maintenance at 40000 KM'>
           <DataTable.Row>
                        <DataTable.Cell>1</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Engine Oil Change</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>2</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Engine Oil Filter Change</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>3</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Air Filter Cleaning / Replacement</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>4</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Tune Up</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>5</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>General Check Up</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>6</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Brake & Clutch Paddle Free Play & Height</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>7</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Wheel Alignment</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>8</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Wheel Balancing</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>9</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Throttle Body Service</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>10</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Brake, Syspension & Slip Test on Test Lane</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>11</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Brake Oil Change</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                        <DataTable.Cell>12</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:-200}}>Gear Oil Change</DataTable.Cell>
                            </DataTable.Row>
                            
           </RNModals>
                
                
           
           
            
            
            <DataTable.Header>
        <DataTable.Title>Select</DataTable.Title>
        <DataTable.Title style={{marginLeft:-160}} >Service</DataTable.Title>
        <DataTable.Title style={{marginRight:-160}} >Milage(KM)</DataTable.Title>
        
      </DataTable.Header>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <DataTable.Row>
      
        <DataTable.Cell>
            <View><RadioButton
                value="First Free Service" color='#b0003c' />
                 </View>
        </DataTable.Cell>
        
      <DataTable.Cell style={{marginLeft:-160}} onPress={()=>setRnService(true)}>First Free Service</DataTable.Cell>
        <DataTable.Cell style={{marginRight:-170}}>1000 </DataTable.Cell>
        
        </DataTable.Row>
        
        <DataTable.Row>
        <DataTable.Cell>
            <View><RadioButton
                value="Super Light Periodic Maintenance" color='#b0003c' />
                 </View>
        </DataTable.Cell>
        <DataTable.Cell style={{marginLeft:-170}} onPress={()=>setRnSuperM(true)} >Super Light Periodic Maintenance</DataTable.Cell>
        <DataTable.Cell style={{marginRight:-180}} >5000</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
        <DataTable.Cell>
            <View><RadioButton
                value="Light Periodic Maintenance" color='#b0003c' />
                 </View>
        </DataTable.Cell>
        <DataTable.Cell style={{marginLeft:-170}} onPress={()=>setRnLightM(true)} >Light Periodic Maintenance</DataTable.Cell>
        <DataTable.Cell style={{marginRight:-180}} >10000</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
        <DataTable.Cell>
            <View><RadioButton
                value="Medium Periodic Maintenance" color='#b0003c' />
                 </View>
        </DataTable.Cell>
        <DataTable.Cell style={{marginLeft:-170}} onPress={()=>setRnMM(true)} >Medium Periodic Maintenance</DataTable.Cell>
        <DataTable.Cell style={{marginRight:-180}} >20000</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
        <DataTable.Cell>
            <View><RadioButton color='#b0003c'
                value="Heavy Periodic Maintenance"/>
                 </View>
        </DataTable.Cell>
        <DataTable.Cell style={{marginLeft:-170}} onPress={()=>setRnHM(true)} >Heavy Periodic Maintenance</DataTable.Cell>
        <DataTable.Cell style={{marginRight:-180}} >40000</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
        <DataTable.Cell>
            <View><RadioButton
                value="Others" color='#b0003c' />
                 </View>
        </DataTable.Cell>
        <DataTable.Cell style={{marginLeft:-170}} >Others</DataTable.Cell>
        <DataTable.Cell style={{marginRight:-180}} ></DataTable.Cell>
        </DataTable.Row>
        </RadioButton.Group>
      
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        backgroundColor:'#FFF',


    },
    modal:{
        margin: '50%',
        alignSelf:'center',
        
        justifyContent:'center'
    }
})
