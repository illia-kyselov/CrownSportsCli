import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { addScore } from '../../store/slices/scoreSlice';
import BackButton from '../../components/UI/BackButton';
import BigButton from '../../components/UI/BigButton';
import CrownSVG from '../../assets/quiz/CrownSVG';
import BigCrown from '../../assets/quiz/BigCrown.png';

export default function QuizSuccessScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();

    const { level = 'easy' } = route.params || {};

    const getRewardValue = (lvl) => {
        switch (lvl) {
            case 'easy':
                return 100;
            case 'hard':
                return 1000;
            case 'incredible':
                return 5000;
            default:
                return 0;
        }
    };

    const rewardValue = getRewardValue(level);

    const [scoreAwarded, setScoreAwarded] = useState(false);

    useEffect(() => {
        if (!scoreAwarded && rewardValue > 0) {
            dispatch(addScore(rewardValue));
            setScoreAwarded(true);
        }
    }, [scoreAwarded, rewardValue, dispatch]);

    const handleBackPress = () => {
        navigation.replace('MainTabs', { screen: 'Quiz', params: { screen: 'QuizMain' } });
    };

    const handleClosePress = () => {
        navigation.replace('MainTabs', { screen: 'Quiz', params: { screen: 'QuizMain' } });
    };

    const formatReward = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    return (
        <View style={styles.root}>
            <SafeAreaView style={styles.safeArea}>
                <BackButton style={styles.backBtn} onPress={handleBackPress} />
                <View style={styles.spacer56} />

                <View style={styles.content}>
                    <Text style={styles.mainTitle}>You done new level!</Text>
                    <Text style={styles.subTitle}>
                        Take your reward! And take the crown of the king of endurance
                    </Text>
                </View>

                <View style={styles.rewardBlock}>
                    <LinearGradient
                        colors={['#E1C285', '#9F7E3D']}
                        start={{ x: 1, y: 0.5 }}
                        end={{ x: 0, y: 0.5 }}
                        style={styles.rewardBlockInner}
                    >
                        <Text style={styles.rewardText}>+ {formatReward(rewardValue)}</Text>
                        <CrownSVG />
                    </LinearGradient>
                </View>

                <Image source={BigCrown} style={styles.bigCrown} resizeMode="contain" />

                <View style={styles.buttonContainer}>
                    <BigButton title="Close" onPress={handleClosePress} />
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#677990',
    },
    safeArea: {
        flex: 1,
        marginHorizontal: 16,
    },
    backBtn: {
        marginTop: 12,
    },
    content: {
        alignSelf: 'center',
        alignItems: 'center',
        maxWidth: 240,
    },
    mainTitle: {
        fontFamily: 'SF Pro',
        fontWeight: '900',
        fontSize: 32,
        color: '#fff',
        marginBottom: 22,
        textAlign: 'center',
    },
    subTitle: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        marginBottom: 36,
        textAlign: 'center',
    },
    rewardBlock: {
        alignSelf: 'center',
        marginBottom: 22,
    },
    rewardBlockInner: {
        width: 188,
        height: 60,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    rewardText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 24,
        color: '#fff',
        marginRight: 6,
    },
    bigCrown: {
        width: 332,
        height: 332,
        marginBottom: 22,
        alignSelf: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 32,
    },
    spacer56: {
        marginBottom: 56,
    },
});
