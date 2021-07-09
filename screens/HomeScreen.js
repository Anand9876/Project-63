import React,{component} from 'react';
import {View,Text,Image, StyleSheet, TouchableOpacity} from 'react-native';
import ReactPlayer from 'react-player'

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'black',color:'white'}}>
        <ReactPlayer url='https://www.youtube.com/watch?v=cpP-fCo8Dn4'></ReactPlayer>
        <Image source={require('../assets/arrow.png')} style={{width:100,height:100,marginTop:100}}></Image>
        <Text style={{fontSize:20,color:'white',marginTop:50}}>Press down to start searching</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
          <Text style={styles.search}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const styles=StyleSheet.create({
      search:{
    alignSelf:'center',
    fontSize:20,
    backgroundColor:'black',
    width:120,
    height:50,
    color:'white',
    borderWidth:5,
    borderRadius:10,
    borderColor:'orange',
    paddingLeft:25,
    paddingTop:5,
    marginTop:100
  },
  text:{
color:'white',
fontSize:20
  }
  })
export default HomeScreen;
