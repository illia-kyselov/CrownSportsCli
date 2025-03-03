import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { handleEditPress } from '../helpers/trainingActions';
import { formatDateCard, formatTimeCard } from '../helpers/dateTimeFormat';

const TrainingCard = ({ training }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.card}>
            <TouchableOpacity
                style={styles.cardTopRow}
                activeOpacity={0.8}
                onPress={() => {
                    navigation.navigate('TrainingDetails', {
                        training,
                    });
                }}
            >
                <View style={styles.leftColumn}>
                    <View style={styles.logoContainer} />
                    <View style={styles.marginLeft8}>
                        <Text style={styles.trainingName}>{training.name}</Text>
                        <Text style={styles.trainingDescription}>{training.description}</Text>
                    </View>
                </View>

                <View style={styles.rightColumn}>
                    <Text style={styles.trainingDate}>{formatDateCard(training.day)}</Text>
                    <Text style={styles.trainingDate}>{formatTimeCard(training.time)}</Text>
                    <Text style={styles.trainingDate}>{training.type}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEditPress(training, {}, navigation)}
            >
                <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#778EAA',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },
    cardTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftColumn: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexShrink: 1,
    },
    logoContainer: {
        width: 44,
        height: 44,
        borderRadius: 6,
        backgroundColor: '#fff',
    },
    marginLeft8: {
        marginLeft: 8,
    },
    trainingName: {
        fontFamily: 'SF Pro',
        fontWeight: '700',
        fontSize: 16,
        color: '#fff',
        marginBottom: 6,
    },
    trainingDescription: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 14,
        color: '#fff',
    },
    rightColumn: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    trainingDate: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 11,
        color: '#fff',
        opacity: 0.5,
        marginBottom: 4,
    },
    editButton: {
        marginTop: 12,
        width: '100%',
        height: 32,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    editButtonText: {
        fontFamily: 'SF Pro Display',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 22,
        color: '#fff',
    },
});

export default TrainingCard;
