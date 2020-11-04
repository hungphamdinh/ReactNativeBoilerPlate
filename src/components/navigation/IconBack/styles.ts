import { StyleSheet, Platform } from 'react-native'
import { Metrics } from '../../../themes'

const styles = StyleSheet.create({
  container: {
    marginLeft:
      Platform.OS === 'android' ? Metrics.margin.tiny : Metrics.margin.huge,
  },
})

export default styles
