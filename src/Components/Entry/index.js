import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {isEmpty} from 'lodash';
import {bindActionCreators} from 'redux';

const Entry = (props) => {
  // const {isAuthenticated, user} = props;
  React.useEffect(() => {
    // if (isAuthenticated && !isEmpty(user)) {
    //   setTimeout(() => {
    //     props.navigation.navigate('home');
    //   }, 200);
    // } else {
    //   setTimeout(() => {
    props.navigation.navigate('SignIn');
    //   }, 200);
    // }
  }, []);
  return null;
};

Entry.prototype = {
  navigation: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool.isRequired,
};

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators({getCitySelect, getIntroSlider}, dispatch),
// });

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   user: state.auth.user,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Entry);

export default Entry;
