import React, { Component } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textBackground}>
        <Text style={styles.textProperties}>Newsletter</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBackground: {
    backgroundColor: "#95ff7d",
    height: 80,
  },
  textProperties: {
    alignSelf: "center",
    fontSize: 30,
    marginTop: 38,
  },
});
