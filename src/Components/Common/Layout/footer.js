import React, {useState} from 'react';
import {Image} from 'react-native';
import {Footer, FooterTab, Button} from 'native-base';
import {isEqual, map} from 'lodash';

import {home, search, scanner, menu, user} from '../../../Constants/images';
import styles from './styles';

const footerBtns = [
  {id: 'home', img: home},
  {id: 'search', img: search},
  {id: 'scanner', img: scanner},
  {id: 'menu', img: menu},
  {id: 'user', img: user},
];

const FooterLayout = (props) => {
  const [activeFooter, handleActiveFooter] = useState('home');
  return (
    <Footer>
      <FooterTab style={styles.blackStyle}>
        {map(footerBtns, (data, index) => (
          <Button
            key={`footerbtn-${index}`}
            vertical
            onPress={() =>
              !isEqual(activeFooter, data.id) && handleActiveFooter(data.id)
            }>
            <Image
              source={data.img}
              style={styles.image}
              tintColor={isEqual(activeFooter, data.id) ? 'white' : 'grey'}
            />
          </Button>
        ))}
      </FooterTab>
    </Footer>
  );
};

export default FooterLayout;
