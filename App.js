import React, { Component } from "react";
import * as firebase from "firebase";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

const firebaseConfig = {
  apiKey: "AIzaSyDSZserBUBfBduExqrsrGM4MIcMJi5bjKE",
  authDomain: "instagram-kuenta.firebaseapp.com",
  projectId: "instagram-kuenta",
  storageBucket: "instagram-kuenta.appspot.com",
  messagingSenderId: "419741061222",
  appId: "1:419741061222:web:ca45629feaf499fe325da7",
  measurementId: "G-SH3GW4GXTJ",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRoute="Landing">
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
