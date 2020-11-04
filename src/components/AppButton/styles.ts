import { StyleSheet } from 'react-native'
import { Metrics, Colors, Styles } from '../../themes'

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: Colors.appGreen,
    ...Styles.center,
  },
})

export default styles
