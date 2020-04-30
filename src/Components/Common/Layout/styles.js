import {StyleSheet} from 'react-native';
import colors from '../../../Constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  image: {
    width: 30,
    height: 30,
  },
  blackStyle: {
    backgroundColor: colors.black,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scannerBtn: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
  },
});

export default styles;
