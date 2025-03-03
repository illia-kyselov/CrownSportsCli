import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import CrownSVG from '../../assets/quiz/CrownSVG';
import PlaySVG from '../../assets/quiz/PlaySVG';

export default function QuizMainScreen() {
    const navigation = useNavigation();

    const easyProgress = useSelector((state) => state.quiz.progress.easy);
    const hardProgress = useSelector((state) => state.quiz.progress.hard);
    const incredibleProgress = useSelector((state) => state.quiz.progress.incredible);

    const handlePress = (level) => {
        let currentIndex = 0;
        if (level === 'easy') {
            currentIndex = easyProgress.currentQuestionIndex;
        } else if (level === 'hard') {
            currentIndex = hardProgress.currentQuestionIndex;
        } else if (level === 'incredible') {
            currentIndex = incredibleProgress.currentQuestionIndex;
        }

        navigation.navigate('QuizQuestion', { level, questionIndex: currentIndex });
    };

    return (
        <View style={styles.flex1}>
            <LinearGradient colors={['#6B7A90', '#272C34']} style={styles.flex1}>
                <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
                    <ImageBackground
                        source={require('../../assets/quiz/CrownBg.png')}
                        style={styles.backgroundImage}
                        resizeMode="cover"
                    >
                        <View style={styles.container}>
                            <Header title="Crown Quiz" />
                            <View style={styles.marginBottom32} />

                            <TouchableOpacity
                                style={[styles.quizBlock, easyProgress.completed && styles.disabledQuizBlock]}
                                onPress={() => handlePress('easy')}
                                disabled={easyProgress.completed}
                            >
                                <View>
                                    <Text style={styles.quizLevel}>Easy quiz</Text>
                                    <View style={styles.rewardRow}>
                                        <Text style={styles.rewardText}>+ 100</Text>
                                        <CrownSVG />
                                    </View>
                                </View>
                                <PlaySVG />
                            </TouchableOpacity>

                            <View style={styles.height16} />

                            <TouchableOpacity
                                style={[styles.quizBlock, hardProgress.completed && styles.disabledQuizBlock]}
                                onPress={() => handlePress('hard')}
                                disabled={hardProgress.completed}
                            >
                                <View>
                                    <Text style={styles.quizLevel}>Hard quiz</Text>
                                    <View style={styles.rewardRow}>
                                        <Text style={styles.rewardText}>+ 1 000</Text>
                                        <CrownSVG />
                                    </View>
                                </View>
                                <PlaySVG />
                            </TouchableOpacity>

                            <View style={styles.height16} />

                            <TouchableOpacity
                                style={[styles.quizBlock, incredibleProgress.completed && styles.disabledQuizBlock]}
                                onPress={() => handlePress('incredible')}
                                disabled={incredibleProgress.completed}
                            >
                                <View>
                                    <Text style={styles.quizLevel}>Incredible quiz</Text>
                                    <View style={styles.rewardRow}>
                                        <Text style={styles.rewardText}>+ 5 000</Text>
                                        <CrownSVG />
                                    </View>
                                </View>
                                <PlaySVG />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    marginBottom32: {
        marginBottom: 32,
    },
    height16: {
        height: 16,
    },
    quizBlock: {
        backgroundColor: '#778EAA',
        height: 93,
        borderRadius: 8,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    disabledQuizBlock: {
        opacity: 0.5,
    },
    quizLevel: {
        fontFamily: 'SF Pro Display',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        marginBottom: 8,
    },
    rewardRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rewardText: {
        fontFamily: 'SF Pro Display',
        fontWeight: '800',
        fontSize: 24,
        color: '#fff',
        marginRight: 8,
    },
});
