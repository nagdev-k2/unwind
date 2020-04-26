import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import {Picker} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import {isEqual, map} from 'lodash';

import AuthHeader from '../Common/AuthHeader';
import styles from './styles';
import {fArrow, rbActive, rbInactive} from '../../Constants/images';

const SignIn = (props) => {
  const [gender, selectGender] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [role, handleRole] = useState('');

  const genderOption = ['Male', 'Female', 'Other'];
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <AuthHeader />
        <View style={styles.userFields}>
          <View style={styles.genderView}>
            {map(genderOption, (data, index) => (
              <TouchableOpacity
                key={`gender-${index}`}
                style={styles.radioBtn}
                onPress={() => selectGender(data)}>
                <Image
                  tintColor="#fff"
                  source={isEqual(gender, data) ? rbActive : rbInactive}
                  style={styles.radioBtnImg}
                />
                <Text style={styles.input}>{data}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={styles.datePickerBtn}
            onPress={() => setShow(true)}>
            <Text style={styles.input}>Birth Date</Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <View style={styles.rolePickerView}>
            <Picker
              mode="dropdown"
              style={styles.rolePicker}
              selectedValue={role}
              placeholder="Status"
              onValueChange={(value) => handleRole(value)}>
              <Picker.Item label="Professional" value="key0" />
              <Picker.Item label="Guide" value="key1" />
              <Picker.Item label="Volunteer" value="key2" />
              <Picker.Item label="User" value="key3" />
            </Picker>
          </View>
        </View>
        <View style={styles.footerBtn}>
          <View />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('OTP')}
            style={styles.nextBtn}>
            <Image source={fArrow} style={styles.fArrow} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default SignIn;
