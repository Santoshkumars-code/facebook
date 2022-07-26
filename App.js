import React, { useEffect,useState } from 'react'
import TabScreen from './Screen/TabScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';
import MyDatePicker from './component/Login/DateForm';
import SplashScreen from './Screen/SplashScreen';
import CreatePost from './Screen/CreatePost';



const Stack = createStackNavigator();

const App = () => {
 const [showSplashScreen, setShowSplashScreen] = useState(true)
  useEffect(() =>{
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  }, []);
  return (
  //  <Login />
  // <SignUp />
  // <MyDatePicker />
   
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen component={TabScreen} name ='home' options={{headerShown:false}}/>
    //   </Stack.Navigator>
  
    // </NavigationContainer>

    <NavigationContainer >
    <Stack.Navigator >
      {showSplashScreen ? (
         <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>       
         ) : null}
       <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} />
       <Stack.Screen name="Signup" component={SignUp} options={{ headerShown:false }} />
       <Stack.Screen component={TabScreen} name ='home' options={{headerShown:false}}/>
       <Stack.Screen component={CreatePost} name ='CreatePost' />
    </Stack.Navigator>
 </NavigationContainer>
  )
}

export default App

 //<SafeAreaView style={styles.mainContainer}>

//<AuthNavigation />
//</SafeAreaView> 