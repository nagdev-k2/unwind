import React from 'react';
import {View, VirtualizedList, Text, TouchableOpacity} from 'react-native';

import Layout from '../Common/Layout';
import styles from './styles';
import CommonStyle from '../Common/CommonStyle';
import PostView from './PostView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as UserHomeOperations from '../../State/UserHome/operations';

const UserHome = (props) => {
  const {allPosts} = props;
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
        data={allPosts}
        initialNumToRender={0}
        renderItem={({item}) => <PostView post={item} />}
        keyExtractor={(item) => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  allPosts: state.userHome.allPosts,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({UserHomeOperations}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
