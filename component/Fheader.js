import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const Fheader = ({HeaderIcon}) => {

  // const [active, setActive] = useState("home");

  // const Icon = ({icon}) =>(
  //   <TouchableOpacity onPress={() => setActive(icon.name)}>
  //        <Image 
  //         Source={{uri: active===icon.name ? icon.activeURL : icon.inActiveURL}}
  //        style={styles.headerIcon}
  //       >

  //        </Image>
  //   </TouchableOpacity>
  // )
  return (

    // <View style={styles.container}>
    //    <View style={styles.card}>
    //        {
    //         HeaderIcon.map((value,index) =>(
    //           <Icon key={index} icon={value} />
    //         ))
    //        }
    //    </View>
    // </View>

    <View style={styles.container}>
    
     <View >
     <Image 
       source={{uri:"https://img.icons8.com/material-outlined/96/undefined/home--v2.png"}}
     //  source={{uri:"https://img.icons8.com/material/48/undefined/home--v5.png"}}
      style={{height:30,width:30,marginTop:40}}
      />
     </View>
     <View>
     <Image 
       source={{uri:"https://img.icons8.com/material-outlined/96/undefined/video-playlist.png"}}
      // source={{uri:"https://img.icons8.com/material/48/undefined/video-playlist--v1.png"}}
      style={{height:30,width:30,marginTop:40}}
      />
     </View>
     <View>
     <Image 
       source={{uri:"https://img.icons8.com/external-thin-kawalan-studio/96/undefined/external-market-business-thin-kawalan-studio-2.png"}}
       //source={{uri:"https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/undefined/external-marketplace-with-groceries-and-other-items-isolated-on-white-background-seo-bold-tal-revivo.png"}}
      style={{height:30,width:30,marginTop:40}}
      />
     </View>
     <View>
     <Image 
       source={{uri:"https://img.icons8.com/ios/100/undefined/facebook-gaming.png"}}
       //source={{uri:"https://img.icons8.com/material-rounded/24/undefined/facebook-gaming.png"}}
      style={{height:30,width:30,marginTop:40}}
      />
     </View>
     <View>
     <Image 
       source={{uri:"https://img.icons8.com/material-outlined/96/undefined/appointment-reminders--v1.png"}}
      // source={{uri:"https://img.icons8.com/material-rounded/24/undefined/appointment-reminders.png"}}
      style={{height:30,width:30,marginTop:40}}
      />
     </View> 
     <View>
     <Image 
       source={{uri:"https://img.icons8.com/material-outlined/96/undefined/menu--v1.png"}}
      // source={{uri:"https://img.icons8.com/material-rounded/24/undefined/appointment-reminders.png"}}
      style={{height:30,width:30,marginTop:40}}
      />
     </View>
     
    </View>
  )
}

export default Fheader;

const styles = StyleSheet.create({
  // container:{
  //   position:"absolute",
  //   zIndex:999,
  //   borderTopColor:"#1e1e1f",
  //   borderTopWidth:2,
  //   borderStyle:"solid",
  //   bottom:0,
  //   width:"100%"
  // },
  container:{
    flexDirection:'row',
    flex:1,
    height:40,
    width:"100%",
    justifyContent:'space-around',
  
  },

  headerIcon:{
    width:30,
    height:30,
    borderWidth:1,
    borderColor:"black",
    borderStyle:"solid"
  }
})
