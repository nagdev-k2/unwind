import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Input} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filter, includes, isEmpty, trim} from 'lodash';

import Layout from '../../Components/Common/Layout';
import styles from './styles';
import PeopleList from './PeopleList';
import CommonStyle from '../Common/CommonStyle';
import {inptSearch} from '../../Constants/images';
import * as PeopleOperations from '../../State/People/operations';

const People = (props) => {
  const {people} = props;
  const [peopleType, togglePeopleType] = useState('Admirers');
  const [search, handleSearch] = useState('');
  let peopleList = [];
  peopleList = filter(people, (data) => {
    if (includes(data.type, peopleType)) {
      if (trim(isEmpty(search))) {
        if (includes(data.name, search)) {
          return data;
        }
      } else {
        return data;
      }
    }
  });
  return (
    <Layout
      title="People"
      showMore={true}
      navigation={props.navigation}
      btnText1="Admirers"
      btnText2="Admiring"
      activeBtn={peopleType}
      btnMethod={(type) => togglePeopleType(type)}
      leftMenu={true}>
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
      <View style={CommonStyle.alignSelfRight}>
        <View style={styles.rightBlock}>
          <PeopleList
            people={peopleList}
            peopleType={peopleType}
            navigation={props.navigation}
          />
        </View>
      </View>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  people: state.people.allPeople,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({PeopleOperations}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(People);
