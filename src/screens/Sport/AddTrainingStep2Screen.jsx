import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import BackButton from '../../components/UI/BackButton';
import BigButton from '../../components/UI/BigButton';
import NotificationSwitch from '../../components/NotificationSwitch';
import CustomSlider from '../../components/UI/CustomSlider';
import { formatDurationInput } from '../../helpers/dateTimeFormat';

export default function AddTrainingStep2Screen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { editMode, trainingId } = route.params;
    const trainingFromParams = route.params.training || {};

    const [timeSpent, setTimeSpent] = useState(editMode ? trainingFromParams.timeSpent || '' : '');
    const [calories, setCalories] = useState(
        editMode && trainingFromParams.calories !== undefined
            ? trainingFromParams.calories.toString()
            : ''
    );
    const [intensity, setIntensity] = useState(editMode ? trainingFromParams.intensity || 10 : 10);
    const [notificationsEnabled, setNotificationsEnabled] = useState(
        editMode ? trainingFromParams.notificationsEnabled || false : false
    );

    const isFormValid = timeSpent.trim() !== '' && calories.trim() !== '';

    const handleNext = () => {
        if (!isFormValid) {
            return;
        }
        const formattedTimeSpent = formatDurationInput(timeSpent);
        navigation.navigate('AddTrainingSuccess', {
            ...route.params,
            timeSpent: formattedTimeSpent,
            calories,
            intensity,
            notificationsEnabled,
            editMode,
            trainingId,
        });
    };

    const toggleNotifications = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={styles.marginBottom19}>
                    <BackButton onPress={() => navigation.goBack()} />
                </View>

                <Text style={styles.title}>New training</Text>

                <Text style={styles.label}>Time spent</Text>
                <TextInput
                    style={styles.input}
                    placeholder="For example: 600 minutes"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={timeSpent}
                    onChangeText={setTimeSpent}
                />

                <Text style={styles.label}>Calories</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g. 350"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={calories}
                    onChangeText={setCalories}
                />

                <Text style={styles.label}>Intensity</Text>
                <View style={styles.marginBottom54}>
                    <CustomSlider value={intensity} onValueChange={setIntensity} hideThumb={false} />
                </View>

                <NotificationSwitch enabled={notificationsEnabled} onToggle={toggleNotifications} />

                <View style={styles.buttonContainer}>
                    <BigButton title="Next" onPress={handleNext} disabled={!isFormValid} />
                </View>
            </KeyboardAvoidingView>
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
    marginBottom19: {
        marginBottom: 19,
    },
    title: {
        fontFamily: 'SF Pro',
        fontWeight: '900',
        fontSize: 32,
        color: '#fff',
        marginBottom: 32,
    },
    label: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        marginBottom: 12,
    },
    input: {
        height: 52,
        backgroundColor: '#778EAA',
        paddingLeft: 20,
        borderRadius: 6,
        marginBottom: 24,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1,
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'SF Pro Text',
    },
    marginBottom54: {
        marginBottom: 54,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 24,
    },
});
