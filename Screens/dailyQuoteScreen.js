import {Header} from "react-native-elements";
import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppHeader from '../components/header';

const windowHeight = Dimensions.get('window').height;

export default class DailyQuoteScreen extends React.Component{
  render(){
    return(
      <View style={styles.backdrop}>
      <AppHeader/>
        <Text style={styles.header}>Quote Of The Day</Text>

        <Text style={styles.bodyText}>
        "If you're offered a seat on a rocket ship, don't ask what seat! Just get on." {"\n"}{"\n"}
        - Sheryl Sandberg
        </Text>

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
  },
  bodyText:{
    width: "90%",
    textAlign: "justify",
    alignSelf: "center",
    fontSize: 20,
    marginTop: 12,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5
  }
})