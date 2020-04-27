import {StyleSheet} from 'react-native';
import colors from '../../../Constants/colors';

const styles = StyleSheet.create({
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
});

export default styles;
