import React, { useState } from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Picker } from 'react-native';
import Card from '../../components/Card';
import CardStack from '../../components/CardStack';
import pets from '../../../assets/data/pets';
import locations from '../../../assets/data/locations';
import { colors } from '../../theme';
import ModalFilterPicker from 'react-native-modal-filter-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardFilter from '../../components/CardFilter/CardFilter';

const Home = ({ navigation }) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const onSwipeLeft = (pet) => {
    console.log("Swiped left", pet.name);
  };

  const onSwipeRight = (pet) => {
    console.log("Swiped right", pet.name);
  };

  return (
      <SafeAreaView style={styles.pageContainer}>
        <StatusBar animated={true} backgroundColor={colors.black}/>
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={
            () => navigation.navigate('ProfileScreen')}>
            <Icon
              name="user-circle" 
              size={22} 
              color={colors.black}/>
          </TouchableOpacity>
          <Text style={styles.title}>findo</Text>
          <TouchableOpacity onPress={() => setPickerVisible(true)}>
            <Icon
              name="sliders-h" 
              size={20} 
              color={colors.black}/>
          </TouchableOpacity>

          { pickerVisible && 
            <CardFilter/>
          }
        </View>
        <View style={styles.cardContainer}>
          <CardStack 
            data={pets} 
            renderItem={({ item }) => <Card pet={item}/>}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}/>
        </View>
      </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    backgroundColor: colors.white,
  },
  cardContainer: {
    width: '100%',
    paddingTop: '2%',
    height: '93%',
    justifyContent: 'center', 
    alignItems: 'flex-start', 

  },
  title: {
    fontFamily: 'Oxygen-Regular',
    fontSize: 28,
    color: colors.blue,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.white,
    overflow: 'hidden',
  },
  titleBar: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingVertical: 2,
    //borderBottomWidth: 1,
    //borderColor: colors.ultraLightGray,
  },
})

export default Home;