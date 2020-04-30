import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {isEqual} from 'lodash';

import styles from './styles';
import colors from '../../Constants/colors';

const LeftMenu = (props) => {
  const {togglePeopleType, peopleType} = props;
  return (
    <View style={styles.leftBlock}>
      <TouchableOpacity
        style={styles.verticalBtn}
        onPress={() => {
          !isEqual(peopleType, 'Admirers') && togglePeopleType('Admirers');
        }}>
        <Text
          style={[
            styles.btnText,
            {
              color: isEqual(peopleType, 'Admirers')
                ? colors.white
                : colors.borderInactiveGrey,
            },
          ]}>
          ADMIRERS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.verticalBtn}
        onPress={() => {
          !isEqual(peopleType, 'Admiring') && togglePeopleType('Admiring');
        }}>
        <Text
          style={[
            styles.btnText,
            {
              color: isEqual(peopleType, 'Admiring')
                ? colors.white
                : colors.borderInactiveGrey,
            },
          ]}>
          ADMIRING
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeftMenu;
