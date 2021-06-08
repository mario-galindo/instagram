import React, { useState } from "react";
import { View, TextInput, Image, Button } from "react-native";

import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");

export default function Save(props) {
  //console.log(props.route.params.image);
  const [caption, setCaption] = useState("");

  const uploadImage = async () => {
    const uri = props.route.params.image;
    const response = await fetch(uri);

    const blob = await response.blob();

    const task = firebase
      .storage()
      .ref()
      .child(
        `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`
      )
      .put(blob);

    const taskProgress = (snapshot) => {
      console.log(`transferred: ${snapshot.bytesTransferred}`);
    };

    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
        console.log(snapshot);
      });
    };

    const taskError = (snapshot) => {
      console.log(snapshot);
    };

    task.on("state_changed", taskProgress, taskError,taskCompleted);
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: props.route.params.image }}></Image>
      <TextInput
        placeholder="Write a caption..."
        onChangeText={(caption) => setCaption(caption)}
      ></TextInput>
      <Button title="Save" onPress={() => uploadImage()}></Button>
    </View>
  );
}
