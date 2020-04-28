import React from 'react';
import {Text, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import {Content} from 'native-base';

import Layout from '../Common/Layout';
import CommonStyle from '../Common/CommonStyle';
import Dummy from '../../Constants/dummy/profile';
import styles from './styles';

const UserProfile = (props) => {
  return (
    <Layout title="Profile" message={true}>
      <ScrollView>
        <View style={styles.userDetails}>
          <Image
            source={{uri: Dummy.userAvatar}}
            style={styles.profileAvatar}
          />
          <View style={styles.profileDescription}>
            <Text style={styles.profileName}>{Dummy.name}</Text>
            <View style={styles.userDetails}>
              <View style={styles.rightBorder}>
                <Text style={styles.admirersNo}>{Dummy.admirers.length}</Text>
                <Text style={styles.admirersTitle}>Admiring</Text>
              </View>
              <View style={CommonStyle.alignSelfCenter}>
                <Text style={styles.admirersNo}>{Dummy.admirers.length}</Text>
                <Text style={styles.admirersTitle}>Admirers</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={CommonStyle.p10}>
          <Text style={styles.profileDescriptionTxt}>
            {Dummy.profileDescription}
          </Text>
        </View>
        <View style={[CommonStyle.row]}>
          <View style={styles.leftBlock}>
            <TouchableOpacity style={styles.verticalBtn}>
              <Text style={styles.btnText}> MY FEEDS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verticalBtn}>
              <Text style={styles.btnText}> MY NOTES</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightBlock}>
            <Text>Posts</Text>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default UserProfile;
