import {StyleSheet} from 'react-native';

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
    backgroundColor: 'green',
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  rightBlock: {
    backgroundColor: 'red',
    width: '80%',
    height: 800,
    padding: 10,
  },
  btnText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  verticalBtn: {
  },
});

export default styles;
