import {Header} from "react-native-elements";
import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppHeader from '../components/header';

const windowHeight = Dimensions.get('window').height;

export default class MemeScreen extends React.Component{
  render(){
    return(
      <View style={styles.backdrop}>
      <AppHeader/>
        <Image
        style={{width: 300, height: 300, margin: "auto", marginTop: 5, marginBottom: 5, borderWidth: 3}}
        source={require('../assets/meme.jpg')}
        />
        <TouchableOpacity 
        onPress={()=>{
          this.props.navigation.navigate('HomeScreen');
        }}
        style={styles.button}>
          <Text style={styles.buttonText}>Return Home</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backdrop:{
    backgroundColor: "#15798f",
    height: windowHeight
  },
  button:{
    backgroundColor: "#00a32c",
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
    marginTop: 25,
    padding: 5,
    borderWidth: 5,
    borderRadius: 15
  },
  buttonText:{
    color: "white",
    fontSize: 25
  },
})