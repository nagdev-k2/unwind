import React from 'react';
import {Container, Content} from 'native-base';

import Footer from './footer';
import Header from './header';

const Layout = (props) => (
  <Container>
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
