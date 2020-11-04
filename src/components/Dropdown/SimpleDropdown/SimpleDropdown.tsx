import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import AppText from '../../AppText';
import {Colors} from '../../../themes';
import Divider from '../../Divider';

interface Row {
  id: number;
  name: string;
  selected?: boolean;
}

export default ({
  visible = false,
  isPicker = false,
  data,
  onSelect = () => {},
  chooseOne,
}: {
  visible: boolean;
  isPicker?: boolean;
  title: string;
  data: Array<Row>;
  onSelect?: Function;
  chooseOne: boolean;
}) => {
  const [items, setItems] = useState([] as Array<Row>);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const _onPressItem = (item: Row, index: number) => {
    if (isPicker) {
      setItems(
        items.map((i: Row) =>
          i.id == item.id ? {...i, selected: true} : {...i, selected: false},
        ),
      );
    } else {
      setItems(
        items.map((i: Row) =>
          i.id == item.id ? {...item, selected: !i.selected} : i,
        ),
      );
    }

    onSelect(item, index);
  };

  const _onChooseOne = (index: number) => {
    let dataTemp: Array<any> = data.map((item) => {
      if (item.selected === true) {
        item.selected = false;
      }
      return item;
    });
    dataTemp[index].selected = !dataTemp[index].selected;
    setItems(dataTemp);
    onSelect(dataTemp[index], index);
  };

  return visible ? (
    <View style={styles.container}>
      {data.map((item: any, index: number) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            chooseOne ? _onChooseOne(index) : _onPressItem(item, index);
          }}>
          {!isPicker ? (
            <Ionicons
              style={styles.radioButton}
              size={20}
              name={
                item.selected ? 'ios-radio-button-on' : 'ios-radio-button-off'
              }
              color={Colors.appGreen}
            />
          ) : null}
          <AppText text={item.name} />

          <Divider style={styles.divider} />
        </TouchableOpacity>
      ))}
    </View>
  ) : null;
};
