import {StyleSheet} from 'react-native';

import colors from '../../Constants/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey,
  },
  userFields: {
    flex: 1,
    padding: 30,
    paddingTop: '30%',
    backgroundColor: colors.darkGrey,
    borderTopLeftRadius: 50,
    top: -50,
  },
  field: {
    marginTop: 30,
  },
  btn: {
    backgroundColor: colors.white,
    width: '40%',
    height: 40,
    justifyContent: 'center',
    padding: 10,
  },
  nextBtn: {
    backgroundColor: colors.white,
    borderRadius: 50,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightCurve: {
    alignItems: 'flex-end',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    paddingRight: 30,
  },
  input: {
    color: colors.white,
  },
  footerBtn: {
    flexDirection: 'row',
    marginRight: 20,
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 30,
    alignItems: 'center',
  },
  fArrow: {
    width: 50,
    height: 50,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default style;
