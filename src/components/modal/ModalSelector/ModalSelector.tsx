import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import AppText from '../../AppText';
import {Colors, Fonts} from '../../../themes';
import Divider from '../../Divider';
import AppButton from '../../AppButton';

interface Row {
  id: number;
  name: string;
  selected?: boolean;
}

export default ({
  visible = false,
  isPicker = false,
  title,
  data,
  onSelect = () => {},
  onPressOut = () => {},
  onPressSubmit = () => {},
  chooseOne,
}: {
  visible: boolean;
  isPicker?: boolean;
  title: string;
  data: Array<Row>;
  onSelect?: Function;
  onPressOut?: Function;
  onPressSubmit?: Function;
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

  const _onPressSubmit = () => {
    let selectedItemList = items.filter((item: Row) => item.selected);
    var selectedString = '';
    selectedItemList.forEach((item: Row) => {
      selectedString = selectedString + ', ' + item.name;
    });
    var selectedString = selectedString.substring(2, selectedString.length);
    onPressSubmit(selectedItemList, selectedString);
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

  const _onPressOut = () => {
    onPressOut();
  };

  const _renderItem = ({item, index}: {item: Row; index: number}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        chooseOne ? _onChooseOne(index) : _onPressItem(item, index);
      }}>
      {!isPicker ? (
        <Ionicons
          style={styles.radioButton}
          size={20}
          name={item.selected ? 'ios-radio-button-on' : 'ios-radio-button-off'}
          color={Colors.appGreen}
        />
      ) : null}
      <AppText text={item.name} />

      <Divider style={styles.divider} />
    </TouchableOpacity>
  );

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

        <FlatList
          renderItem={_renderItem}
          data={items}
          keyExtractor={(item) => item.name.toString()}
          ListHeaderComponent={() => <Divider />}
        />

        {!isPicker ? (
          <AppButton
            style={styles.button}
            text={'Save'}
            onPress={_onPressSubmit}
          />
        ) : null}
      </TouchableOpacity>
    </TouchableOpacity>
  ) : null;
};
