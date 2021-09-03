import React,{Component} from 'react';
import {Text,
       View,
       TextInput,
       StyleSheet,
       SafeAreaView,
       TouchableOpacity,
       Platform,
       StatusBar,
       ImageBackground,
       Image,
} from 'react-native';


export default class Home extends Component{
render(){
  return(
  
    <View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea}/>
    
    <ImageBackground source={require('../space.gif')} 
    style={styles.backgroundImage}/>
    <View style={styles.titleBar}>
    <Text style={styles.titleText}>Stellar App</Text>
    </View>

  <TouchableOpacity style={styles.routeCard}>
  <Text style={styles.routeText}>Daily Pic</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.routeCard}>
  <Text style={styles.routeText}>SpaceCraft</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.routeCard}>
  <Text style={styles.routeText}>StarMap</Text>
  </TouchableOpacity>
    </View>
  )
}}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  droidSafeArea:{
    marginTop:Platform.OS === "android" ? StatusBar.CurrentHeight:0

  },
  titleBar:{
    flex:0.15,
    justifyContent:'center',
    alignItems:'center',
    
  },
  routeCard:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    borderRadius:30,
    backgroundColor:'white'
  },
  titleText:{
    fontSize:40,
    fontWeight:'bold',
    color:'purple',
  },
routeText:{
  fontSize:30,
  fontWeight:'bold',
  color:"black",
  marginTop:20,
  paddingLeft:30
},
backgroundImage:{
  flex:1,
  resizeMode:'cover'
},
})