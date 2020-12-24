import { Header } from "react-native-elements";
import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AppHeader from "../components/header";
import db from "../config";

const windowHeight = Dimensions.get("window").height;

var liked = false;
var disliked = false;

export default class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      totalLikes: 0,
      totalDislikes: 0,
    };
  }

  componentDidMount() {
    var dataRef = db.ref("rating/");
    var data;
    dataRef.on("value", (data) => {
      data = data.val();
      console.log(data["likes"]);
      this.setState({
        totalLikes: data["likes"],
        totalDislikes: data["dislikes"],
      });
    });
  }

  likePressed() {
    if (liked === false && disliked === false) {
      var likeRef = db.ref("rating/");
      var likes;
      likeRef.on("value", (data) => {
        likes = data.val();
        console.log(likes["likes"]);
      });
      likeRef.set({
        likes: likes["likes"] + 1,
        dislikes: likes["dislikes"],
      });
      this.setState({
        totalLikes: likes["likes"],
        totalDislikes: likes["dislikes"],
      });
      liked = true;
    }
  }

  dislikePressed() {
    if (disliked === false && liked === false) {
      var dislike = db.ref("rating/");
      var dislikeRef = db.ref("rating/");
      var dislikes;
      dislikeRef.on("value", (data) => {
        dislikes = data.val();
        console.log(dislikes["dislikes"]);
      });
      dislikeRef.set({
        dislikes: dislikes["dislikes"] + 1,
        likes: dislikes["likes"],
      });
      disliked = true;
    }
  }

  render() {
    return (
      <View style={styles.backdrop}>
        <AppHeader />

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("NewsScreen");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>News</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("MemeScreen");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Meme</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("WeatherScreen");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("DailyQuoteScreen");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Daily Quote</Text>
        </TouchableOpacity>

        <View style={styles.votingButtons}>
          <View style={styles.voteButton}>
            <TouchableOpacity
              onPress={() => {
                this.likePressed();
              }}
            >
              <Image
                style={{
                  width: 75,
                  height: 75,
                  margin: "auto",
                  marginTop: 5,
                  marginBottom: 5,
                }}
                source={require("../assets/ThumbsUp.png")}
              />

              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  transform: [{ translateX: 25 }, { translateY: -45 }],
                }}
              >
                {this.state.totalLikes}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.voteButton}>
            <TouchableOpacity
              onPress={() => {
                this.dislikePressed();
              }}
            >
              <Image
                style={{
                  width: 75,
                  height: 75,
                  margin: "auto",
                  marginTop: 5,
                  marginBottom: 5,
                  transform: [{ translateY: 30 }],
                }}
                source={require("../assets/ThumbsDown.png")}
              />

              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  transform: [{ translateX: 35 }, { translateY: -37.5 }],
                }}
              >
                {this.state.totalDislikes}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            color: "white",
            fontSize: 32,
            alignSelf: "center",
            marginTop: -20,
          }}
        >
          Rate Us!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "#15798f",
    height: windowHeight,
  },
  button: {
    backgroundColor: "#00a32c",
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
    marginTop: 25,
    padding: 5,
    borderWidth: 5,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  votingButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  voteButton: {
    margin: 25,
  },
});
