import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

export class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.body}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>1 Step One 1</Text>
            <Text style={styles.sectionDescription}>
              Edit <Text style={styles.highlight}>App.js</Text> to change this
              screen and then come back to see your edits.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Button
              title="Go to Jane's profile"
              onPress={() => navigate('Settings', { name: 'Jane' })}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#444',
  },
  highlight: {
    fontWeight: '700',
  },
});
