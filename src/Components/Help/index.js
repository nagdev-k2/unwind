import React from 'react';
import {Text} from 'react-native';
import {Container, Button} from 'native-base';

import styles from './styles';

const Help = (props) => (
  <Container style={styles.layout}>
    <Button
      block
      transparent
      onPress={() => props.navigation.navigate('EducationalDetails')}>
      <Text>Educational Details</Text>
    </Button>
    <Button
      block
      transparent
      onPress={() => props.navigation.navigate('RegistrationDetails')}>
      <Text>Registration Details</Text>
    </Button>
  </Container>
);

export default Help;
