import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomActionSheet = ({
    visible,
    options,
    destructiveButtonIndex,
    cancelButtonIndex,
    onSelect,
    onCancel,
}) => {
    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
            <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onCancel}>
                <View style={styles.container}>
                    {options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.optionWrapper}
                            onPress={() => onSelect(index)}
                        >
                            <LinearGradient
                                colors={['#778EAA', '#778EAA']}
                                style={styles.optionButton}
                            >
                                <Text
                                    style={[
                                        styles.optionText,
                                        index === destructiveButtonIndex && styles.destructiveText,
                                    ]}
                                >
                                    {option}
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    ))}
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: 'transparent',
        padding: 10,
    },
    optionWrapper: {
        marginBottom: 10,
    },
    optionButton: {
        paddingVertical: 16,
        alignItems: 'center',
        borderRadius: 8,
    },
    optionText: {
        color: '#fff',
        fontSize: 17,
    },
    destructiveText: {
        color: '#D20203',
    },
});

export default CustomActionSheet;
