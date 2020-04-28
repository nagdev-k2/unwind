import React from 'react';
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
    <Content>{props.children}</Content>
    <Footer />
  </Container>
);

export default Layout;
