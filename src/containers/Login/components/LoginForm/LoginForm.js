import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {AppText} from '../../../../components';
import {strings} from '../../../../utilities';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      isLogin: false,
      customerIndex: '',
    };
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.setState({
      customerIndex: 'onClick',
    });
  }

  render() {
    console.log(this.state.customerIndex);
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this._onClick}>
          <AppText text={strings.login_screen.login} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
