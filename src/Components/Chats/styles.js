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
});

export default styles;
