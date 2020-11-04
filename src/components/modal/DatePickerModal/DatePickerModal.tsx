import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';

import styles from './styles';
import AppText from '../../AppText';
import {Colors, Fonts} from '../../../themes';

export default ({
  visible = false,
  title,
  onPressSubmit,
}: {
  visible: boolean;
  title: string;
  onBackdropPress?: Function;
  onPressSubmit: Function;
}) => {
  const [date, setDate] = useState(new Date());

  const _onPressSubmit = () => {
    onPressSubmit(date);
  };

  return visible ? (
    <View style={styles.modal}>
      <DatePicker date={date} onDateChange={setDate} mode="date" />
      <TouchableOpacity
        onPress={_onPressSubmit}
        hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}>
        <AppText
          style={styles.title}
          text={title}
          color={Colors.appGreen}
          right
          bold
          size={Fonts.size.large}
        />
      </TouchableOpacity>
    </View>
  ) : null;
};
