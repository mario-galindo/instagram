import React, { Component } from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/index";

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { currentUser } = this.props;

    if (currentUser == undefined) {
      return(
        <View/>
      )
    }

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>{currentUser.name} is Logged In</Text>
      </View>
    );
  }
}

const MapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(MapStateToProps, mapDispatchProps)(Main);
