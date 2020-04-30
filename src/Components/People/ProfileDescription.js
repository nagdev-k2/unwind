import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import styles from './styles';
import CommonStyle from '../Common/CommonStyle';
import style from './styles';

const ProfileDescription = (props) => {
  const renderUploads = (item) => (
    <Image source={{uri: item}} style={style.uploadedImage} />
  );
  return (
    <View style={styles.profileDescription}>
      <Text style={[CommonStyle.fBold, CommonStyle.f18, CommonStyle.mTop10]}>
        Name
      </Text>
      <Text>{props.personDetail.name}</Text>
      <Text style={[CommonStyle.fBold, CommonStyle.f18, CommonStyle.mTop10]}>
        Education
      </Text>
      <Text>{props.personDetail.education}</Text>
      <Text style={[CommonStyle.fBold, CommonStyle.f18, CommonStyle.mTop10]}>
        City
      </Text>
      <Text>{props.personDetail.city}</Text>
      <Text style={[CommonStyle.fBold, CommonStyle.f18, CommonStyle.mTop10]}>
        Info
      </Text>
      <Text>{props.personDetail.info}</Text>
      <Text style={[CommonStyle.fBold, CommonStyle.f18, CommonStyle.mTop10]}>
        Uploads
      </Text>
      {props.personDetail.uploads.length > 0 ? (
        <FlatList
          data={props.personDetail.uploads}
          renderItem={({item}) => renderUploads(item)}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      ) : (
        <Text>No Uploads available</Text>
      )}
    </View>
  );
};

export default ProfileDescription;
