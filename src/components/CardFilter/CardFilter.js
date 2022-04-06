import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Modal } from 'react-native';
import locations from '../../../assets/data/locations';
import ModalSelector from 'react-native-modal-selector';

const CardFilter = () => {
    const [textInput, setTextInput] = useState('');
    const [filterVisible, setFilterVisible] = useState(false);
    let index = 0;
    //const locations = [
     
  //];
    return (
      <View style={styles.root}>
        
      </View>
    )
}

const styles = StyleSheet.create({
  root: {
    width: '98%',
    height: '100%',
  },
})

export default CardFilter;