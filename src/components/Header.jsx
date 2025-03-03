import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import CrownSVG from '../assets/icons/CrownSVG';

const Header = ({ title }) => {
    const points = useSelector((state) => state.score.points);

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.screenTitle}>{title}</Text>
            <View style={styles.crownCounter}>
                <Text style={styles.crownText}>{points}</Text>
                <CrownSVG color="#fff" style={styles.crownSVG} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 24,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    screenTitle: {
        fontFamily: 'SF Pro Text',
        fontWeight: '800',
        fontSize: 24,
        color: '#fff',
    },
    crownCounter: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#778EAA',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    crownText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 14,
        color: '#fff',
    },
    crownSVG: {
        marginLeft: 2,
    },
});

export default Header;
