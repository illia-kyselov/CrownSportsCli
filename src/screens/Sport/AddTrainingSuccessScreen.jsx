import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import BackButton from '../../components/UI/BackButton';
import BigButton from '../../components/UI/BigButton';
import { addTraining, updateTraining } from '../../store/slices/trainingSlice';
import { formatTime } from '../../helpers/dateTimeFormat';

export default function AddTrainingSuccessScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();

    const {
        heading,
        description,
        selectedDate,
        selectedTime,
        timeSpent,
        calories,
        intensity,
        notificationsEnabled,
        editMode,
        trainingId,
    } = route.params || {};

    useEffect(() => {
        if (heading && description && selectedDate && selectedTime && timeSpent && calories && intensity !== undefined) {
            const trainingData = {
                id: editMode ? trainingId : new Date().getTime().toString(),
                name: heading,
                description,
                day: typeof selectedDate === 'object'
                    ? selectedDate.toISOString().split('T')[0]
                    : selectedDate,
                time: typeof selectedTime === 'object'
                    ? formatTime(selectedTime)
                    : selectedTime,
                timeSpent,
                calories: Number(calories),
                intensity,
                notificationsEnabled,
            };

            if (editMode) {
                dispatch(updateTraining(trainingData));
            } else {
                dispatch(addTraining(trainingData));
            }
        } else {
            console.warn('AddTrainingSuccessScreen: Missing training parameters');
        }
    }, [heading, description, selectedDate, selectedTime, timeSpent, calories, intensity, notificationsEnabled, editMode, trainingId, dispatch]);

    const handleClose = () => {
        navigation.replace('MainTabs', { screen: 'MainSport' });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.marginBottom19}>
                    <BackButton onPress={handleClose} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>New training is {editMode ? 'updated' : 'added'}!</Text>

                    <Image
                        source={require('../../assets/sport/sport.png')}
                        style={styles.sportImage}
                        resizeMode="contain"
                    />
                </View>

                <BigButton
                    title="Close"
                    onPress={handleClose}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#677990',
    },
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 22,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'SF Pro',
        fontWeight: '900',
        fontSize: 32,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 48,
    },
    sportImage: {
        width: 222,
        height: 222,
        alignSelf: 'center',
    },
    marginBottom19: {
        marginBottom: 19,
    },
});
