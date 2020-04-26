import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Input, Item, Label} from 'native-base';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import {fArrow} from '../../Constants/images';
import AuthHeader from '../Common/AuthHeader';
import {signInOperation} from '../../State/Auth/operations';

const SignIn = (props) => {
  const [username, handleUserName] = useState('');
  const [password, handlePassword] = useState('');
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <AuthHeader />
        <View style={styles.userFields}>
          <Item floatingLabel>
            <Label style={styles.input}>User Name</Label>
            <Input
              style={styles.input}
              value={username}
              onChangeText={(text) => handleUserName(text)}
            />
          </Item>
          <Item floatingLabel style={styles.field}>
            <Label style={styles.input}>Password</Label>
            <Input
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={(text) => handlePassword(text)}
            />
          </Item>
        </View>
        <View style={styles.footerBtn}>
          <View style={[styles.btn, styles.rightCurve]}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={styles.btnText}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              // props.actions.signInOperation({username, password});
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

SignIn.propTypes = {
  actions: PropTypes.shape({
    signInOperation: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({signInOperation}, dispatch),
});

export default connect(null, mapDispatchToProps)(SignIn);
