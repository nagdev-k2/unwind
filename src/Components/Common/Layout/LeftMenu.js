import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {isEqual} from 'lodash';

import styles from './styles';
import colors from '../../../Constants/colors';

const LeftMenu = (props) => {
  const {btnText1, btnText2, activeBtn, btnMethod} = props.data;
  return (
    <View style={styles.leftBlock}>
      <TouchableOpacity
        style={styles.verticalBtn}
        onPress={() => !isEqual(activeBtn, btnText1) && btnMethod(btnText1)}>
        <Text
          style={[
            styles.btnText,
            {
              color: isEqual(activeBtn, btnText1)
                ? colors.white
                : colors.borderInactiveGrey,
            },
          ]}>
          {btnText1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.verticalBtn}
        onPress={() => !isEqual(activeBtn, btnText2) && btnMethod(btnText2)}>
        <Text
          style={[
            styles.btnText,
            {
              color: isEqual(activeBtn, btnText2)
                ? colors.white
                : colors.borderInactiveGrey,
            },
          ]}>
          {btnText2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeftMenu;
