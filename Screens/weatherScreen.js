import {Header} from "react-native-elements";
import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppHeader from '../components/header';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class WheatherScreen extends React.Component{
  render(){
    return(
      <View style={styles.backdrop}>
      <AppHeader/>

       <Text style={styles.header}>
          Weather Projection:{"\n"}
        </Text>
        <Text style={[styles.header, {textDecorationLine:"none"}]}>
          12/20/20 - 12/27/20
        </Text>

        <Image
        style={{width: windowWidth/1.5, height: windowWidth*1.2, margin: "auto", marginTop: 5, marginBottom: 5}}
        source={require('../assets/Weather.png')}
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
  header:{
    width: "100%",
    textAlign: "center",
    fontSize: 28,
    marginTop: 10,
    textDecorationLine: "underline",
    fontWeight: "bold",
    color: "white"
  }
})