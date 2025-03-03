import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackButton from '../../components/UI/BackButton';
import NotificationSwitch from '../../components/NotificationSwitch';
import CannotExecuteButton from '../../components/UI/CannotExecuteButton';
import BigButton from '../../components/UI/BigButton';
import PhotoSVG from '../../assets/icons/PhotoSVG';
import { handleEditPress } from '../../helpers/trainingActions';
import { formatDuration, formatTimeCard, formatCalories } from '../../helpers/dateTimeFormat';

const TrainingDetailsScreen = ({ navigation, route }) => {
    const { training } = route.params;

    const handleBack = () => {
        navigation.goBack();
    };

    const handleDeletePress = () => {
        handleEditPress(training, () => {
            navigation.goBack();
        });
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <BackButton onPress={handleBack} />
                </View>

                <ScrollView
                    style={styles.content}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.topInfoRow}>
                        {training.date && (
                            <Text style={styles.topInfoText}>{training.date}</Text>
                        )}
                        {training.type && (
                            <Text style={styles.topInfoText}>{training.type}</Text>
                        )}
                        {training.time && (
                            <Text style={styles.topInfoText}>{formatTimeCard(training.time)}</Text>
                        )}
                    </View>

                    <View style={styles.imageContainer}>
                        <PhotoSVG />
                    </View>

                    <Text style={styles.title}>{training.name}</Text>

                    <Text style={styles.description}>{training.description}</Text>

                    <View style={styles.statsBlock}>
                        <Text style={styles.statsTitle}>Statistic</Text>

                        <View style={styles.statsRow}>
                            <Text style={styles.statLabel}>Time</Text>
                            <Text style={styles.statValue}>{formatDuration(training.timeSpent)}</Text>
                        </View>
                        <View style={styles.statsRow}>
                            <Text style={styles.statLabel}>Calories</Text>
                            <Text style={styles.statValue}>{formatCalories(training.calories)}</Text>
                        </View>
                        <View style={styles.statsRow}>
                            <Text style={styles.statLabel}>Intensity</Text>
                            <Text style={styles.statValue}>{training.intensity}</Text>
                        </View>
                    </View>

                    <NotificationSwitch
                        enabled={training.notificationsEnabled}
                        onToggle={() => { }}
                    />

                    <View style={styles.buttonsOuterContainer}>
                        <View style={styles.buttonsContainer}>
                            <View style={[styles.buttonWrapper, styles.buttonMarginRight]}>
                                <CannotExecuteButton
                                    title="Delete"
                                    onPress={handleDeletePress}
                                    noMarginTop
                                />
                            </View>
                            <View style={[styles.buttonWrapper, styles.buttonMarginLeft]}>
                                <BigButton
                                    title="Edit"
                                    containerStyle={styles.buttonNoMargin}
                                    onPress={() => {
                                        navigation.navigate('AddTraining', { training, editMode: true });
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default TrainingDetailsScreen;

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#677990',
    },
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 22,
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    topInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    topInfoText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 14,
        color: '#fff',
        opacity: 0.5,
    },
    buttonsOuterContainer: {
        marginTop: 30,
    },
    imageContainer: {
        height: 160,
        borderRadius: 8,
        backgroundColor: '#778EAA',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    title: {
        fontFamily: 'SF Pro',
        fontWeight: '900',
        fontSize: 32,
        color: '#fff',
        marginBottom: 12,
    },
    description: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        marginBottom: 32,
    },
    statsBlock: {
        padding: 16,
        backgroundColor: '#778EAA',
        borderRadius: 8,
        marginBottom: 16,
    },
    statsTitle: {
        fontFamily: 'SF Pro',
        fontWeight: '700',
        fontSize: 18,
        color: '#fff',
        marginBottom: 16,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    statLabel: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 18,
        color: '#fff',
    },
    statValue: {
        fontFamily: 'SF Pro',
        fontWeight: '500',
        fontSize: 18,
        color: '#fff',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonWrapper: {
        flex: 1,
    },
    buttonMarginRight: {
        marginRight: 8,
    },
    buttonMarginLeft: {
        marginLeft: 8,
    },
    buttonNoMargin: {
        marginBottom: 0,
        marginTop: 0,
    },
});
