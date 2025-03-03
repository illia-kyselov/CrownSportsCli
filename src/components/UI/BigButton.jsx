import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BigButton = ({ title, onPress, containerStyle, disabled = false }) => {
    const gradientColors = disabled
        ? ['#999999', '#777777']
        : ['#E1C285', '#9F7E3D'];

    return (
        <View style={[styles.footerContainer, containerStyle]}>
            <TouchableOpacity
                style={[
                    styles.bigButton,
                    disabled && styles.bigButtonDisabled,
                ]}
                onPress={!disabled ? onPress : null}
                disabled={disabled}
                activeOpacity={disabled ? 1 : 0.8}
            >
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.bigButtonGradient}
                >
                    <Text
                        style={[
                            styles.bigButtonText,
                            disabled && styles.bigButtonTextDisabled,
                        ]}
                    >
                        {title}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        marginTop: 52,
        marginBottom: 32,
        alignItems: 'center',
    },
    bigButton: {
        width: '100%',
        height: 44,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        overflow: 'hidden',
    },
    bigButtonDisabled: {
        borderColor: '#999',
    },
    bigButtonGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    bigButtonTextDisabled: {
        color: '#ccc',
    },
});

export default BigButton;
