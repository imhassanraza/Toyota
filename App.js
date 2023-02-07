import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Navigate from './Routes/Navigate'
const App=()=>{
  return(
    <View style={{flex:1, elevation:2}}  >
<NavigationContainer>
  <Navigate />
</NavigationContainer>
</View>
  )
}


export default App