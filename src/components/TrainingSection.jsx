/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TrainingCard from './TrainingCard';
import { formatDateSection } from '../helpers/dateTimeFormat';

const TrainingSection = ({ date, trainings }) => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionDate}>{formatDateSection(date)}</Text>
            {trainings.map((training, idx) => (
                <View key={training.id} style={{ marginBottom: idx === trainings.length - 1 ? 0 : 16 }}>
                    <TrainingCard training={training} />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginBottom: 24,
    },
    sectionDate: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 16,
        color: '#fff',
        marginBottom: 12,
    },
});

export default TrainingSection;
