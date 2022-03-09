import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './src/scenes/HomeScreen';
import MessagesScreen from './src/scenes/MessagesScreen';

const App = () => {
  
  const onSwipeLeft = (pet) => {
    console.log("Swiped left", pet.name);
  };

  const onSwipeRight = (pet) => {
    console.log("Swiped right", pet.name);
  };

  return (
      <View style={styles.pageContainer}>
        <HomeScreen/>
      </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
  },
})

export default App;