import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'native-base';

import Layout from '../Common/Layout';
import styles from './styles';

const RegistrationDetails = (props) => (
  <Layout title="Registration Details" navigation={props.navigation}>
    <Button block transparent style={styles.btnTitle}>
      <Text>Degree</Text>
    </Button>
  </Layout>
);

export default RegistrationDetails;
