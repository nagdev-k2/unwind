import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import {fArrow} from '../../Constants/images';
import OTPTextField from './otpTextField';
import AuthHeader from '../Common/AuthHeader';
import {getOtpOperation} from '../../State/Auth/operations';

const OTP = (props) => {
  const [otp, setOtp] = useState('');
  const userDetails = {};
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <AuthHeader />
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
            onPress={() => {
              props.actions.getOtpOperation({...userDetails, otp});
              props.navigation.navigate('UserHome');
            }}
            style={styles.nextBtn}>
            <Image source={fArrow} style={styles.fArrow} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

OTP.propTypes = {
  actions: PropTypes.shape({
    signUpOperation: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({getOtpOperation}, dispatch),
});

export default connect(null, mapDispatchToProps)(OTP);
