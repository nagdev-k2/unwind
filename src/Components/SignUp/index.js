import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Input, Item, Label} from 'native-base';

import styles from './styles';
import {fArrow, authBackground} from '../../Constants/images';

const SignUp = (props) => {
  const [username, handleUserName] = useState('');
  const [password, handlePassword] = useState('');
  const [email, handleEmail] = useState('');
  const [cpassword, handleCPassword] = useState('');
  const [phNumber, handlePhoneNumber] = useState('');
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
          <Item floatingLabel>
            <Label style={styles.input}>User Name</Label>
            <Input
              style={styles.input}
              value={username}
              onChangeText={(text) => handleUserName(text)}
            />
          </Item>
          <Item floatingLabel style={styles.field}>
            <Label style={styles.input}>E-mail ID</Label>
            <Input
              style={styles.input}
              secureTextEntry
              value={email}
              onChangeText={(text) => handleEmail(text)}
            />
          </Item>
          <Item floatingLabel style={styles.field}>
            <Label style={styles.input}>Mobile No.</Label>
            <Input
              style={styles.input}
              secureTextEntry
              value={phNumber}
              onChangeText={(text) => handlePhoneNumber(text)}
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
          <Item floatingLabel style={styles.field}>
            <Label style={styles.input}>Confirm Password</Label>
            <Input
              style={styles.input}
              secureTextEntry
              value={cpassword}
              onChangeText={(text) => handleCPassword(text)}
            />
          </Item>
        </View>
        <View style={styles.footerBtn}>
          <View style={[styles.btn, styles.rightCurve]}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignIn')}>
              <Text style={styles.btnText}>SIGNIN</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.nextBtn}>
            <Image source={fArrow} style={styles.fArrow} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default SignUp;
