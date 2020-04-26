import React from 'react';
import {View, Image, Text} from 'react-native';

import {authBackground} from '../../Constants/images';
import styles from './styles';

const Header = (props) => (
  <>
    <View style={styles.imageContainer}>
      <Image source={authBackground} style={styles.background} />
      <View style={styles.headerView}>
        <View style={styles.logo}>
          <Text>LOGO</Text>
        </View>
        <View style={[styles.btn, styles.leftCurve]}>
          <Text style={styles.btnText}>SIGNIN</Text>
        </View>
      </View>
    </View>
    <View style={styles.lightGreyBkg} />
  </>
);

export default Header;
