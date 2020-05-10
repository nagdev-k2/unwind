import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {map} from 'lodash';

import styles from './styles';
import {dropDown} from '../../Constants/images';
import colors from '../../Constants/colors';

const DropDown = (props) => {
  const [showDropdown, toggleDropdown] = useState(false);
  return (
    <View style={{position: 'relative', alignItems: 'center'}}>
      <View style={styles.dropdownView}>
        <TouchableOpacity
          onPress={() => toggleDropdown(!showDropdown)}
          style={styles.btnTitle}>
          <Text style={styles.dropdownBtnText}>
            {props.selectedValue ? props.selectedValue : props.title}
          </Text>
          <Image
            source={dropDown}
            tintColor="white"
            style={styles.dropDownImage}
          />
        </TouchableOpacity>
      </View>
      {showDropdown && (
        <ScrollView
          style={[
            styles.dropdownContent,
            {height: props.dropDownContent.length * 40},
          ]}>
          {map(props.dropDownContent, (data, index) => (
            <TouchableOpacity
              key={`${index}-${props.title}`}
              onPress={() => {
                props.method(data);
                toggleDropdown(!showDropdown);
              }}
              style={styles.dropdownBtn}>
              <Text
                style={[
                  styles.dropdownBtnText,
                  {color: colors.borderInactiveGrey},
                ]}>
                {data}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default DropDown;
