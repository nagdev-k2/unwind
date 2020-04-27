import {StyleSheet} from 'react-native';
import colors from '../../Constants/colors';

const styles = StyleSheet.create({
  headerBtnView: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    backgroundColor: colors.black,
  },
  headerBtn: {
    backgroundColor: colors.borderInactiveGrey,
    width: '48%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
  },
  btnText: {
    fontWeight: 'bold',
  },
  postContainerView: {
    padding: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginRight: 20,
  },
  author: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: colors.borderInactiveGrey,
  },
  post: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  postFile: {
    width: '95%',
    height: 300,
    marginTop: 10,
  },
  postNotes: {
    marginTop: 10,
    backgroundColor: colors.notesGrey,
    flex: 1,
    height: '100%',
    width: '95%',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  notes: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
  },
  postActionBtnView: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postActionBtn: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  fBlock: {
    marginLeft: '3%',
    marginTop: 10,
    flexDirection: 'row',
  }
});

export default styles;
