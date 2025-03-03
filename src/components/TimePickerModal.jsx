import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePickerModal = ({ visible, selectedTime, onTimeChange, onRequestClose }) => {
    return (
        <Modal transparent animationType="fade" visible={visible} onRequestClose={onRequestClose}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <DateTimePicker
                        value={selectedTime || new Date()}
                        mode="time"
                        display="spinner"
                        onChange={onTimeChange}
                        themeVariant="dark"
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        backgroundColor: '#222',
        borderRadius: 8,
        padding: 16,
    },
});

export default TimePickerModal;
