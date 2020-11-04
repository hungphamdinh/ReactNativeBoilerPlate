import React from 'react';
import {TouchableOpacity} from 'react-native';

import styles from './styles';
import AppText from '../AppText';
import {Colors} from '../../themes';

const AppButton = ({
  text,
  onPress,
  style,
  disable = false,
}: {
  text: string;
  onPress: Function;
  style?: Object;
  disable?: boolean;
}) => {
  const _onPress = () => {
    onPress();
  };

  return (
    <TouchableOpacity
      disabled={disable}
      style={[
        styles.container,
        style,
        {backgroundColor: disable ? Colors.appColor : Colors.appGreen},
      ]}
      onPress={_onPress}>
      <AppText text={text} color={Colors.appWhite} bold />
    </TouchableOpacity>
  );
};

export default AppButton;
