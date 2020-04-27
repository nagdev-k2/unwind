import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {hand, share, downArrow, pen} from '../../Constants/images';

const PostView = (props) => {
  return (
    <View key={props.post.id} style={styles.postContainerView}>
      <View style={styles.postHeader}>
        <Image source={{uri: props.post.author.avatar}} style={styles.avatar} />
        <View>
          <Text style={styles.author}>{props.post.author.name}</Text>
          <Text style={styles.description}>{props.post.description}</Text>
        </View>
      </View>
      <View style={styles.post}>
        {props.post.isFile ? (
          <Image source={{uri: props.post.post}} style={styles.postFile} />
        ) : (
          <View style={styles.postNotes}>
            <Text style={styles.notes}>{props.post.post}</Text>
          </View>
        )}
      </View>
      <View style={styles.postActionBtnView}>
        <View style={styles.fBlock}>
          <TouchableOpacity>
            <Image
              tintColor='white'
              source={pen}
              style={styles.postActionBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              tintColor='white'
              source={hand}
              style={styles.postActionBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              tintColor='white'
              source={share}
              style={styles.postActionBtn}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            tintColor='white'
            source={downArrow}
            style={styles.postActionBtn}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostView;
