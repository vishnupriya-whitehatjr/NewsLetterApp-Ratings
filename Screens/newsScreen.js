import {Header} from "react-native-elements";
import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppHeader from '../components/header';

const windowHeight = Dimensions.get('window').height;

export default class NewsScreen extends React.Component{
  render(){
    return(
      <View style={styles.backdrop}>
      <AppHeader/>
        <Text style={styles.header}>
          BREAKING NEWS:{"\n"}
          World Famous Chef Found To Be A Fraud!
        </Text>

        <Text style={styles.bodyText}>
          In a shocking turn of events, world wide phenomenon, Chef Alfredo Linguini, the son of the renowned, now dead, Chef Auguste Gusteau, was caught with an infestation of rats in his resteraunt's kitchen. Now on it's own that would just amount to the place being shut down but no, there was more. One of these rats appeared to be controlling Linguini and that through this rat Linguini had recieved his cooking ability. How this rat learned to cook no one knows. What we do know is that Chef Linguini probably won't be cooking any time soon.
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
    color: "white"
  }
})