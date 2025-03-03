import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import CalendarSVG from '../../assets/sport/CalendarSVG';
import AddSVG from '../../assets/sport/AddSVG';
import TabSelector from '../../components/TabSelector';
import StatsComponent from '../../components/StatsComponent';
import TrainingsComponent from '../../components/TrainingsComponent';
import CalendarModal from '../../components/CalendarModal';
import { selectTrainings } from '../../store/slices/trainingSlice';

export default function MainSportScreen() {
    const [selectedTab, setSelectedTab] = useState('Trainings');
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const navigation = useNavigation();

    const trainings = useSelector(selectTrainings);

    const handleCalendarPress = () => {
        setShowCalendar(true);
    };

    const handleCloseCalendar = () => {
        setShowCalendar(false);
    };

    const handleSelectDate = (date) => {
        setSelectedDate(date);
    };

    return (
        <LinearGradient colors={['#6B7A90', '#272C34']} style={styles.gradientBackground}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.headerRow}>
                        <View style={styles.headerTitleContainer}>
                            <Text style={styles.headerTitle}>My trainings</Text>
                            {trainings.length > 0 && (
                                <AddSVG
                                    style={styles.addIcon}
                                    onPress={() => navigation.navigate('AddTraining')}
                                />
                            )}
                        </View>
                        <CalendarSVG style={styles.calendarIcon} onPress={handleCalendarPress} />
                    </View>

                    <TabSelector
                        selectedCategory={selectedTab}
                        setSelectedCategory={setSelectedTab}
                        labels={['Trainings', 'Stats']}
                    />

                    <View style={styles.contentContainer}>
                        {selectedTab.toLowerCase() === 'stats' ? (
                            <StatsComponent />
                        ) : (
                            <TrainingsComponent />
                        )}
                    </View>
                </View>
            </SafeAreaView>

            <CalendarModal
                visible={showCalendar}
                onClose={handleCloseCalendar}
                onSelectDate={handleSelectDate}
                selectedDate={selectedDate}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    headerRow: {
        marginTop: 22,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '800',
        fontSize: 24,
        color: '#fff',
    },
    addIcon: {
        marginLeft: 12,
    },

    contentContainer: {
        flex: 1,
    },
});
