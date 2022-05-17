import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { colors } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getMessage } from '../../graphql/queries';
import { updateMessage } from '../../graphql/mutations';
import { onUpdateMessage } from './subscriptions';
import moment from 'moment-timezone';
import 'moment/locale/pl';

const ProposalRectangle = (props) => {
    const { message, myID } = props;

    const [ messageData, setMessageData ] = useState(null);
    const [ messageLoaded, setMessageLoaded ] = useState(false);

    const isMyMessage = () => {
        return messageData.user.id === myID;
    }

    const fetchMessageData = async () => {
        await API.graphql(graphqlOperation(getMessage, {id: message.id}))
            .then(result => setMessageData(result.data.getMessage))
            .then(() => setMessageLoaded(true));
    }

    useEffect( () => {
        try {
            fetchMessageData();
        } catch (e) {
            console.log(e);
        }
    }, [])

    const updateStatus = async (updatedStatus) => {
        try {
            await API.graphql(graphqlOperation(updateMessage, {input: {id: message.id, status: updatedStatus}}));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect( () => {
        const subscription = API.graphql(graphqlOperation(onUpdateMessage)).subscribe({
            next: () => {
                fetchMessageData();
            },
            error: error => console.log("Error: ", error),
        })
        return () => subscription.unsubscribe();
    }, [])

    const onAccept = () => {
        updateStatus("accepted");
    }

    const onDecline = () => {
        updateStatus("declined");
    }

    return (
        <View style={styles.container}>
            {messageLoaded &&
            <LinearGradient
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
                locations={[0, 1.0]}
                colors={[colors.darkBlue, colors.darkBlue]}
                style={styles.box}>
                <Text style={styles.title}>Propozycja spotkania adopcyjnego</Text>
                <View style={styles.rowText}>
                    <Text style={styles.detailName}>Data: </Text>
                    <Text style={styles.detailData}>{messageData.suggestedDate}</Text>
                </View>
                <View style={styles.rowText}>
                    <Text style={styles.detailName}>Godzina: </Text>
                    <Text style={styles.detailData}>{messageData.suggestedHour}</Text>
                </View>
                <Text style={styles.detailName}>Dodatkowe informacje/uwagi: </Text>
                <Text style={styles.detailData}>{messageData.content}</Text>
                {messageData.status === "unanswered" && isMyMessage() &&
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={onAccept} style={styles.button}>
                        <Text style={styles.detailName}>
                            Akceptuj
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onDecline} style={styles.button}>
                        <Text style={styles.detailName}>
                            Odrzuć
                        </Text>
                    </TouchableOpacity>
                    </View>}
                {messageData.status === "unanswered" && !isMyMessage() && 
                <Text style={styles.waitingText}>Oczekuje na odpowiedź...</Text>
                }
                {messageData.status === "accepted" &&
                <Text style={styles.statusText}>
                    Zaakceptowano propozycję spotkania.
                </Text>}

                {messageData.status === "declined" &&
                <Text style={styles.statusText}>
                    Odrzucono propozycję spotkania.
                </Text>}

                <Text style={styles.time}>{moment(messageData.createdAt, 'YYYY-MM-DD HH:mm:ss', 'pl')
                        .add(2, 'hours')
                        .subtract(3, 'seconds')
                        .tz('Europe/Warsaw')
                        .startOf('second')
                        .fromNow()}
                </Text>
            </LinearGradient>}
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    box: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: colors.darkBlue,
        marginHorizontal: 0,
        borderColor: colors.lightBlue,
        //borderWidth: 2,
        borderRadius: 24,
    },
    username: {
        fontFamily: 'oxygen_bold',
        color: colors.white,
        fontSize: 14,
        lineHeight: 14,
        marginBottom: 2,
    },
    title: {
        fontFamily: 'oxygen_bold',
        color: colors.white,
        fontSize: 18,
        alignSelf: 'center',
        paddingBottom: 6,
    },
    rowText: {
        flexDirection: 'row',
    },
    detailName: {
        fontFamily: 'oxygen_bold',
        color: colors.white,
        fontSize: 16,
    },
    detailData: {
        fontFamily: 'oxygen_regular',
        color: colors.white,
        fontSize: 16,
    },
    statusText: {
        fontFamily: 'oxygen_bold',
        color: colors.white,
        fontSize: 16,
        paddingTop: 22,
        paddingBottom: 14,
        alignSelf: 'center',
    },
    waitingText: {
        fontFamily: 'oxygen_light',
        fontStyle: 'italic',
        color: colors.white,
        fontSize: 16,
        paddingTop: 22,
        paddingBottom: 14,
        alignSelf: 'center',
    },
    buttonsContainer: {
        marginTop: 10,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 40,
    },
    button: {
        backgroundColor: colors.darkBlueLighted,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: '49%',
    },
    buttonText: {
        fontFamily: 'oxygen_light',
        color: colors.white,
        fontSize: 16,
    },
    time: {
        fontFamily: 'oxygen_light',
        color: colors.ultraLightBlue,
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        paddingTop: 2,
        fontSize: 12,
    },
})

export default ProposalRectangle;