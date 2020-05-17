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
    height: Dimensions.get('window').height - 100,
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  profileDescription: {
    width: '95%',
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    padding: 10,
    height: 350,
  },
  personLeftBlock: {
    width: '20%',
  },
  uploadedImage: {
    marginTop: 10,
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  inActive: {
    opacity: 0.5,
  },
  msgBtn: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openMessages: {
    width: '80%',
    alignItems: 'flex-end',
    bottom: -20,
    zIndex: 9,
  },
});

export default styles;
