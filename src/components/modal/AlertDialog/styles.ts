import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../themes';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.overlay3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Metrics.margin.large,
  },
  modal: {
    backgroundColor: Colors.appWhite,
    // borderRadius: Metrics.borderRadius.regular,
    width: Metrics.screenWidth * 0.8,
    paddingHorizontal: Metrics.margin.very_huge,
    paddingVertical: Metrics.margin.very_huge,
    // marginBottom: 50,
    maxHeight: Metrics.screenHeight * 0.7,
  },
  title: {
    marginBottom: Metrics.margin.regular,
  },
  content: {
    marginTop: Metrics.margin.regular,
  },
  buttonNo: {
    flex: 0.5,
    alignItems: 'center',
    marginTop: Metrics.margin.very_huge + 10,
  },
  buttonYes: {
    alignItems: 'center',
    flex: 0.5,
    marginTop: Metrics.margin.very_huge + 10,
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: 'row',
  },
});

export default styles;
