import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import {isEqual} from 'lodash';

import Layout from '../Common/Layout';
import CommonStyle from '../Common/CommonStyle';
import Dummy from '../../Constants/dummy/profile';
import styles from './styles';
import PostList from './PostList';
import LeftMenu from './LeftMenu';
import ProfileDetails from './ProfileDetails';

const UserProfile = (props) => {
  const [viewPost, togglePost] = useState('feeds');
  return (
    <Layout title="Profile" message={true} navigation={props.navigation}>
      <ProfileDetails
        name={Dummy.name}
        userAvatar={Dummy.userAvatar}
        admirers={Dummy.admirers}
        profileDescription={Dummy.profileDescription}
      />
      <View style={[CommonStyle.row]}>
        <LeftMenu viewPost={viewPost} togglePost={togglePost} />
        <View style={styles.rightBlock}>
          <PostList
            post={!isEqual(viewPost, 'notes') ? Dummy.myFeeds : Dummy.myNotes}
            isNote={isEqual(viewPost, 'notes')}
            avatar={Dummy.userAvatar}
          />
        </View>
      </View>
    </Layout>
  );
};

export default UserProfile;
