import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {map} from 'lodash';

import styles from './styles';
import {dropDown} from '../../Constants/images';

const DropDown = (props) => {
  const [showDropdown, toggleDropdown] = useState(true);
  return (
    <View style={[styles.dropdownView, {marginBottom: showDropdown ? 0 : 40}]}>
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
      {showDropdown && (
        <View style={styles.dropdownContent}>
          {map(props.dropDownContent, (data) => (
            <TouchableOpacity
              onPress={() => {
                props.method(data);
                toggleDropdown(!showDropdown);
              }}
              style={styles.dropdownBtn}>
              <Text style={styles.dropdownBtnText}>{data}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default DropDown;
