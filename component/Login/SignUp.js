
import { StyleSheet, Text, View ,Image, TouchableOpacity,Button} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import React,{useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'
// import DateTimePicker from '@react-native-community/datetimepicker';


const SignUp = ({navigation}) => {
  const [gender, setGender] = useState('Gender');

  
//   const [mydate, setDate] = useState(new Date());
//   const [displaymode, setMode] = useState('date');
//   const [isDisplayDate, setShow] = useState(false);
//   const changeSelectedDate = (event, selectedDate) => {
//   const currentDate = selectedDate ;
//   setDate(currentDate);
// };
// const showMode = (currentMode) => {
//  // setShow(true);
//   setMode(currentMode);
//   setShow(false)
// };
// const displayDatepicker = () => {
//   showMode('date');
// };

// console.log(mydate)
  return (
    <>
  
    <View>
      
      {/* <Image source={require("../img/facebooklogin.jpeg")} style={{height:100,width:320}}/> */}
      <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VO_Fh0OfiIhqn7nyelxQWyRjKcFn1ASzOw&usqp=CAU"}}
        style={{height:180,width:"100%"}}
        />
        <Text style={{height:40, width:"100%",color:"gray",textAlign:"center", justifyContent:"center",marginTop:10}}>हिंदी . मराठी . More...</Text>
      <View>
        <View>
          <TextInput style={styles.loginInput} placeholder="First name"></TextInput>
          <TextInput style={styles.loginInput} placeholder="Surname"></TextInput>
          <TextInput style={styles.loginInput} placeholder="Phone or Email"></TextInput>
          <TextInput style={styles.loginInput} placeholder="New password"></TextInput>
          {/* <TouchableOpacity onPress={displayDatepicker} value={mydate} style={styles.loginInput} >
            <Text>DAte</Text>
         </TouchableOpacity> */}

          <View style={styles.formGroup}>
                <Text style={styles.loginInputs}>Selected: {gender}</Text>
                <Picker style={styles.loginInputs} 
                      selectedValue={gender}
                    onValueChange={currentGender => setGender(currentGender)}>
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Other" value="Other" />
                  </Picker>
                  {/* <Text>
                    Selected: {gender}
                  </Text> */}
            </View>

            
    {/* <View>
       <View>
         <Button onPress={displayDatepicker} title="Show date picker!" />
            </View> 
               {isDisplayDate &&
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={mydate}
                     mode={displaymode}
                     is12Hour={true}
                     display="default"
                     onChange={changeSelectedDate}
            />
         }
    </View> */}
        </View>
        <View>
           <TouchableOpacity  onPress={() => navigation.push('home')} style={styles.signupButton}>
            <Text style={styles.signuptext}>Sign Up</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.push('Login')} style={styles.gobackButton}>
            <Text style={styles.gobacktext}>Go back login</Text>
           </TouchableOpacity>
        </View>
        
      </View>
    </View>
    </>
  )
}

export default SignUp

const styles = StyleSheet.create({
loginInput:{
  width:300,
  height:46,
  fontSize:16,
  borderBottomWidth:1,
  marginLeft:30,
  marginRight:10,
  borderBottomColor:"#acada6",
  marginTop:10
},
signupButton:{
  height:40,
  width:300,
  backgroundColor:"#3549de",
  textAlign:"center",
  alignContent:"center",
  padding:10,
  color:"#fff",
  borderRadius:6,
  marginLeft:30,
  marginTop:80,
},
signuptext:{
  textAlign:"center",
  alignContent:"center",
  color:"#fff",
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


label:{
  fontSize:16,
 
},
formGroup:{
  flex:1,
  flexDirection:"row",
  height:100,
},
loginInputs:{
  width:140,
  height:46,
  fontSize:16,
  borderBottomWidth:1,
  marginLeft:30,
  marginRight:10,
  borderBottomColor:"#acada6",
  marginTop:10
},
gobackButton:{
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
},
gobacktext:{
  textAlign:"center",
  alignContent:"center",
  color:"#fff",
  fontWeight:"700"
},

})
