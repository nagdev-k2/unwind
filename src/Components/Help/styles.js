import {StyleSheet} from 'react-native';

import colors from '../../Constants/colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  layout: {
    backgroundColor: colors.lightGrey,
  },
  btnTitle: {
    borderBottomWidth: 1,
    borderColor: colors.white,
    paddingBottom: 10,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  btnText: {
    color: colors.white,
  },
});

export default styles;
