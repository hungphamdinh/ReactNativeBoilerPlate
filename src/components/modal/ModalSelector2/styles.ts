import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../themes'

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
  itemContainer: {
    paddingVertical: Metrics.margin.large,
  },
  childContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.margin.huge,
    paddingLeft: Metrics.margin.huge,
  },
  radioButton: {
    marginRight: Metrics.margin.regular,
    marginTop: 2,
  },
  parentTitle: {},
  title: {
    marginBottom: Metrics.margin.huge,
  },
  divider: {
    position: 'absolute',
    bottom: 0,
  },
  button: {
    marginTop: Metrics.margin.very_huge + 10,
  },
})

export default styles
