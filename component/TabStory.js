import {SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'

import Story from './Story'
import Reel from './Reel'

const Tab =  createMaterialTopTabNavigator();
const TabStory = () =>{
  return(
   <SafeAreaView style={{flex:1,height:260}}>
     <Tab.Navigator >
      <Tab.Screen name="Stories" component={Story} />
      <Tab.Screen name="Reels" component={Reel} />
  </Tab.Navigator> 
   </SafeAreaView>
  )     
}

export default TabStory;

const styles = StyleSheet.create({})