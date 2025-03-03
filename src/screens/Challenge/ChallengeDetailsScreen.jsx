import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import BackButton from '../../components/UI/BackButton';
import BigButton from '../../components/UI/BigButton';
import CannotExecuteButton from '../../components/UI/CannotExecuteButton';

import { markCompleted, deleteChallenge } from '../../store/slices/challengesSlice';

export default function ChallengeDetailsScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { challengeId } = route.params;

    const challenge = useSelector((state) =>
        state.challenges.challenges.find((ch) => ch.id === challengeId)
    );

    if (!challenge) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>Challenge not found</Text>
            </SafeAreaView>
        );
    }

    const imageSource = challenge.userImage
        ? (typeof challenge.userImage === 'string'
            ? { uri: challenge.userImage }
            : challenge.userImage)
        : (typeof challenge.imageWithoutCrown === 'string'
            ? { uri: challenge.imageWithoutCrown }
            : challenge.imageWithoutCrown);

    const handleDone = () => {
        dispatch(markCompleted(challengeId));
        navigation.navigate('ChallengeSuccess', { challengeId });
    };

    const handleDelete = () => {
        Alert.alert(
            'Delete challenge',
            'Are you sure you want to delete a challenge?',
            [
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        dispatch(deleteChallenge(challengeId));
                        navigation.goBack();
                    },
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <BackButton />

            <Image source={imageSource} style={styles.challengeImage} />

            <Text style={styles.title}>{challenge.title}</Text>
            <Text style={styles.description}>{challenge.description}</Text>

            <View style={styles.goalBlock}>
                <Text style={styles.goalHeader}>Goal</Text>
                <Text style={styles.goalText}>{challenge.goal}</Text>
            </View>

            <BigButton
                title="Done"
                onPress={handleDone}
                containerStyle={styles.bigButtonContainerNoMargin}
            />

            <CannotExecuteButton
                title="Cannot execute"
                onPress={handleDelete}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#677990',
        padding: 16,
    },
    challengeImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 12,
    },
    title: {
        fontFamily: 'SF Pro',
        fontWeight: '900',
        fontSize: 28,
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
    errorText: {
        fontSize: 18,
        color: 'red',
    },
    goalBlock: {
        backgroundColor: '#778EAA',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
    },
    goalHeader: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        marginBottom: 12,
    },
    goalText: {
        fontFamily: 'SF Pro',
        fontWeight: '700',
        fontSize: 24,
        color: '#fff',
    },
    bigButtonContainerNoMargin: {
        marginTop: 0,
        marginBottom: 0,
    },
});
