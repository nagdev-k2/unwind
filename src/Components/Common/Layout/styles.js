import {StyleSheet} from 'react-native';
import colors from '../../../Constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
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
  scannerBtn: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
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
    top: 250,
  },
  verticalBtn: {
    transform: [{rotate: '-90deg'}],
  },
  btnText: {
    color: colors.lightGrey,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
