import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import BackButton from '../../components/UI/BackButton';
import crownMini from '../../assets/quiz/crownMini.png';
import QuizAnswerButton from '../../components/UI/QuizAnswerButton';
import { setQuizProgress } from '../../store/slices/quizSlice';

export default function QuizQuestionScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const { level, questionIndex = 0 } = route.params || {};

    const quizData = useSelector((state) => state.quiz[level]);
    if (!quizData || !quizData[questionIndex]) {
        return (
            <SafeAreaView style={[styles.safeArea, styles.backgroundSafeArea]}>
                <BackButton />
                <Text style={styles.noQuestionText}>No question found</Text>
            </SafeAreaView>
        );
    }

    const questionItem = quizData[questionIndex];
    const { question, image, answers } = questionItem;

    const totalQuestions = quizData.length;
    const progressRatio = (questionIndex + 1) / totalQuestions;

    const handleAnswerPress = (answer) => {
        if (selectedAnswer !== null) { return; }
        setSelectedAnswer(answer);

        setTimeout(() => {
            if (answer.isCorrect) {
                dispatch(setQuizProgress({
                    level,
                    currentQuestionIndex: questionIndex + 1,
                    completed: questionIndex + 1 === totalQuestions,
                }));
                if (questionIndex + 1 < totalQuestions) {
                    navigation.replace('QuizQuestion', {
                        level,
                        questionIndex: questionIndex + 1,
                    });
                } else {
                    navigation.replace('QuizSuccess', { level });
                }
            } else {
                navigation.replace('GameOver', { level, questionIndex });
            }
        }, 1000);
    };

    return (
        <SafeAreaView style={[styles.safeArea, styles.backgroundSafeArea]}>
            <View style={styles.container}>
                <BackButton style={styles.backButton} />

                <View style={styles.progressContainer}>
                    <View style={styles.progressBackground}>
                        <View style={[styles.progressFill, { width: `${Math.round(progressRatio * 100)}%` }]} />
                    </View>
                    <Image
                        source={crownMini}
                        style={[styles.crownMini, { left: `${Math.round(progressRatio * 100)}%` }]}
                    />
                </View>

                <View style={styles.height56} />

                <Image source={image} style={styles.exerciseImage} />

                <Text style={styles.questionText}>{question}</Text>

                {answers.map((answer, index) => {
                    const isSelected = selectedAnswer === answer;
                    return (
                        <View key={index} style={styles.marginBottom12}>
                            <QuizAnswerButton
                                title={answer.text}
                                onPress={() => handleAnswerPress(answer)}
                                isSelected={isSelected}
                                isCorrect={answer.isCorrect}
                                disabled={selectedAnswer !== null}
                            />
                        </View>
                    );
                })}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    backgroundSafeArea: {
        backgroundColor: '#677990',
    },
    noQuestionText: {
        color: '#fff',
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    backButton: {
        marginTop: 14,
        marginBottom: 22,
    },
    progressContainer: {
        position: 'relative',
        height: 22,
        borderRadius: 12,
    },
    progressBackground: {
        flex: 1,
        backgroundColor: '#3B403F99',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#3B403F99',
        overflow: 'hidden',
    },
    progressFill: {
        flex: 1,
        backgroundColor: '#E1C285',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#3D3D3D4D',
    },
    crownMini: {
        position: 'absolute',
        top: 26,
        width: 24,
        height: 24,
        marginLeft: -12,
    },
    height56: {
        height: 56,
    },
    exerciseImage: {
        height: 300,
        width: '100%',
        borderRadius: 16,
        marginBottom: 12,
    },
    questionText: {
        fontFamily: 'SF Pro',
        fontWeight: '900',
        fontSize: 20,
        lineHeight: 28,
        color: '#fff',
        marginBottom: 26,
    },
    marginBottom12: {
        marginBottom: 12,
    },
});
