import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import locations from '../../../assets/data/locations';
import ModalSelector from 'react-native-modal-selector';

const CardFilter = () => {
    const [textInput, setTextInput] = useState('');
    let index = 0;
    //const locations = [
     
  //];
    return (
      <View style={styles.root}>
          <ModalSelector
                    data={locations}
                    initValue="Wybierz miasto"
                    supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ setTextInput({textInput:option.name})}}>

                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
                        editable={false}
                        placeholder="Wybierz miasto"
                        value={textInput} />

                </ModalSelector>
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