import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import Layout from '../Common/Layout';
import styles from './styles';
import colors from '../../Constants/colors';
import FileSelector from '../Common/FileSelector';

const RegistrationDetails = (props) => {
  return (
    <Layout
      title="Registration Details"
      navigation={props.navigation}
      backgroundColor={colors.darkGrey}>
      <View style={styles.container}>
        <FileSelector title="Identity Proof" />
        <FileSelector title="Degree Certificate" />
        <FileSelector title="Professional Certificate" />
      </View>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  degreesList: state.roles.degrees,
  universitiesList: state.roles.universities,
});

export default connect(mapStateToProps)(RegistrationDetails);
