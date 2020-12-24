import React, { Component } from "react";
import { StyleSheet, Button, View, Text, TouchableOpacity } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "./Screens/homeScreen";
import NewsScreen from "./Screens/newsScreen";
import MemeScreen from "./Screens/memeScreen";
import WeatherScreen from "./Screens/weatherScreen";
import DailyQuoteScreen from "./Screens/dailyQuoteScreen";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

const switchScreen = createSwitchNavigator({
  HomeScreen: { screen: HomeScreen },
  NewsScreen: { screen: NewsScreen },
  MemeScreen: { screen: MemeScreen },
  WeatherScreen: { screen: WeatherScreen },
  DailyQuoteScreen: { screen: DailyQuoteScreen },
});

const AppContainer = createAppContainer(switchScreen);
