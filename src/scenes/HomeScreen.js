import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CardStack from '../components/CardStack';
import pets from '../../assets/data/pets';

const HomeScreen = () => {
  
  const onSwipeLeft = (pet) => {
    console.log("Swiped left", pet.name);
  };

  const onSwipeRight = (pet) => {
    console.log("Swiped right", pet.name);
  };

  return (
      <View style={styles.pageContainer}>
        <CardStack 
          data={pets} 
          renderItem={({ item }) => <Card pet={item}/>}
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight} 
        />
      </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
  },
})

export default HomeScreen;