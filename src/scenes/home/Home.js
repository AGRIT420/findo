import React from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Browse from '../browse';
import { colors } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = ({ navigation }) => {
  
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
        <Icon
          name="sliders-h" 
          size={20} 
          color={colors.black}/>
      </View>
        <Browse
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
        />
      </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
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
    height: 50,
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