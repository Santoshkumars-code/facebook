import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../component/Login/Login';
import SignUp from '../component/Login/SignUp';
import TabScreen from './TabScreen';

const WithAuthNavigation = () => {
    return (
    <NavigationContainer >
       <Stack.Navigator initialRouteName='home'>
       <Stack.Screen component={TabScreen} name ='home' options={{headerShown:false}}/>
       </Stack.Navigator>
    </NavigationContainer>
    )
  }
  
  
  const WithoutAuthNavigation = () => {
    return (
    <NavigationContainer >
       <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} />
          <Stack.Screen name="Signup" component={SignUp} options={{ headerShown:false }} />
       </Stack.Navigator>
    </NavigationContainer>
    )
  }
  
  
  export {WithAuthNavigation,WithoutAuthNavigation}
  

const styles = StyleSheet.create({})