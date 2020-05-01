import React from 'react';
import {Text} from 'react-native';

import Layout from '../Common/Layout';

const Scanner = (props) => (
  <Layout title="Scanner" navigation={props.navigation}>
    <Text style={{color: 'white'}}> Scanner Page</Text>
  </Layout>
);

export default Scanner;
