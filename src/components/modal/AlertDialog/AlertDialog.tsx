import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';
import AppText from '../../AppText';
import {Colors, Fonts} from '../../../themes';
import Divider from '../../Divider';

export default ({
  visible = false,
  title,
  content,
  onPressSubmit = () => {},
  onPressOut = () => {},
  textBtnOut,
  textBtnAccept,
}: {
  visible: boolean;
  title: string;
  content: string;
  onPressSubmit?: Function;
  onPressOut?: Function;
  textBtnOut: string;
  textBtnAccept: string;
}) => {
  const _onPressOut = () => {
    onPressOut();
  };

  const _onPressSubmit = () => {
    onPressSubmit();
  };
  return visible ? (
    <TouchableOpacity
      style={styles.container}
      onPress={_onPressOut}
      activeOpacity={1}>
      <TouchableOpacity style={styles.modal} activeOpacity={1}>
        <AppText
          style={styles.title}
          text={title}
          bold
          center
          size={Fonts.size.large}
        />
        <Divider />
        <AppText
          style={styles.content}
          text={content}
          size={Fonts.size.large}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonNo} onPress={_onPressOut}>
            <AppText text={textBtnOut} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonYes} onPress={_onPressSubmit}>
            <AppText text={textBtnAccept} color={Colors.appGreen} bold />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  ) : null;
};
