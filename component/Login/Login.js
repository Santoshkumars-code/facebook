import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Login = ({navigation}) => {
  return (
    <View>
      
      {/* <Image source={require("../img/facebooklogin.jpeg")} style={{height:100,width:320}}/> */}
      <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VO_Fh0OfiIhqn7nyelxQWyRjKcFn1ASzOw&usqp=CAU"}}
        style={{height:180,width:"100%"}}
        />
        <Text style={{height:40, width:"100%",color:"gray",textAlign:"center", justifyContent:"center",marginTop:10}}>हिंदी . मराठी . More...</Text>
      <View>
        <View>
          <TextInput style={styles.loginInput} placeholder="Phone or Email"></TextInput>
          <TextInput style={styles.loginInput} placeholder="Password"></TextInput>
        </View>
        <View>
           <TouchableOpacity>
            <Text style={styles.loginButton}>Log In</Text>
           </TouchableOpacity>

           <TouchableOpacity>
            <Text style={styles.forgotpassword}>Forgot Password</Text>
           </TouchableOpacity>
        </View>

        <View style={{flex:1,flexDirection:"row",height:300,width:"100%",textAlign:"center",justifyContent:'center'}}>
        <Text style={styles.Divider} ></Text>
        <Text style={styles.or} >OR</Text>
        <Text style={styles.Divider} ></Text>
       
        </View>
        <View>
          
        <TouchableOpacity  onPress={() => navigation.push('Signup')}>
            <Text style={styles.createButton}>Create new Facebook account</Text>
           </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
loginInput:{
  width:300,
  height:52,
  fontSize:16,
  borderBottomWidth:1,
  marginLeft:30,
  marginRight:10,
  borderBottomColor:"#acada6",
  marginTop:10
},
loginButton:{
  height:40,
  width:300,
  backgroundColor:"#3549de",
  textAlign:"center",
  alignContent:"center",
  padding:10,
  color:"#fff",
  borderRadius:6,
  marginLeft:30,
  marginTop:20,
  fontWeight:"700"
},
forgotpassword:{
  height:50,
  width:300,
  textAlign:"center",
  justifyContent:"center",
  color:"#3549de",
  fontSize:20,
  borderRadius:10,
  marginLeft:30,
  marginTop:10,
  fontWeight:"700"
},
Divider:{
  width:130,
  height:50,
  fontSize:16,
  borderBottomWidth:1,
  borderBottomColor:"#acada6",
  marginTop:-10
},
or:{
  width:17,
  height:50,
  fontSize:12,
  borderBottomColor:"#acada6",
  marginTop:30
},
createButton:{
  height:40,
  width:300,
  backgroundColor:"#0aa11b",
  textAlign:"center",
  padding:8,
  color:"#fff",
  borderRadius:6,
  fontSize:16,
  marginLeft:30,
  marginTop:80,
  fontWeight:"700",
  
},
})