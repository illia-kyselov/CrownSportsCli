import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const CannotExecuteButton = ({ onPress, title, noMarginTop = false }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.touchable, noMarginTop && styles.noMarginTop]}
        >
            <LinearGradient
                colors={['#E1C285', '#9F7E3D']}
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
                style={styles.gradientBorder}
            >
                <View style={styles.innerBackground}>
                    <MaskedView
                        style={styles.maskedView}
                        maskElement={
                            <View style={styles.maskedElement}>
                                <Text style={styles.cannotButtonText}>{title}</Text>
                            </View>
                        }
                    >
                        <LinearGradient
                            colors={['#E1C285', '#9F7E3D']}
                            start={{ x: 1, y: 0.5 }}
                            end={{ x: 0, y: 0.5 }}
                            style={styles.gradientText}
                        />
                    </MaskedView>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        marginTop: 12,
        width: '100%',
    },
    noMarginTop: {
        marginTop: 0,
    },
    gradientBorder: {
        height: 44,
        borderRadius: 8,
        padding: 1,
    },
    innerBackground: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    maskedView: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    maskedElement: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradientText: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    cannotButtonText: {
        fontFamily: 'SF Pro',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
    },
});

export default CannotExecuteButton;
