import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BigButton from '../../components/UI/BigButton';
import TabSelector from '../../components/TabSelector';
import BackButton from '../../components/UI/BackButton';

export default function CreateChallengeScreen() {
    const navigation = useNavigation();

    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [goal, setGoal] = useState('');
    const [duration, setDuration] = useState('week');

    const isFormValid =
        heading.trim() !== '' &&
        description.trim() !== '' &&
        goal.trim() !== '';

    const handleNextPress = () => {
        if (isFormValid) {
            navigation.navigate('CreateChallengeStep2', {
                heading,
                description,
                goal,
                duration,
            });
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <BackButton style={styles.backButtonMargin} onPress={() => navigation.goBack()} />

                <Text style={styles.title}>New challenge</Text>

                <Text style={styles.label}>Heading</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Task name"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={heading}
                    onChangeText={setHeading}
                />

                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Task name"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={description}
                    onChangeText={setDescription}
                />

                <Text style={styles.label}>Goal</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Task name"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={goal}
                    onChangeText={setGoal}
                />

                <Text style={styles.label}>Duration</Text>
                <TabSelector
                    selectedCategory={duration}
                    setSelectedCategory={setDuration}
                    labels={['Week', 'Month']}
                />

                <View style={styles.buttonContainer}>
                    <BigButton
                        title="Next"
                        disabled={!isFormValid}
                        onPress={handleNextPress}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#677990',
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    backButtonMargin: {
        marginBottom: 19,
    },
    title: {
        fontFamily: 'SF Pro',
        fontWeight: '900',
        fontSize: 32,
        color: '#fff',
        marginBottom: 32,
    },
    label: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        marginBottom: 12,
    },
    input: {
        backgroundColor: '#778EAA',
        paddingLeft: 20,
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 6,
        marginBottom: 24,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1,
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'SF Pro Text',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 24,
    },
});
