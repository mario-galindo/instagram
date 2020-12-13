import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state({
      email: "",
      password: "",
      name: "",
    });

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {}

  render() {
    return (
      <View>
        <TextInput
          placeholder="Name"
          onChangeText={(name) => this.setState({ name })}
        ></TextInput>
        <TextInput
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
        ></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        ></TextInput>

        <Button onPress={() => this.onSignUp()} title="Sign Up"></Button>
      </View>
    );
  }
}

export default Register;
