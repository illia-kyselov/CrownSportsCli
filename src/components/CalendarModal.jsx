import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import CancelSVG from '../assets/sport/CancelSVG';
import BigButton from '../components/UI/BigButton';
import CannotExecuteButton from '../components/UI/CannotExecuteButton';
import { setSelectedDate } from '../store/slices/trainingSlice';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDay = ({ date, state, marking, onPress }) => {
    if (marking && marking.custom) {
        return (
            <TouchableOpacity onPress={() => onPress(date)} style={styles.dayWrapper}>
                <LinearGradient
                    colors={['#E1C285', '#9F7E3D']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.customDayContainer}
                >
                    <Text style={styles.customDayText}>{date.day}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity onPress={() => onPress(date)} style={styles.dayWrapper}>
            <View style={styles.defaultDayContainer}>
                <Text style={[styles.defaultDayText, state === 'disabled' && styles.disabledText]}>
                    {date.day}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default function CalendarModal({ visible, onClose }) {
    const dispatch = useDispatch();
    const [tempDate, setTempDate] = useState(null);

    const handleDayPress = (day) => {
        setTempDate(day.dateString);
    };

    const handleShowPress = () => {
        dispatch(setSelectedDate(tempDate));
        onClose();
    };

    const handleResetPress = () => {
        setTempDate(null);
        dispatch(setSelectedDate(null));
        onClose();
    };

    const renderHeader = (date) => {
        const month = date.toString('MMMM yyyy');
        return <Text style={styles.monthText}>{month}</Text>;
    };

    const markedDates = tempDate ? { [tempDate]: { custom: true } } : {};

    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>Choose date</Text>
                        <TouchableOpacity onPress={onClose} style={styles.cancelIcon}>
                            <CancelSVG />
                        </TouchableOpacity>
                    </View>

                    <Calendar
                        current={tempDate || undefined}
                        onDayPress={handleDayPress}
                        markedDates={markedDates}
                        dayComponent={CustomDay}
                        renderHeader={renderHeader}
                        theme={{
                            backgroundColor: 'transparent',
                            calendarBackground: '#778EAA',
                            textSectionTitleColor: '#fff',
                            dayTextColor: '#fff',
                            monthTextColor: '#fff',
                            arrowColor: '#fff',
                            textMonthFontFamily: 'SF Pro Text',
                            textMonthFontWeight: '800',
                            textMonthFontSize: 18,
                            textDayFontFamily: 'SF Pro Text',
                            textDayFontWeight: '400',
                            textDayFontSize: 16,
                            textDayHeaderFontFamily: 'SF Pro Text',
                            textDayHeaderFontWeight: '400',
                            textDayHeaderFontSize: 14,
                        }}
                        style={styles.calendar}
                    />

                    <View style={styles.buttonsColumn}>
                        <View style={styles.buttonWrapper}>
                            <BigButton
                                title="Show"
                                onPress={handleShowPress}
                                containerStyle={styles.bigButtonContainer}
                            />
                        </View>
                        <View style={styles.buttonWrapper}>
                            <CannotExecuteButton
                                title="Reset"
                                onPress={handleResetPress}
                                noMarginTop={true}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: '#778EAA',
        borderRadius: 12,
        padding: 16,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontFamily: 'SF Pro Display',
        fontWeight: '900',
        fontSize: 20,
        color: '#fff',
        marginLeft: 9,
    },
    cancelIcon: {
        padding: 4,
    },
    monthText: {
        fontFamily: 'SF Pro Display',
        fontWeight: '700',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    buttonsColumn: {
        width: '100%',
        paddingHorizontal: 20,
    },
    bigButtonContainer: {
        marginTop: 20,
        marginBottom: 16,
    },
    dayWrapper: {
        margin: 2,
    },
    customDayContainer: {
        width: 44,
        height: 44,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    customDayText: {
        color: '#fff',
        fontWeight: '600',
    },
    defaultDayContainer: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    defaultDayText: {
        color: '#fff',
    },
    disabledText: {
        color: '#ccc',
    },
    calendar: {
        width: SCREEN_WIDTH * 0.8,
        alignSelf: 'center',
        borderRadius: 12,
        marginBottom: 16,
    },
});
