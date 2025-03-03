import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CannotExecuteButton from './CannotExecuteButton';

export default function QuizAnswerButton({ title, onPress, isSelected, isCorrect, disabled }) {
    if (!isSelected) {
        return (
            <CannotExecuteButton title={title} onPress={onPress} disabled={disabled} />
        );
    }

    if (isSelected && isCorrect) {
        return (
            <TouchableOpacity onPress={onPress} disabled={true} style={styles.touchable}>
                <LinearGradient
                    colors={['#E1C285', '#9F7E3D']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={[styles.buttonContainer, styles.correctBorder]}
                >
                    <Text style={styles.buttonText}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    } else if (isSelected && !isCorrect) {
        return (
            <TouchableOpacity onPress={onPress} disabled={true} style={styles.touchable}>
                <View style={[styles.buttonContainer, styles.wrongBackground, styles.wrongBorder]}>
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return null;
}

const styles = StyleSheet.create({
    touchable: {
        marginTop: 12,
        width: '100%',
    },
    buttonContainer: {
        height: 44,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrongBackground: {
        backgroundColor: '#DD3E3E',
    },
    wrongBorder: {
        borderColor: '#FFFFFF',
    },
    buttonText: {
        fontFamily: 'SF Pro',
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});
