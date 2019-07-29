import React, { Component } from 'react';
import Router from './config/Router';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { pushNotifications } from './services';
pushNotifications.configure();

setTimeout(() => {
  pushNotifications.test();
}, 5000);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
  },
});

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.body}>
        <StatusBar hidden={true} />
        <Router />
      </SafeAreaView>
    );
  }
}
