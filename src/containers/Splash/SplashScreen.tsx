import React, {useEffect} from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import {Images} from '../../themes';
import {strings} from '../../utilities';
import {styles} from './styles';

const SplashScreen = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3000);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{strings.splash_screen.title}</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
