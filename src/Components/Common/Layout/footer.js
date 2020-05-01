import React from 'react';
import {Image, View} from 'react-native';
import {Footer, FooterTab, Button} from 'native-base';
import {isEqual, map} from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import {home, search, scanner, menu, user} from '../../../Constants/images';
import styles from './styles';
import {setActiveFooter} from '../../../State/Layout/actions';

const footerBtns = [
  {id: 'home', img: home, screen: 'UserHome'},
  {id: 'discover', img: search, screen: 'Discover'},
  {id: 'scanner', img: scanner, screen: 'Scanner'},
  {id: 'menu', img: menu, screen: 'People'},
  {id: 'user', img: user, screen: 'UserProfile'},
];

const FooterLayout = (props) => {
  const {active, actions} = props;
  return (
    <Footer>
      <FooterTab style={styles.blackStyle}>
        {map(footerBtns, (data, index) => (
          <Button
            disabled={isEqual(active, data.id)}
            style={{backgroundColor: 'black'}}
            key={`footerbtn-${index}`}
            vertical
            onPress={() => {
              actions.setActiveFooter(data.id);
              props.navigation.navigate(data.screen);
            }}>
            {isEqual('scanner', data.id) ? (
              <View style={styles.scannerBtn}>
                <Image
                  source={data.img}
                  style={styles.image}
                  tintColor={isEqual(active, data.id) ? 'black' : 'grey'}
                />
              </View>
            ) : (
              <Image
                source={data.img}
                style={styles.image}
                tintColor={isEqual(active, data.id) ? 'white' : 'grey'}
              />
            )}
          </Button>
        ))}
      </FooterTab>
    </Footer>
  );
};

FooterLayout.propTypes = {
  active: PropTypes.string,
  actions: PropTypes.shape({
    setActiveFooter: PropTypes.func.isRequired,
  }).isRequired,
};

FooterLayout.defaultProps = {
  active: 'home',
};

const mapStateToProps = (state) => ({
  active: state.layout.activeFooter,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({setActiveFooter}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterLayout);
