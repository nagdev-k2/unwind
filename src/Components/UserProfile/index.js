import React, {useState} from 'react';
import {View} from 'react-native';
import {isEqual} from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Layout from '../Common/Layout';
import CommonStyle from '../Common/CommonStyle';
import styles from './styles';
import PostList from './PostList';
import LeftMenu from './LeftMenu';
import ProfileDetails from './ProfileDetails';
import {getProfileDetails} from '../../State/UserProfile/operations';

const UserProfile = (props) => {
  const [viewPost, togglePost] = useState('feeds');
  const {profileDetails} = props;
  return (
    <Layout title="Profile" message={true} navigation={props.navigation}>
      <ProfileDetails
        name={profileDetails.name}
        userAvatar={profileDetails.userAvatar}
        admirers={profileDetails.admirers}
        profileDescription={profileDetails.profileDescription}
      />
      <View style={[CommonStyle.row]}>
        <LeftMenu viewPost={viewPost} togglePost={togglePost} />
        <View style={styles.rightBlock}>
          <PostList
            post={!isEqual(viewPost, 'notes') ? profileDetails.myFeeds : profileDetails.myNotes}
            isNote={isEqual(viewPost, 'notes')}
            avatar={profileDetails.userAvatar}
          />
        </View>
      </View>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  profileDetails: state.profile.profileDetails,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({getProfileDetails}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
