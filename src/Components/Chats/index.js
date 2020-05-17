import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Input} from 'native-base';

import Layout from '../Common/Layout';
import styles from './styles';
import {inptSearch} from '../../Constants/images';

const Chats = (props) => {
  const [search, handleSearch] = useState('');
  // let dummyArray = Dummy;
  // let splitArray = [];
  // for (let i = 0; dummyArray.length > 0; i++) {
  //   const fArray = dummyArray.splice(
  //     0,
  //     Math.floor(Math.random() * Math.floor(4)) + 1,
  //   );
  //   splitArray.push(fArray);
  // }
  return (
    <Layout title="Chats" navigation={props.navigation}>
      <View style={styles.searchInput}>
        <Input value={search} onChangeText={(text) => handleSearch(text)} />
        <TouchableOpacity>
          <Image
            source={inptSearch}
            style={styles.searchImg}
            tintColor="white"
          />
        </TouchableOpacity>
      </View>
    </Layout>
);}

export default Chats;
