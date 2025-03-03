import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import BackButton from '../../components/UI/BackButton';
import BigButton from '../../components/UI/BigButton';
import { addChallenge } from '../../store/slices/challengesSlice';

const CrownPng = require('../../assets/icons/Crown.png');

export default function AddChallengeSuccessScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const challengeData = route.params?.challenge;

    useEffect(() => {
        if (challengeData) {
            dispatch(addChallenge(challengeData));
        }
    }, [challengeData, dispatch]);

    const handleClose = () => {
        navigation.replace('MainTabs', { screen: 'Challenges', params: { screen: 'CrownChallenges' } });
    };

    return (
        <SafeAreaView style={styles.container}>
            <BackButton onPress={() => navigation.goBack()} />

            <View style={styles.content}>
                <Text style={styles.mainTitle}>New challenge is added!</Text>

                <View style={styles.iconWrapper}>
                    <Image source={CrownPng} style={styles.crownIcon} />
                </View>
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
        backgroundColor: '#677990',
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTitle: {
        fontFamily: 'SF Pro',
        fontWeight: '900',
        width: 254,
        fontSize: 32,
        color: '#fff',
        marginBottom: 40,
        textAlign: 'center',
    },
    iconWrapper: {
        width: 220,
        height: 220,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    crownIcon: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    bigButtonContainer: {
        marginBottom: 32,
    },
});
