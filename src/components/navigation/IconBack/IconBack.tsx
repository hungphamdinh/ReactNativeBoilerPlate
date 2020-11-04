import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {Colors} from '../../../themes';

const IconBack = () => {
  return (
    <Ionicons
      style={styles.container}
      size={35}
      name={'ios-close'}
      color={Colors.appGreen}
    />
  );
};

export default IconBack;
