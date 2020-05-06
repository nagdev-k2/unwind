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
  const [viewPost, togglePost] = useState('MY FEEDS');
  const {profileDetails} = props;
  return (
    <Layout
      title="Profile"
      message={true}
      navigation={props.navigation}
      btnText1="MY FEEDS"
      btnText2="MY NOTES"
      activeBtn={viewPost}
      btnMethod={(type) => togglePost(type)}
      leftMenu={true}>
      <ProfileDetails
        name={profileDetails.name}
        userAvatar={profileDetails.userAvatar}
        admirers={profileDetails.admirers}
        navigation={props.navigation}
        profileDescription={profileDetails.profileDescription}
      />
      <View style={CommonStyle.alignSelfRight}>
        <View style={styles.rightBlock}>
          <PostList
            post={
              !isEqual(viewPost, 'MY NOTES')
                ? profileDetails.myFeeds
                : profileDetails.myNotes
            }
            isNote={isEqual(viewPost, 'MY NOTES')}
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
