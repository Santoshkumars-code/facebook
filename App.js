// import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import HomeScreen from './Screen/HomeScreen'
import WatchScreen from './Screen/WatchScreen'
import PlaceScreen from './Screen/PlaceScreen'
// import GameScreen from './Screen/GameScreen'
// import NotificationScreen from './Screen/NotificationScreen'
// import MenuScreen from './Screen/MenuScreen';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack'
//Aaditya

// const Tab =  createMaterialTopTabNavigator();
// const TabScreen = () =>{
//   return(
//    <SafeAreaView style={{flex:1}}>
//      <Tab.Navigator>
      
//       <Tab.Screen name="Home" component={HomeScreen}/>
//       <Tab.Screen name="Watch" component={WatchScreen}/>
//       <Tab.Screen name="Place" component={PlaceScreen}/>
//       <Tab.Screen name="Game" component={GameScreen}/>
//       <Tab.Screen name="Notification" component={NotificationScreen}/>
//       <Tab.Screen name="Menu" component={MenuScreen}/>
    
//   </Tab.Navigator> 
//    </SafeAreaView>
//   )     
// }
// const Stack = createStackNavigator();
// const App = () => {
//   return (
//     // <NavigationContainer>
//     //      <TabScreen />
//     // </NavigationContainer>
//     // <View>
     
//     //   {/* <HomeScreen />      */}
//     // </View>
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen component={TabScreen} name ='home' />
//       </Stack.Navigator>
  
//     </NavigationContainer>
//   )
// }

// export default App

import { View, Text } from 'react-native'
import React from 'react'
 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 import HomeScreen from './Screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

    const Tab = createMaterialTopTabNavigator();
    
    function App() {
      return (
        <NavigationContainer>
          <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={WatchScreen} />
          <Tab.Screen name="place" component={PlaceScreen} />
        </Tab.Navigator>
        </NavigationContainer>
      );
    }
  

export default App
