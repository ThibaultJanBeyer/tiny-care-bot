import React, { Component } from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
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
        <View style={styles.sectionContainer}>
          <Image
            source={require('../icons/tinycarebot.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Tiny Care Bot</Text>
          <Text style={styles.sectionDescription}>
            Tiny Care Bot is <Text style={styles.highlight}>active</Text>. He
            will help you become a better person by caring about yourself and
            others
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          {/* <Button title="Settings" onPress={() => navigate('Settings')} /> */}
        </View>
      </View>
    );
  }
}

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width - 200;
const imageHeight = Math.round(imageWidth / 0.8427);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#888',
    textAlign: 'center',
  },
  highlight: {
    color: '#0f0',
  },
});
