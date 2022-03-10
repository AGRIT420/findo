import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../../components/Card';
import CardStack from '../../components/CardStack';
import pets from '../../../assets/data/pets';
import LinearGradient from 'react-native-linear-gradient';

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
    backgroundColor: 'red',
  },
  pageContainer: {
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
  },
})

export default Browse;