import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {AppText} from '../../components';
import {strings} from '../../utilities';
import LoginForm from './components/LoginForm/LoginForm';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppText text={strings.login_screen.login} />
      <LoginForm text={'Hello'} />
    </SafeAreaView>
  );
};

export default LoginScreen;
