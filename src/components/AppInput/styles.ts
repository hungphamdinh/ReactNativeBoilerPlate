import { StyleSheet } from 'react-native'
import { Metrics, Colors, Styles } from '../../themes'

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderBottomWidth: 1,
    borderColor: Colors.overlay2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    height: 45,
  },
})

export default styles
