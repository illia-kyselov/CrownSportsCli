import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../components/UI/BackButton';
import BigButton from '../../components/UI/BigButton';
import CrownSVGResult from '../../assets/icons/CrownSVGResult';
import { markRewardAwarded } from '../../store/slices/challengesSlice';
import { addScore } from '../../store/slices/scoreSlice';
import LinearGradient from 'react-native-linear-gradient';

const CrownPng = require('../../assets/icons/Crown.png');

export default function ChallengeSuccessScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const { challengeId } = route.params || {};

    const challenge = useSelector((state) =>
        state.challenges.challenges.find((ch) => ch.id === challengeId)
    );

    useEffect(() => {
        if (challenge && !challenge.rewardAwarded) {
            const rewardValue = parseInt(challenge.reward.replace('+', '').trim(), 10);
            dispatch(addScore(rewardValue));
            dispatch(markRewardAwarded(challengeId));
        }
    }, [challenge, dispatch, challengeId]);

    const handleClose = () => {
        navigation.replace('MainTabs', { screen: 'Challenges', params: { screen: 'CrownChallenges' } });
    };

    if (!challenge) {
        return (
            <SafeAreaView style={styles.container}>
                <BackButton onPress={() => navigation.replace('MainTabs', { screen: 'CrownChallenges' })} />
                <Text style={styles.errorText}>Challenge not found</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <BackButton
                onPress={handleClose}
                style={styles.backBtnMargin}
            />

            <View style={styles.content}>
                <Text style={styles.mainTitle}>You done new challenge!</Text>
                <Text style={styles.subTitle}>Take your reward!</Text>

                <View style={styles.rewardContainer}>
                    <LinearGradient
                        colors={['#E1C285', '#9F7E3D']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={styles.rewardBlock}
                    >
                        <Text style={styles.rewardText}>{challenge.reward}</Text>
                        <CrownSVGResult style={styles.marginLeft12} />
                    </LinearGradient>
                </View>

                <Image source={CrownPng} style={styles.crownImage} />
            </View>

            <BigButton
                title="Close"
                onPress={handleClose}
                containerStyle={styles.bigButtonContainer}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6B7A90',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    backBtnMargin: {
        marginBottom: 45,
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    mainTitle: {
        fontFamily: 'SF Pro',
        fontWeight: '900',
        fontSize: 32,
        color: '#fff',
        marginBottom: 22,
        textAlign: 'center',
        marginTop: 45,
    },
    subTitle: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        marginBottom: 55,
        textAlign: 'center',
    },
    rewardContainer: {
        alignItems: 'center',
        marginBottom: 22,
    },
    rewardBlock: {
        width: 140,
        height: 48,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    rewardText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 24,
        color: '#fff',
    },
    marginLeft12: {
        marginLeft: 12,
    },
    crownImage: {
        width: 226,
        height: 226,
        marginBottom: 82,
        resizeMode: 'contain',
    },
    bigButtonContainer: {
        height: 48,
        marginBottom: 32,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});
