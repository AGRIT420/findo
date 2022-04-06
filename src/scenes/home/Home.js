import React, { useState } from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import Card from '../../components/Card';
import CardStack from '../../components/CardStack';
import pets from '../../../assets/data/pets';
import breeds from '../../../assets/data/breeds';
import locations from '../../../assets/data/locations';
import { colors } from '../../theme';
import ModalFilterPicker from 'react-native-modal-filter-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import CardFilter from '../../components/CardFilter/CardFilter';
import { Picker } from '@react-native-picker/picker';

const Home = ({ navigation }) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('any');
  const [selectedLocation, setSelectedLocation] = useState('any');
  const [activeBreedFilter, setActiveBreedFilter] = useState('any');
  const [activeLocationFilter, setActiveLocationFilter] = useState('any');

  const onSwipeLeft = (pet) => {
    console.log("Swiped left", pet.name);
  };

  const onSwipeRight = (pet) => {
    console.log("Swiped right", pet.name);
  };

  const setFilters = (breed, location) => {
    setActiveBreedFilter(breed);
    setActiveLocationFilter(location);
    console.log('Breed: ', activeBreedFilter, ' Location: ', activeLocationFilter);
  }

  const setData = () => {
    petsFiltered = pets;
    petsFiltered = petsFiltered.filter(function(pet) {
      if(activeBreedFilter == 'any' && activeLocationFilter == 'any') {
        return pet;
      }
      else if(activeBreedFilter != 'any' && activeLocationFilter == 'any') {
        return pet.breed == activeBreedFilter;
      }
      else if(activeBreedFilter == 'any' && activeLocationFilter != 'any') {
        return pet.location == activeLocationFilter;
      }
      else if(activeBreedFilter != 'any' && activeLocationFilter != 'any') {
        return pet.breed == activeBreedFilter && pet.location == activeLocationFilter;
      }}).map(function({key, name, image, description, detailedDescription, address, location, breed, age, since, healthCondition}) {
        return {key, name, image, description, detailedDescription, address, location, breed, age, since, healthCondition};
      });
      return petsFiltered;
  }

  return (
      <SafeAreaView style={styles.pageContainer}>
        <StatusBar animated={true} barStyle='dark-content' backgroundColor={colors.white}/>
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={
            () => navigation.navigate('ProfileScreen')}>
            <Icon
              name="user-circle" 
              size={22} 
              color={colors.black}/>
          </TouchableOpacity>
          <Text style={styles.title}>findo</Text>
          <TouchableOpacity onPress={() => setFilterVisible(true)}>
            <Icon
              name="sliders-h" 
              size={20} 
              color={colors.black}/>
          </TouchableOpacity>

          <Modal
            animationType="none"
            backdropOpacity={0.3}
            transparent={true}
            visible={filterVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}>
              <View style={styles.backdrop}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Rasa</Text>
                <Picker
                  style={styles.picker}
                  selectedValue={selectedBreed}
                  onValueChange={(itemValue, itemIndex) => setSelectedBreed(itemValue)}>
                    {breeds.map((item, key) => (
                      <Picker.Item key={key} label={item.name} value={item.value}/>
                    ))}
                </Picker>
                <Text style={styles.modalText}>Lokalizacja</Text>
                <Picker
                  style={styles.picker}
                  selectedValue={selectedLocation}
                  onValueChange={(itemValue, itemIndex) => setSelectedLocation(itemValue)}>
                    {locations.map((item, key) => (
                      <Picker.Item key={key} label={item.name} value={item.value}/>
                    ))}
                </Picker>
                <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={() => {
                      setFilterVisible(!filterVisible);
                      setSelectedBreed(activeBreedFilter);
                      setSelectedLocation(activeLocationFilter);
                    }}>
                    <Text style={styles.cancelText}>Anuluj</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setFilterVisible(!filterVisible); 
                      setFilters(selectedBreed, selectedLocation);
                      setData();
                    }}>
                    <Text style={styles.acceptText}>Zastosuj</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            </View>
          </Modal>
        </View>
        <View style={styles.cardContainer}>
        <CardStack 
            data = {setData()}
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
  backdrop: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalView: {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  picker: {
    padding: 10,
  },
  buttons: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  acceptText: {
    alignSelf: 'flex-end',
    fontFamily: 'Oxygen-Bold',
    fontSize: 14,
    color: colors.blue,
    paddingHorizontal: 8,
  },
  cancelText: {
    alignSelf: 'flex-end',
    fontFamily: 'Oxygen-Regular',
    fontSize: 14,
    color: colors.gray,
    paddingHorizontal: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontFamily: 'Oxygen-Bold',
    alignSelf: 'flex-start',
    color: colors.black,
    fontSize: 16,
    paddingTop: 5,
    paddingHorizontal: 5,
    textAlign: "center"
  },
})

export default Home;