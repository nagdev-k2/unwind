import React from 'react';
import {View, VirtualizedList, Text, TouchableOpacity} from 'react-native';

import Layout from '../Common/Layout';
import styles from './styles';
import CommonStyle from '../Common/CommonStyle';
import DummyPosts from '../../Constants/dummy/home';
import PostView from './PostView';

const UserHome = (props) => {
  const getItem = (data, index) => {
    return {
      id: `item-${index}`,
      ...data[index],
    };
  };

  const getItemCount = (data) => {
    return data.length;
  };
  return (
    <Layout title="Home" message={true} navigation={props.navigation}>
      <View style={styles.headerBtnView}>
        <TouchableOpacity style={[styles.headerBtn, CommonStyle.mR10]}>
          <Text style={styles.btnText}>ANONYMOUS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBtn}>
          <Text style={styles.btnText}>ALL</Text>
        </TouchableOpacity>
      </View>
      <VirtualizedList
        data={DummyPosts}
        initialNumToRender={0}
        renderItem={({item}) => <PostView post={item} />}
        keyExtractor={(item) => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </Layout>
  );
};

export default UserHome;
