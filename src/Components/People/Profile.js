import React, {useState} from 'react';
import {
  ImageBackground,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Layout from '../Common/Layout';
import CommonStyle from '../Common/CommonStyle';
import styles from './styles';
import ProfileDescription from './ProfileDescription';

const ProfileView = (props) => {
  const {data, people} = props.route.params;
  const [personDetail, handlePersonDetails] = useState(data);
  const renderPeople = (data) => {
    return (
      <TouchableOpacity
        onPress={() => handlePersonDetails(data)}
        style={[CommonStyle.p10, CommonStyle.alignSelfCenter]}>
        <Image source={{uri: data.avatar}} style={styles.avatar} />
        <Text style={[CommonStyle.fBold, {color: 'white'}]}>{data.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Layout title={personDetail.name} navigation={props.navigation}>
      <ImageBackground
        source={{uri: personDetail.avatar}}
        style={styles.profileBackground}>
        <View style={styles.leftBlock}>
          <FlatList
            data={people}
            renderItem={({item}) => renderPeople(item)}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View styles={styles.rightBlock}>
          <ProfileDescription personDetail={personDetail} />
        </View>
      </ImageBackground>
    </Layout>
  );
};

export default ProfileView;
