import React from 'react';
import {ImageBackground, Image, Text, View} from 'react-native';

import Layout from '../Common/Layout';
import styles from './styles';

const ProfileView = (props) => {
  const {data} = props.route.params;
  return (
    <Layout title={data.name} navigation={props.navigation}>
      <ImageBackground source={data.avatar} style={styles.profileBackground}>
        <View>
          <Text>Hi</Text>
        </View>
      </ImageBackground>
    </Layout>
  );
};

export default ProfileView;
