/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


const instructions = Platform.select({
  ios: 'sipra Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'prisha Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state={ myState: "Welcome to ReactNative Sipra"}
  updateState= () => this.setState({myState: "hi sipra updated"})
  render() {
    return (
      <View style={styles.container}>
      <Text onPress={this.updateState} style={styles.myState}>
      {this.state.myState}
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myState: {
    color: 'red'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
