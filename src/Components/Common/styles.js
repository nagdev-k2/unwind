import {StyleSheet} from 'react-native';

import colors from '../../Constants/colors';

const style = StyleSheet.create({
  imageContainer: {
    flex: 0,
    zIndex: 0,
  },
  btn: {
    backgroundColor: colors.white,
    width: '40%',
    height: 40,
    justifyContent: 'center',
    padding: 10,
  },
  leftCurve: {
    alignItems: 'flex-start',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    paddingLeft: 30,
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
  dropdownView: {
    backgroundColor: colors.lightGrey,
    marginBottom: 0,
  },
  btnTitle: {
    flexDirection: 'row',
    padding: 5,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownBtnText: {
    color: colors.white,
    fontSize: 15,
  },
  dropDownImage: {
    width: 30,
    height: 30,
  },
  dropdownContent: {
    borderWidth: 1,
    borderColor: colors.white,
  },
  dropdownBtn: {
    borderBottomWidth: 1,
    borderColor: colors.white,
    height: 40,
  },
});

export default style;
