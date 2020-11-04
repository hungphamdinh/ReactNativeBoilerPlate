import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../themes';
const {width: totalWidth} = Dimensions.get('screen');
export let styles = StyleSheet.create({
  cursor: {
    backgroundColor: Colors.appGreen,
    width: (totalWidth - 80) / 2,
    height: 15,
    borderRadius: 7,
  },
  container: {
    width: totalWidth - 80,
    backgroundColor: Colors.appBackgroundGrayColor,
    borderRadius: 7,
    height: 7,
  },
  draggableContainer: {
    width: totalWidth - 80,
    justifyContent: 'center',
    backgroundColor: Colors.overlay1,
    borderRadius: 7,
    height: 7,
  },
});
