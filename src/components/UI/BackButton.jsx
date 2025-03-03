import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrowSVG from '../../assets/icons/BackArrowSVG';

const BackButton = ({ onPress, title = 'Back' }) => {
    const navigation = useNavigation();
    const handlePress = onPress ? onPress : () => navigation.goBack();

    return (
        <TouchableOpacity style={styles.backContainer} onPress={handlePress}>
            <BackArrowSVG />
            <Text style={styles.backText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backContainer: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    backText: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 17,
        color: '#fff',
        marginLeft: 6,
    },
});

export default BackButton;
