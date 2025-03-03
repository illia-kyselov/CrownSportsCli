import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import BackButton from '../../components/UI/BackButton';
import BigButton from '../../components/UI/BigButton';
import DatePickerModal from '../../components/DatePickerModal';
import TimePickerModal from '../../components/TimePickerModal';

import DateSVG from '../../assets/sport/DateSVG';
import TimeSVG from '../../assets/sport/TimeSVG';
import CloseSVG from '../../assets/sport/CloseSVG';

import { formatDate, formatTime } from '../../helpers/dateTimeFormat';
import ClearableTextInput from '../../components/UI/ClearableTextInput';

export default function AddTrainingScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const editMode = route.params?.editMode;
    const training = route.params?.training;

    const [heading, setHeading] = useState(training ? training.name : '');
    const [description, setDescription] = useState(training ? training.description : '');

    const validDate =
        training && training.day && !isNaN(Date.parse(training.day))
            ? new Date(training.day)
            : null;
    const validTime =
        training && training.time && !isNaN(Date.parse(training.time))
            ? new Date(training.time)
            : null;

    const [selectedDate, setSelectedDate] = useState(validDate);
    const [selectedTime, setSelectedTime] = useState(validTime);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const isFormValid =
        heading.trim() !== '' &&
        description.trim() !== '' &&
        selectedDate !== null &&
        selectedTime !== null;

    const handleNext = () => {
        if (!isFormValid) { return; }
        navigation.navigate('AddTrainingStep2', {
            training,
            heading,
            description,
            selectedDate: selectedDate ? selectedDate.toISOString() : null,
            selectedTime: selectedTime ? selectedTime.toISOString() : null,
            editMode,
            trainingId: training ? training.id : undefined,
        });
    };

    const handlePressDate = () => {
        setShowTimePicker(false);
        setShowDatePicker(true);
    };

    const handlePressTime = () => {
        setShowDatePicker(false);
        setShowTimePicker(true);
    };

    const handleClearDate = (e) => {
        e && e.stopPropagation && e.stopPropagation();
        setSelectedDate(null);
    };

    const handleClearTime = (e) => {
        e && e.stopPropagation && e.stopPropagation();
        setSelectedTime(null);
    };

    const onDateChange = (event, date) => {
        setShowDatePicker(false);
        if (event.type === 'set' && date) {
            setSelectedDate(date);
        }
    };

    const onTimeChange = (event, time) => {
        setShowTimePicker(false);
        if (event.type === 'set' && time) {
            setSelectedTime(time);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <BackButton style={styles.backButton} onPress={() => navigation.goBack()} />

                <Text style={styles.title}>New training</Text>

                <Text style={styles.label}>Heading</Text>
                <ClearableTextInput
                    value={heading}
                    onChangeText={setHeading}
                    placeholder="Task name"
                />

                <Text style={styles.label}>Description</Text>
                <ClearableTextInput
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Task name"
                />

                <View style={styles.twoButtonsContainer}>
                    <TouchableOpacity style={[styles.iconButton, styles.marginRight]} onPress={handlePressDate}>
                        <DateSVG style={styles.iconMarginBottom} />
                        <View style={styles.alignCenter}>
                            {selectedDate ? (
                                <>
                                    <Text style={styles.iconButtonText}>{formatDate(selectedDate)}</Text>
                                    <TouchableOpacity onPress={handleClearDate} style={styles.marginTop}>
                                        <CloseSVG />
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <Text style={styles.iconButtonText}>Date</Text>
                            )}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconButton} onPress={handlePressTime}>
                        <TimeSVG style={styles.iconMarginBottom} />
                        <View style={styles.alignCenter}>
                            {selectedTime ? (
                                <>
                                    <Text style={styles.iconButtonText}>{formatTime(selectedTime)}</Text>
                                    <TouchableOpacity onPress={handleClearTime} style={styles.marginTop}>
                                        <CloseSVG />
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <Text style={styles.iconButtonText}>Time</Text>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <BigButton title="Next" onPress={handleNext} disabled={!isFormValid} />
                </View>
            </KeyboardAvoidingView>

            <DatePickerModal
                visible={showDatePicker}
                selectedDate={selectedDate}
                onDateChange={onDateChange}
                onRequestClose={() => setShowDatePicker(false)}
            />

            <TimePickerModal
                visible={showTimePicker}
                selectedTime={selectedTime}
                onTimeChange={onTimeChange}
                onRequestClose={() => setShowTimePicker(false)}
            />
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
    backButton: {
        marginBottom: 19,
    },
    title: {
        fontWeight: '900',
        fontSize: 32,
        color: '#fff',
        marginBottom: 32,
    },
    label: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 12,
    },
    marginRight: {
        marginRight: 16,
    },
    iconMarginBottom: {
        marginBottom: 8,
    },
    alignCenter: {
        alignItems: 'center',
    },
    marginTop: {
        marginTop: 8,
    },
    twoButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    iconButton: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#778EAA',
        borderRadius: 8,
    },
    buttonContainer: {
        marginTop: 30,
    },
    iconButtonText: {
        color: '#fff',
    }
});
