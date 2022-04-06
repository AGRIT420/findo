import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Image } from 'react-native';
import pets from '../../../assets/data/pets';
import { colors } from '../../theme';
import MessagesListItem from '../../components/MessagesListItem/MessageListItem';
import rooms from '../../../assets/data/rooms';
import { FlatList } from 'react-native-gesture-handler';

const Messages = () => {
    return (
        <SafeAreaView style={styles.pageContainer}>
        <StatusBar animated={true} barStyle='dark-content' backgroundColor={colors.white}/>
        <View style={styles.titleBar}>
        <Text style={styles.title}>wiadomości</Text>
        </View>
            <FlatList 
                style={styles.list}
                data={rooms} 
                renderItem={({ item }) => <MessagesListItem room={item}/>}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        backgroundColor: colors.white,
    },
    title: {
        fontFamily: 'Oxygen-Regular',
        fontSize: 28,
        color: colors.blue,
      },
    titleBar: {
        width: '100%',
        height: '7%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: colors.white,
        paddingVertical: 2,
        borderBottomWidth: 1,
        borderColor: colors.ultraLightGray,
    },
    container: {
        width: '100%',
        height: '93%',
        padding: 10,
    },
    list: {
        width: '100%',
    }
  })

export default Messages;