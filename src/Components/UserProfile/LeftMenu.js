import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {isEqual} from 'lodash';

import styles from './styles';
import colors from '../../Constants/colors';

const LeftMenu = (props) => {
  const {viewPost, togglePost} = props;
  return (
    <View style={styles.leftBlock}>
      <TouchableOpacity
        style={styles.verticalBtn}
        onPress={() => {
          !isEqual(viewPost, 'feeds') && togglePost('feeds');
        }}>
        <Text
          style={[
            styles.btnText,
            {
              color: isEqual(viewPost, 'feeds')
                ? colors.white
                : colors.borderInactiveGrey,
            },
          ]}>
          MY FEEDS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.verticalBtn}
        onPress={() => {
          !isEqual(viewPost, 'notes') && togglePost('notes');
        }}>
        <Text
          style={[
            styles.btnText,
            {
              color: isEqual(viewPost, 'notes')
                ? colors.white
                : colors.borderInactiveGrey,
            },
          ]}>
          MY NOTES
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeftMenu;
