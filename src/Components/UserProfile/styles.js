import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../Constants/colors';

const styles = StyleSheet.create({
  profileAvatar: {
    height: 150,
    width: '50%',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileName: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  userDetails: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  profileDescription: {
    alignItems: 'center',
    width: '50%',
    justifyContent: 'center',
  },
  admirersNo: {
    fontSize: 25,
    color: colors.borderInactiveGrey,
  },
  admirersTitle: {
    fontSize: 15,
    color: colors.borderInactiveGrey,
  },
  rightBorder: {
    borderRightWidth: 1,
    borderColor: colors.borderInactiveGrey,
    paddingRight: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  profileDescriptionTxt: {
    color: colors.white,
    fontSize: 14,
  },
  leftBlock: {
    width: '20%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: 300,
    maxHeight: 300,
    position: 'absolute',
    bottom: 0,
    left: 0,
    top: 0,
  },
  rightBlock: {
    width: '80%',
    padding: 10,
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
  feedImage: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    resizeMode: 'contain',
  },
  notesView: {
    height: 100,
    backgroundColor: colors.darkGrey,
    margin: 10,
    width: '40%',
    marginLeft: 10,
  },
});

export default styles;
