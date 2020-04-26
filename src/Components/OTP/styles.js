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
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 0,
    zIndex: 0,
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
  leftCurve: {
    alignItems: 'flex-start',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    paddingLeft: 30,
  },
  input: {
    color: colors.white,
  },
  footerBtn: {
    flexDirection: 'row',
    marginRight: 20,
    justifyContent: 'space-between',
    marginBottom: 30,
    alignItems: 'center',
  },
  fArrow: {
    width: 50,
    height: 50,
  },
  background: {
    width: '100%',
    height: 200,
    flex: 1,
    borderBottomRightRadius: 50,
  },
  logo: {
    backgroundColor: colors.white,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView: {
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'space-between',
    paddingLeft: 20,
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  lightGreyBkg: {
    backgroundColor: colors.lightGrey,
    height: 50,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpTextInput: {
    height: 50,
    width: 50,
    borderRightWidth: 1,
    fontSize: 22,
    fontWeight: '500',
    color: colors.borderInactiveGrey,
    borderColor: colors.borderInactiveGrey,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: '5.5%',
  },
  otpField: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: colors.borderInactiveGrey,
  },
  otpTextView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  otpText: {
    color: colors.white,
  },
  resendOtpBtn: {
    marginTop: 10,
    width: '60%',
    alignItems: 'flex-end',
  },
  resendOtpBtnText: {
    color: colors.borderInactiveGrey,
    borderBottomWidth: 2,
    borderColor: colors.borderInactiveGrey,
  },
});

export default style;
