import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'

const MenuHeader = () => {
  return (
    <View>
      <View style={styles.card}>
      <Text  style={styles.text}>Menu</Text>
      <TouchableOpacity>
      <Image  
         source={{uri:"https://img.icons8.com/material/48/000000/person-male.png"}}
         style={{width:30,height:30,marginTop:10}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  
         source={{uri:"https://img.icons8.com/ios-filled/100/000000/search--v1.png"}}
         style={{width:30,height:30,marginTop:10}}
        />
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default MenuHeader

const styles = StyleSheet.create({
    card:{
        flex:1,
        flexDirection:"row",
        height:55,
        width:"100%",
        justifyContent:"space-around",
    },
    text:{
      width:200,
      height:30,
      marginTop:10,
      fontSize:24,
      color:"black",
      fontWeight:"600"
      },
})