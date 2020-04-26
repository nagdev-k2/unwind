import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Input, Item, Label} from 'native-base';

import styles from './styles';
import {fArrow, authBackground} from '../../Constants/images';
import OTPTextField from './otpTextField';

const OTP = (props) => {
  const [otp, setOtp] = useState('');
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={authBackground} style={styles.background} />
          <View style={styles.headerView}>
            <View style={styles.logo}>
              <Text>LOGO</Text>
            </View>
            <View style={[styles.btn, styles.leftCurve]}>
              <Text style={styles.btnText}>SIGNUP</Text>
            </View>
          </View>
        </View>
        <View style={styles.lightGreyBkg} />
        <View style={styles.userFields}>
          <View style={styles.otpTextView}>
            <Text style={styles.otpText}>4 Digit OTP has been sent to</Text>
            <Text style={styles.otpText}>+91-1234567890</Text>
          </View>
          <View style={styles.otpField}>
            <OTPTextField
              handleTextChange={(text) => setOtp(text)}
              inputCount={4}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity style={styles.resendOtpBtn}>
            <Text style={styles.resendOtpBtnText}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerBtn}>
          <View />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('UserHome')}
            style={styles.nextBtn}>
            <Image source={fArrow} style={styles.fArrow} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default OTP;
