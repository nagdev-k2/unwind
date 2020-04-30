import {StyleSheet} from 'react-native';
import colors from '../../Constants/colors';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  searchImg: {
    width: 30,
    height: 30,
  },
  searchInput: {
    backgroundColor: colors.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  typeBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.lightGrey,
    opacity: 0.5,
  },
  active: {
    width: 60,
    height: 60,
    opacity: 1,
  }
});

export default styles;
