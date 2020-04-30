import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../Constants/colors';

const styles = StyleSheet.create({
  leftBlock: {
    width: '20%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: 300,
    maxHeight: 300,
  },
  rightBlock: {
    width: '80%',
    padding: 10,
    backgroundColor: colors.white,
    height: Dimensions.get('window').height,
  },
  btnText: {
    color: colors.lightGrey,
    fontWeight: 'bold',
    fontSize: 16,
  },
  verticalBtn: {
    transform: [{rotate: '-90deg'}],
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
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
  },
  profileBackground: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
