import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BigButton from './UI/BigButton';
import { selectSelectedDate } from '../store/slices/trainingSlice';

const formatDate = (date) => {
    const d = date instanceof Date ? date : new Date(date);
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const month = monthNames[d.getMonth()];
    const day = d.getDate();
    return `${month} ${day}`;
};

const EmptyTraningState = ({ onAddPress }) => {
    const insets = useSafeAreaInsets();
    const selectedDate = useSelector(selectSelectedDate);
    const displayDate = selectedDate ? formatDate(selectedDate) : formatDate(new Date());

    return (
        <ScrollView
            contentContainerStyle={[
                styles.emptyContainer,
                { paddingBottom: insets.bottom },
            ]}
        >
            <Text style={[styles.dateText, styles.alignSelfFlexStart]}>{displayDate}</Text>
            <View style={styles.marginBottom56} />
            <Image
                source={require('../assets/sport/sport.png')}
                style={styles.sportImage}
                resizeMode="contain"
            />
            <View style={styles.marginBottom10} />
            <Text style={styles.emptyText}>There are no trainings, add something now</Text>
            <View style={styles.buttonWrapper}>
                <BigButton title="Add" onPress={onAddPress} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    emptyContainer: {
        flexGrow: 1,
        alignItems: 'center',
    },
    dateText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 18,
        color: '#fff',
    },
    alignSelfFlexStart: {
        alignSelf: 'flex-start',
    },
    marginBottom56: {
        marginBottom: 56,
    },
    marginBottom10: {
        marginBottom: 10,
    },
    sportImage: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
    emptyText: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        width: 254,
    },
    buttonWrapper: {
        width: '100%',
        marginTop: 20,
    },
});

export default EmptyTraningState;
