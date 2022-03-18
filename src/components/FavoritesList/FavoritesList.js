import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, useWindowDimensions, ScrollView } from 'react-native';
import { colors } from '../../theme';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

const FavoritesList = (props, { navigation }) => {
  const { data } = props;

  return (
      <View style={styles.root}>
          
      </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    flex: 1,
    backgroundColor: colors.white,
  },
  
})

export default FavoritesList;