import React from 'react';
import {Text, View, Image} from 'react-native';

import CommonStyle from '../Common/CommonStyle';
import styles from './styles';

const ProfileDetails = (props) => {
  return (
    <>
      <View style={[styles.userDetails, {height: 150}]}>
        <Image source={{uri: props.userAvatar}} style={styles.profileAvatar} />
        <View style={styles.profileDescription}>
          <Text style={styles.profileName}>{props.name}</Text>
          <View style={styles.userDetails}>
            <View style={styles.rightBorder}>
              <Text style={styles.admirersNo}>{props.admirers.length}</Text>
              <Text style={styles.admirersTitle}>Admiring</Text>
            </View>
            <View style={CommonStyle.alignSelfCenter}>
              <Text style={styles.admirersNo}>{props.admirers.length}</Text>
              <Text style={styles.admirersTitle}>Admirers</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={CommonStyle.p10}>
        <Text style={styles.profileDescriptionTxt}>
          {props.profileDescription}
        </Text>
      </View>
    </>
  );
};

export default ProfileDetails;
