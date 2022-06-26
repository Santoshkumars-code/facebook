
import WatchScreen from './Screen/WatchScreen'
import PlaceScreen from './Screen/PlaceScreen'
import React from 'react'
import TabScreen from './Screen/TabScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'



const Stack = createStackNavigator();
const App = () => {
  return (
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={TabScreen} name ='home' options={{headerShown:false}}/>
      </Stack.Navigator>
  
    </NavigationContainer>
  )
}

export default App

