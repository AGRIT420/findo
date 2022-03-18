import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import CardStack from '../../components/CardStack';
import pets from '../../../assets/data/pets';
import { colors } from '../../theme';

const Browse = () => {
  
  const onSwipeLeft = (pet) => {
    console.log("Swiped left", pet.name);
  };

  const onSwipeRight = (pet) => {
    console.log("Swiped right", pet.name);
  };

  return (
    <View style={styles.root}>
      <View style={styles.pageContainer}>
        <CardStack 
          data={pets} 
          renderItem={({ item }) => <Card pet={item}/>}
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    heigth: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  propertiesBar: {
    width: '100%',
    height: 46,
    paddingHorizontal: 15,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  pageContainer: {
    width: '100%',
    height: '95%',
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    paddingTop: 10,
  },
})

export default Browse;