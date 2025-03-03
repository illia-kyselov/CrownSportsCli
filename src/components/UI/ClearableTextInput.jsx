import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CloseSVG from '../../assets/sport/CloseSVG';

const ClearableTextInput = ({
    value,
    onChangeText,
    placeholder,
    placeholderTextColor,
    style,
    inputStyle,
    ...rest
}) => {
    return (
        <View style={[styles.inputContainer, style]}>
            <TextInput
                style={[styles.input, inputStyle, styles.inputPaddingRight]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor || 'rgba(255,255,255,0.5)'}
                {...rest}
            />
            {value !== '' && (
                <TouchableOpacity onPress={() => onChangeText('')} style={styles.clearIcon}>
                    <CloseSVG />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        marginBottom: 24,
    },
    input: {
        height: 52,
        backgroundColor: '#778EAA',
        paddingLeft: 20,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1,
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'SF Pro Text',
    },
    inputPaddingRight: {
        paddingRight: 40,
    },
    clearIcon: {
        position: 'absolute',
        right: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
    },
});

export default ClearableTextInput;
