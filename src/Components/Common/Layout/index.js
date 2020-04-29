import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Content} from 'native-base';

import Footer from './footer';
import Header from './header';
import styles from './styles';

const Layout = (props) => (
  <Container style={styles.container}>
    <Header
      title={props.title}
      message={props.message}
      showMore={props.showMore}
    />
    <StatusBar backgroundColor="black" barStyle="light-content" />
    <Content>{props.children}</Content>
    <Footer navigation={props.navigation} />
  </Container>
);

export default Layout;
