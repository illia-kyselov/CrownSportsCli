import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import TrainingSection from './TrainingSection';
import EmptyTraningState from './EmptyTraningState';
import { selectFilteredTrainings } from '../store/slices/trainingSlice';
import { useNavigation } from '@react-navigation/native';

export default function TrainingsComponent() {
    const trainings = useSelector(selectFilteredTrainings);
    const navigation = useNavigation();

    const hasTrainings = trainings.length > 0;

    if (!hasTrainings) {
        return <EmptyTraningState onAddPress={() => navigation.navigate('AddTraining')} />;
    }

    const groupedTrainings = trainings.reduce((acc, training) => {
        const date = training.day;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(training);
        return acc;
    }, {});

    const groupedArray = Object.keys(groupedTrainings).map((date) => ({
        date,
        trainings: groupedTrainings[date],
    }));

    return (
        <ScrollView style={styles.container}>
            {groupedArray.map((section) => (
                <TrainingSection
                    key={section.date}
                    date={section.date}
                    trainings={section.trainings}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
