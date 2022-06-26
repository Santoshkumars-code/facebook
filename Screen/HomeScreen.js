import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import Home from '../component/Home'
import { Header } from 'react-native/Libraries/NewAppScreen'
import Fheader from '../component/Fheader';
import HeaderIcon from '../data/HeaderIcon';
import TextArea from '../component/TextArea';
import Story from '../component/Story';
import PostSection from '../component/PostSection';
import TabStory from '../component/TabStory';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
        
      {/* <View style={styles.card}>
      <Fheader HeaderIcon ={HeaderIcon} />  
      </View> */}
      <ScrollView vertical={true} showsVerticalScrollIndicator={false} >
       <View style={styles.card1}>
        <TextArea />
      </View>

      <View style={styles.story}>
        {/* <Story /> */}
        <TabStory />
        <PostSection/>
        <PostSection/>
        <PostSection/>
        <PostSection/>
        <PostSection/>
      </View>  
      </ScrollView>
       
    </View>
  )
}

export default HomeScreen;
const styles = StyleSheet.create({
  container:{
  },
  card:{
    width:"100%",
    height:40,
    marginTop:10,
    borderBottomWidth:1,
    borderColor:"#c2c1c0",
    borderStyle:"solid"
  },
  card1:{
    width:"100%",
    height:70,
    marginTop:10,
    borderBottomWidth:1,
    borderColor:"#c2c1c0",
    borderStyle:"solid",  
  },
  story:{
    backgroundColor:"#121212",

  }
})