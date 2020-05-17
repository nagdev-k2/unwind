import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Content} from 'native-base';

import Footer from './footer';
import Header from './header';
import styles from './styles';
import LeftMenu from './LeftMenu';

const Layout = (props) => (
  <Container
    style={[
      styles.container,
      props.backgroundColor && {backgroundColor: props.backgroundColor},
    ]}>
    <Header
      navigation={props.navigation}
      title={props.title}
      message={props.message}
      showMore={props.showMore}
      backgroundColor={
        props.backgroundColor ? props.backgroundColor : 'default'
      }
    />
    <StatusBar
      backgroundColor={props.backgroundColor ? props.backgroundColor : 'black'}
      barStyle="light-content"
    />
    <Content>{props.children}</Content>
    {props.leftMenu && <LeftMenu data={props} />}
    <Footer navigation={props.navigation} />
  </Container>
);

export default Layout;
