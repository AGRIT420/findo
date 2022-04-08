import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatList } from 'react-native-gesture-handler';
import chats from '../../../assets/data/chats';
import MessageRectangle from '../../components/MessageRectangle/MessageRectangle';
import MessageInputBox from '../../components/MessageInputBox/MessageInputBox';

const Conversation = ({ route, navigation }) => {
    const id = route?.params?.id
    const username = route?.params?.username
    const imageUri = route?.params?.imageUri

    return (
        <SafeAreaView style={styles.pageContainer}>
            <StatusBar animated={true} barStyle='dark-content' backgroundColor={colors.white}/>
            <View style={styles.titleBar}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={
                        () => navigation.goBack()}>
                        <Icon
                        name="chevron-left" 
                        size={22} 
                        color={colors.black}
                        style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Image source={{ uri: imageUri }} style={styles.avatar}/>
                    <Text numberOfLines={2} style={styles.title}>{username}</Text>
                </View>
            </View>
            
            <View style={styles.content}>
                <FlatList 
                    data={chats.messages} 
                    renderItem={({ item }) => 
                            <MessageRectangle message={item}/>}
                    keyExtractor={(item) => item.id}
                />
                <MessageInputBox/>
            </View>
            
        </SafeAreaView>
    )
}

Conversation.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
        }),
    }),
    navigation: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
        }),
        goBack: PropTypes.func,
    }),
}

Conversation.defaultProps = {
    route: {
        params: {
            id: '0',
            username: 'null',
        },
    },
    navigation: {
        params: {
            id: '0',
            username: 'null',
        },
        goBack: () => null,
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        flex: 1,
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
        borderBottomWidth: 1,
        borderColor: colors.ultraLightGray,
    },
    iconContainer: {
        width: '5%',
        alignItems: 'center',
    },
    titleContainer: {
        width: '95%',
        paddingRight: '5%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        width: '85%',
        paddingLeft: 12,
        lineHeight: 20,
        fontFamily: 'Oxygen-Regular',
        fontSize: 16,
        color: colors.blue,
    },
    icon: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    avatar: {
        width: 40,
        height: 40,
        marginLeft: 18,
        borderRadius: 30,
    },
    content: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
  })

export default Conversation;