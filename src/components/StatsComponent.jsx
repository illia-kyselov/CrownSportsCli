import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import CustomSlider from './UI/CustomSlider';
import { useSelector } from 'react-redux';
import { selectStats } from '../store/slices/trainingSlice';
import { formatCalories } from '../helpers/dateTimeFormat';

const StatsComponent = () => {
    const statsData = useSelector(selectStats);

    if (statsData.totalTrainings === 0) {
        return (
            <View style={styles.emptyStatsContainer}>
                <Image
                    source={require('../assets/sport/Stats.png')}
                    style={styles.emptyStatsImage}
                    resizeMode="contain"
                />
                <Text style={styles.emptyStatsText}>There aren’t any stats yet</Text>
            </View>
        );
    }

    return (
        <View style={styles.statsContainer}>
            <View style={styles.statsRow}>
                <View style={[styles.statBox, styles.marginRight16]}>
                    <Text style={styles.statBoxTitle}>Total trainings</Text>
                    <Text style={styles.statBoxValue}>{statsData.totalTrainings}</Text>
                </View>

                <View style={styles.statBox}>
                    <Text style={styles.statBoxTitle}>Time spent</Text>
                    <Text style={styles.statBoxValue}>{statsData.timeSpent}</Text>
                </View>
            </View>

            <View style={[styles.statBox, styles.marginBottom16]}>
                <Text style={[styles.statBoxTitle, styles.marginBottom8]}>Average intensity</Text>
                <CustomSlider
                    value={statsData.averageIntensity}
                    onValueChange={() => { }}
                    hideThumb={true}
                    minimumValue={0}
                    maximumValue={100}
                />
            </View>

            <View style={[styles.statBox, styles.marginBottom28]}>
                <Text style={styles.statBoxTitle}>Total calories burned</Text>
                <Text style={styles.statBoxValue}>{formatCalories(statsData.totalCaloriesBurned)}</Text>
            </View>

            <Image
                source={require('../assets/sport/Basketball.png')}
                style={styles.basketballImage}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    emptyStatsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyStatsImage: {
        width: 200,
        height: 200,
        marginBottom: 42,
    },
    emptyStatsText: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    statsContainer: {
        flex: 1,
    },
    statsRow: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    statBox: {
        flex: 1,
        backgroundColor: '#677990',
        borderRadius: 8,
        padding: 16,
    },
    statBoxTitle: {
        fontFamily: 'SF Pro Display',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        marginBottom: 8,
    },
    statBoxValue: {
        fontFamily: 'SF Pro Display',
        fontWeight: '800',
        fontSize: 24,
        color: '#fff',
    },
    basketballImage: {
        width: 186,
        height: 186,
        alignSelf: 'center',
    },
    marginRight16: {
        marginRight: 16,
    },
    marginBottom16: {
        marginBottom: 16,
    },
    marginBottom8: {
        marginBottom: 8,
    },
    marginBottom28: {
        marginBottom: 28,
    },
});

export default StatsComponent;
