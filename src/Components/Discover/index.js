import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import GridList from 'react-native-grid-list';
import {Input, Text} from 'native-base';
import {map, isEqual} from 'lodash';

import Layout from '../Common/Layout';
import styles from './styles';
import Dummy from '../../Constants//dummy/discover';
import {inptSearch} from '../../Constants/images';
import CommonStyle from '../Common/CommonStyle';

const discoverType = [
  {
    name: 'Btn 1',
    url:
      'https://media.wired.com/photos/5c9040ee4950d24718d6da99/master/w_2560%2Cc_limit/shoppingcart-1066110386.jpg',
  },
  {
    name: 'Btn 2',
    url:
      'https://s3.amazonaws.com/pixpa.com/com/articles/1571042487-412348-model-1jpg.png',
  },
  {
    name: 'Shopping',
    url:
      'https://cdn2.careeraddict.com/uploads/article/54807/young-woman-shopping-bags.jpg',
  },
  {
    name: 'Btn 3',
    url:
      'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/41416/56656/1564813220431_204655CB-8EB5-46AF-929D-F4BC0388684A__54652.1565412616.jpg',
  },
  {
    name: 'Btn 4',
    url:
      'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg',
  },
];

const Discover = () => {
  const [search, handleSearch] = useState('');
  const [discType, handleDiscType] = useState('Shopping');
  const renderItem = ({item, index}) => (
    <View style={[CommonStyle.p5]}>
      <Image style={styles.image} source={item.thumbnail} />
    </View>
  );
  let dummyArray = Dummy;
  let splitArray = [];
  for (let i = 0; dummyArray.length > 0; i++) {
    const fArray = dummyArray.splice(0, Math.floor(Math.random() * Math.floor(4)) + 1)
    splitArray.push(fArray);
  }
  console.log(Dummy)
  return (
    <Layout title="Discover" message={true}>
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
      <View
        style={[
          CommonStyle.row,
          CommonStyle.pH10,
          CommonStyle.mTop10,
          CommonStyle.jContentCenter,
          CommonStyle.alignSelfCenter,
        ]}>
        {map(discoverType, (data, index) => (
          <TouchableOpacity
            key={`disc-${index}`}
            style={[CommonStyle.mH10, CommonStyle.alignSelfCenter]}
            onPress={(text) => handleDiscType(data.name)}>
            <Image source={{uri: data.url}} style={[styles.typeBtn, isEqual(data.name, discType) && styles.active]} />
            <Text style={{color: 'white'}}>{data.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{paddingHorizontal: 20 , marginTop: 20}}>
        {
          map(splitArray, (data, index) => (
            <View key={`grid-${index}`}>
              <GridList
                showSeparator={false}
                data={data}
                numColumns={3}
                renderItem={renderItem}
              />
            </View>
          ))
        }
      </View>
    </Layout>
  );
};

export default Discover;
