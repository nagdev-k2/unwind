import React, {useState} from 'react';
import {
  ImageBackground,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {isEqual} from 'lodash';

import Layout from '../Common/Layout';
import CommonStyle from '../Common/CommonStyle';
import styles from './styles';
import ProfileDescription from './ProfileDescription';
import {message} from '../../Constants/images';

const ProfileView = (props) => {
  const {data, people} = props.route.params;
  const [personDetail, handlePersonDetails] = useState(data);
  const renderPeople = (person) => {
    return (
      <TouchableOpacity
        onPress={() => handlePersonDetails(person)}
        style={[CommonStyle.p10, CommonStyle.alignSelfCenter]}>
        <Image
          source={{uri: person.avatar}}
          style={[
            styles.avatar,
            {opacity: isEqual(personDetail, person) ? 1 : 0.5},
          ]}
        />
        <Text style={[CommonStyle.fBold, {color: 'white'}]}>{person.name}</Text>
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
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View styles={styles.rightBlock}>
          <View style={styles.openMessages}>
            <TouchableOpacity
              style={styles.msgBtn}
              onPress={() => props.navigation.navigate('Messages')}>
              <Image
                source={message}
                style={styles.searchImg}
                tintColor="white"
              />
            </TouchableOpacity>
          </View>
          <ProfileDescription personDetail={personDetail} />
        </View>
      </ImageBackground>
    </Layout>
  );
};

export default ProfileView;
