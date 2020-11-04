import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../themes'

const styles = StyleSheet.create({
  modal: {
    borderColor: Colors.overlay1,
    borderRadius: Metrics.borderRadius.regular,
    paddingBottom: Metrics.margin.very_huge,
    paddingHorizontal: Metrics.margin.large,
    alignItems: 'center',
    backgroundColor: Colors.appWhite,
  },

  title: {
    marginTop: Metrics.margin.small,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: Metrics.margin.huge,
    marginTop: Metrics.margin.very_huge + 10,
  },
})

export default styles
