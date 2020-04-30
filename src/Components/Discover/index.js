import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import GridList from 'react-native-grid-list';

import Layout from '../Common/Layout';

const items = [
  {thumbnail: {uri: 'https://lorempixel.com/200/200/animals'}},
  {thumbnail: {uri: 'https://lorempixel.com/200/200/city'}},
  {thumbnail: {uri: 'https://lorempixel.com/200/200/nature'}},
  {thumbnail: {uri: 'https://lorempixel.com/200/200/cats'}},
];

const Discover = () => {
  const renderItem = ({item, index}) => (
    <Image style={styles.image} source={item.thumbnail} />
  );

  return (
    <Layout title="Discover" message={true}>
      <GridList
        showSeparator
        data={items}
        numColumns={3}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default Discover;
