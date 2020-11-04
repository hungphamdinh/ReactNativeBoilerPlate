import {Platform, StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 200,
    fontSize: Fonts.size.h4,
    fontWeight: Platform.OS === 'android' ? 'bold' : '500',
  },
  avatar: {
    width: 300,
    height: 400,
  },
  content: {
    marginTop: Metrics.margin.regular,
  },
  link: {
    color: Colors.appBlue,
    marginTop: Metrics.margin.small,
    marginLeft: Metrics.margin.very_huge + 10,
    textDecorationLine: 'underline',
  },
});
