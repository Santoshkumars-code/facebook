import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    
    <View style={styles.container}>
     
     <View style={{flex:0.8}}>
     <Image 
       source={{uri:"data:image/png;base64,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"}}
       style={{height:24,width:126,marginLeft:15}}
       />
        </View>
       <View style={{flex:0.1}}>
       <Image 
       source={{uri:"https://img.icons8.com/ios-filled/100/undefined/search--v1.png"}}
       style={{height:26,width:26}}
       /> 
     </View>
     <View style={{flex:0.1}}>
       <Image 
       source={{uri:"https://img.icons8.com/material/48/undefined/facebook-messenger--v1.png"}}
       style={{height:26,width:26}}
       /> 
     </View>
    </View>
   
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:'black',
        flex:1,
        flexDirection:"row",
        justifyContent:'space-around',
        marginTop:10,
    }
})