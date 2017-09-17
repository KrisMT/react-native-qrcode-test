/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      qr: '',
      reactivate: false
    };
  }

  onSuccess(e) {
    this.setState({qr: e.data});
  }

  onClick(e) {
    this.setState({reactivate: !this.state.reactivate});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <QRCodeScanner onRead={this.onSuccess.bind(this)} reactivate={true} reactivateTimeout={1} />
        <Text>QR Code: {this.state.qr} </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('MyApp', () => MyApp);
