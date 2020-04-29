import React from 'react';
import {Image, Text, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles';
import CommonStyle from '../Common/CommonStyle';

const PostView = (props) => {
  console.log('------', props);
  return (
  <TouchableOpacity
    style={[styles.notesView, {padding: props.isNote ? 10 : 0}]}>
    {props.isNote ? (
      <Text style={[styles.profileDescriptionTxt, CommonStyle.center]}>
        {props.post.item}
      </Text>
    ) : (
      <Image
        source={{uri: props.post.item}}
        style={{height: 100, width: '100%'}}
      />
    )}
  </TouchableOpacity>
);}

const PostList = (props) => {
  return (
    <FlatList
      style={{width: '100%'}}
      data={props.post}
      initialNumToRender={0}
      renderItem={({item, index}) => (
        <PostView
          key={`${Math.random()}-${index}`}
          avatar={props.avatar}
          isNote={props.isNote}
          post={{item: item}}
        />
      )}
      keyExtractor={(item) => item.key}
      numColumns={2}
    />
  );
};

export default PostList;
