import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import Layout from '../Common/Layout';
import styles from './styles';
import colors from '../../Constants/colors';
import DropDown from '../Common/dropdown';

const years = ['2024', '2023', '2022', '2021', '2020'];

const EducationalDetails = (props) => {
  const [selectedDegree, handleDegree] = useState('');
  const [selectedUniversity, handleUniversity] = useState('');
  const [selectPassingYear, handlePassingYear] = useState('');
  const {degreesList, universitiesList} = props;
  return (
    <Layout
      title="Educational Details"
      navigation={props.navigation}
      backgroundColor={colors.darkGrey}>
      <View style={styles.container}>
        <DropDown
          selectedValue={selectedDegree}
          title="Degree"
          method={handleDegree}
          dropDownContent={degreesList}
        />
        <DropDown
          selectedValue={selectedUniversity}
          title="College / University"
          method={handleUniversity}
          dropDownContent={universitiesList}
        />
        <DropDown
          selectedValue={selectPassingYear}
          title="Passing Year"
          method={handlePassingYear}
          dropDownContent={years}
        />
      </View>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  degreesList: state.roles.degrees,
  universitiesList: state.roles.universities,
});

export default connect(mapStateToProps)(EducationalDetails);
