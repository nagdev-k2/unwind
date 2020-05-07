import React from 'react';
import {Image, View} from 'react-native';
import {Header, Button, Title, Body} from 'native-base';
import {isEqual} from 'lodash';

import {back, showMore, message} from '../../../Constants/images';
import styles from './styles';

const HeaderLayout = (props) => (
  <Header
    style={
      isEqual(props.backgroundColor, 'default')
        ? styles.blackStyle
        : styles.greyStyle
    }>
    <Body style={styles.header}>
      <Button transparent>
        <Image source={back} tintColor="#fff" style={styles.image} />
      </Button>
      <Title>{props.title}</Title>
      {props.message || props.showMore ? (
        <Button transparent>
          {props.message && (
            <Image source={message} tintColor="#fff" style={styles.image} />
          )}
          {props.showMore && (
            <Image source={showMore} tintColor="#fff" style={styles.image} />
          )}
        </Button>
      ) : (
        <View style={styles.image} />
      )}
    </Body>
  </Header>
);

export default HeaderLayout;
