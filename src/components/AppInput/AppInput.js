import React from 'react';
import {View} from 'react-native';
import {TextInput, Platform} from 'react-native';
import PropTypes from 'prop-types';

import {Colors, Fonts, Metrics, Images} from '../../themes';
import styles from './styles';
import FastImage from 'react-native-fast-image';

export default class AppInput extends React.Component {
  clear = () => {
    this.input.clear();
  };

  blur = () => {
    this.input.blur();
  };

  render() {
    const {
      style,
      color = Colors.appTextBlack,
      font = Fonts.type.regular,
      size = Platform.OS == 'ios' ? Fonts.size.regular : Fonts.size.small,
      iconName = '',
    } = this.props;

    switch (iconName) {
      case 'lock':
        var icon = Images.icLock;
        break;

      case 'profile':
        icon = Images.icProfile;
        break;

      case 'email':
        icon = Images.icEmail;
        break;

      default:
        break;
    }

    return (
      <View style={[styles.container, style]}>
        {iconName ? <FastImage style={styles.icon} source={icon} /> : null}

        <TextInput
          ref={(input) => (this.input = input)}
          clearButtonMode="while-editing"
          placeholderTextColor={Colors.appLightGrayColor}
          allowFontScaling={false}
          {...this.props}
          style={[
            styles.input,
            {
              paddingLeft: Metrics.margin.regular,
              fontSize: size,
              color: color,
              fontFamily: font,
            },
          ]}
        />
      </View>
    );
  }
}

TextInput.propTypes = {
  style: PropTypes.array,
  font: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
