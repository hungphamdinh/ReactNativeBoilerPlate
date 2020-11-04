import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../themes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 50,
  },
  itemContainer: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    marginBottom: Metrics.margin.very_huge,
  },
  divider: {
    position: 'absolute',
    bottom: 0,
  },
  button: {
    marginTop: Metrics.margin.very_huge + 10,
  },
  radioButton: {
    marginRight: Metrics.margin.regular,
    marginTop: 2,
  },
})

export default styles
