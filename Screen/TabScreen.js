import {SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native'
import HomeScreen from './HomeScreen'
import WatchScreen from './WatchScreen'
import PlaceScreen from './PlaceScreen'
import GameScreen from './GameScreen'
import NotificationScreen from './NotificationScreen'
import MenuScreen from './MenuScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import Home from '../component/Home'

const Tab =  createMaterialTopTabNavigator();
const TabScreen = () =>{
  return(
   <SafeAreaView style={{flex:1}}>
    <View style={{height:50,width:"100%"}}>
    <Home />
    </View>
     <Tab.Navigator screenOptions={{ headerShown: false }}>
     
      <Tab.Screen name="H" component={HomeScreen}
       options={{
        showLabel: false,
        tabBarIcon: ({ color }) => (
            <Image 
            source={{uri:"https://img.icons8.com/material-outlined/96/undefined/home--v2.png"}}
          //  source={{uri:"https://img.icons8.com/material/48/undefined/home--v5.png"}}
           style={{height:30,width:30,marginTop:-11}}
           />
       ), 
              
      }}
      />
      <Tab.Screen name="W" component={WatchScreen}
       options={{
        headerShown:false,
        tabBarIcon: ({ color }) => (
            <Image 
            source={{uri:"https://img.icons8.com/material-outlined/96/undefined/video-playlist.png"}}
           // source={{uri:"https://img.icons8.com/material/48/undefined/video-playlist--v1.png"}}
           style={{height:30,width:30,marginTop:-10}}
           />
       ), 
                 
      }} />
      <Tab.Screen name="P" component={PlaceScreen}
       options={{     
        tabBarIcon: ({ tintColor }) => (

            <Image color={tintColor}
            source={{uri:"https://img.icons8.com/external-thin-kawalan-studio/96/undefined/external-market-business-thin-kawalan-studio-2.png"}}
            //source={{uri:"https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/undefined/external-marketplace-with-groceries-and-other-items-isolated-on-white-background-seo-bold-tal-revivo.png"}}
           style={{height:30,width:30,marginTop:-10}}
           />
       ), 
                 
      }}/>
      <Tab.Screen name="G" component={GameScreen}
       options={{
        headerShown:false,
        tabBarIcon: ({ color }) => (
            <Image 
            source={{uri:"https://img.icons8.com/ios/100/undefined/facebook-gaming.png"}}
            //source={{uri:"https://img.icons8.com/material-rounded/24/undefined/facebook-gaming.png"}}
           style={{height:30,width:30,marginTop:-10}}
           />
       ), 
                 
      }}/>
      <Tab.Screen name="N" component={NotificationScreen}
       options={{
        tabBarIcon: ({ color }) => (
            <Image 
            source={{uri:"https://img.icons8.com/material-outlined/96/undefined/appointment-reminders--v1.png"}}
           // source={{uri:"https://img.icons8.com/material-rounded/24/undefined/appointment-reminders.png"}}
           style={{height:30,width:30,marginTop:-10}}
           />
       ), 
                 
      }}
      />
      <Tab.Screen name="M" style={{height:1,width:1,marginTop:-20,}} component={MenuScreen}
       options={{
        tabBarIcon: ({ color }) => (
            <Image 
            source={{uri:"https://img.icons8.com/material-outlined/96/undefined/menu--v1.png"}}
           // source={{uri:"https://img.icons8.com/material-rounded/24/undefined/appointment-reminders.png"}}
           style={{height:30,width:30,marginTop:-10}}
           />
       ), 
                 
      }}/>
    
  </Tab.Navigator> 
   </SafeAreaView>
  )     
}

export default TabScreen

const styles = StyleSheet.create({})