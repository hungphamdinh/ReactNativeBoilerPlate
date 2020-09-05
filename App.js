/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Fonts, Images, Metrics, Colors} from './src/themes';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome To HungPham Template</Text>
      <Image style={styles.avatar} source={Images.avatar} />
      <TouchableOpacity onPress={() => Linking.openURL('https://charat.me/')}>
        <Text style={styles.content}>This image created from </Text>
        <Text style={styles.link}>CHARAT CHOCO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 200,
    fontSize: Fonts.size.h4,
    fontWeight: Platform.OS === 'android' ? 'bold' : '500',
  },
  avatar: {
    width: 300,
    height: 400,
  },
  content: {
    marginTop: Metrics.margin.regular,
  },
  link: {
    color: Colors.appBlue,
    marginTop: Metrics.margin.small,
    marginLeft: Metrics.margin.very_huge,
    textDecorationLine: 'underline',
  },
});

export default App;
