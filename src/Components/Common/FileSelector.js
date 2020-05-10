import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

import styles from './styles';
import {attachment} from '../../Constants/images';

const DropDown = (props) => {
  const openDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      for (const res of results) {
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size,
        );
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  return (
    <View style={styles.dropdownView}>
      <TouchableOpacity onPress={() => openDocument()} style={styles.btnTitle}>
        <Text style={styles.dropdownBtnText}>
          {props.selectedValue ? props.selectedValue : props.title}
        </Text>
        <Image
          source={attachment}
          tintColor="white"
          style={styles.dropDownImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DropDown;
