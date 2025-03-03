import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import NotifySVG from '../assets/sport/NotifySVG';
import NoNotifySVG from '../assets/sport/NoNotifySVG';

export default function NotificationSwitch({ enabled, onToggle, noBottomMargin = false }) {
    return (
        <View style={[styles.notificationsBlock, noBottomMargin && styles.noBottomMargin]}>
            <View>
                <Text style={styles.notificationsLabel}>Notifications</Text>
            </View>

            <TouchableOpacity onPress={onToggle} activeOpacity={0.9} style={styles.switchOuter}>
                {enabled ? (
                    <LinearGradient
                        colors={['#E1C285', '#9F7E3D']}
                        start={[1, 0]}
                        end={[0, 0]}
                        style={styles.switchGradient}
                    >
                        <View style={[styles.switchKnob, styles.knobRight]}>
                            <NotifySVG />
                        </View>
                    </LinearGradient>
                ) : (
                    <View style={styles.switchInactive}>
                        <View style={[styles.switchKnob, styles.knobLeft]}>
                            <NoNotifySVG />
                        </View>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    notificationsBlock: {
        backgroundColor: '#778EAA',
        borderRadius: 8,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    noBottomMargin: {
        marginBottom: 0,
    },
    notificationsLabel: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
    },
    switchOuter: {
        width: 60,
        height: 32,
        borderRadius: 16,
    },
    switchGradient: {
        flex: 1,
        borderRadius: 16,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 2,
    },
    switchInactive: {
        flex: 1,
        backgroundColor: '#677990',
        borderRadius: 16,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 2,
    },
    switchKnob: {
        position: 'absolute',
        top: 2,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 2,
    },
    knobRight: {
        right: 2,
    },
    knobLeft: {
        left: 2,
    },
});

