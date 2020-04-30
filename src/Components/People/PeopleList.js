import React from 'react';
import {Image, TouchableOpacity, FlatList, View, Text} from 'react-native';
import styles from './styles';
import CommonStyle from '../Common/CommonStyle';

const PeopleList = (props) => {
  const renderPeople = (data) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Profile', {data, people: props.people})
        }
        style={[CommonStyle.row, CommonStyle.p10, CommonStyle.alignSelfCenter]}>
        <Image source={{uri: data.avatar}} style={styles.avatar} />
        <View>
          <Text style={CommonStyle.fBold}>{data.name}</Text>
          <Text>{data.education}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {props.people.length > 0 ? (
        <FlatList
          data={props.people}
          renderItem={({item}) => renderPeople(item)}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text> {`No ${props.peopleType} Found`}</Text>
      )}
    </View>
  );
};

export default PeopleList;
