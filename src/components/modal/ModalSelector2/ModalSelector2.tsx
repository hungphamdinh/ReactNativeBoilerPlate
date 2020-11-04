import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
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
  children: Array<any>;
}

export default ({
  visible = false,
  isPicker = false,
  title,
  data,
  onPressSubmit = () => {},
  onPressOut = () => {},
}: {
  visible: boolean;
  isPicker?: boolean;
  title: string;
  data: Array<any>;
  onPressSubmit?: Function;
  onPressOut?: Function;
}) => {
  const [listItem, setListItem] = useState(data);
  const [] = useState(data);

  useEffect(() => {
    if (data) {
      setListItem(data);
    }
  }, [data]);

  const _onPressItem = (item: Row) => {
    // onSelect(item)
    const newArray = listItem.map((item) => item);
    newArray.forEach((parent) => {
      if (parent.children) {
        for (let index = 0; index < parent.children.length; index++) {
          if (parent.children[index].id == item.id) {
            parent.children[index].selected = !parent.children[index].selected;
          }
        }
      }
    });
    setListItem(newArray);
  };

  const _onPressSubmit = () => {
    let selectedItemList = [] as Array<any>;
    var selectedString = '';
    listItem.forEach((parents: any) => {
      if (parents.children) {
        parents.children.forEach((child: any) => {
          if (child.selected) {
            selectedItemList.push(child);
            selectedString = selectedString + ', ' + child.name;
          }
        });
      }
    });

    var selectedString = selectedString.substring(2, selectedString.length);

    onPressSubmit(selectedItemList, selectedString);
  };

  const _onPressOut = () => {
    onPressOut();
  };

  const _renderItem = ({item}: {item: Row}) => (
    <View style={styles.itemContainer}>
      <AppText style={styles.parentTitle} text={item.name} bold />
      <FlatList
        data={item.children}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.childContainer}
            onPress={() => _onPressItem(item)}>
            <Ionicons
              style={styles.radioButton}
              size={20}
              name={
                item.selected ? 'ios-radio-button-on' : 'ios-radio-button-off'
              }
              color={Colors.appGreen}
            />
            <AppText text={item.name} />
          </TouchableOpacity>
        )}
      />
    </View>
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

        <Divider />

        <FlatList
          renderItem={_renderItem}
          data={listItem}
          keyExtractor={(item) => item.name.toString()}
          ItemSeparatorComponent={() => <Divider />}
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
