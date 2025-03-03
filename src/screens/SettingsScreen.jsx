import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../components/Header';
import PrivacySVG from '../assets/icons/settings/PrivacySVG';
import WebSiteSVG from '../assets/icons/settings/WebSiteSVG';
import TermsSVG from '../assets/icons/settings/TermsSVG';

export default function SettingsScreen() {
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={['#6B7A90', '#272C34']}
                style={styles.linearGradient}
            >
                <SafeAreaView style={styles.safeArea}>
                    <ImageBackground
                        source={require('../assets/CrownBlurBG.png')}
                        style={styles.backgroundImage}
                        blurRadius={42}
                    >
                        <View style={styles.container}>
                            <Header title="Crown game" />
                            <View style={styles.marginBottom42} />

                            <TouchableOpacity style={styles.settingBlock}>
                                <Text style={styles.settingText}>Privacy Policy</Text>
                                <PrivacySVG />
                            </TouchableOpacity>

                            <View style={styles.height18} />

                            <TouchableOpacity style={styles.settingBlock}>
                                <Text style={styles.settingText}>Developer website</Text>
                                <WebSiteSVG />
                            </TouchableOpacity>

                            <View style={styles.height18} />

                            <TouchableOpacity style={styles.settingBlock}>
                                <Text style={styles.settingText}>Terms of use</Text>
                                <TermsSVG />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    marginBottom42: {
        marginBottom: 42,
    },
    height18: {
        height: 18,
    },
    settingBlock: {
        height: 76,
        borderRadius: 8,
        paddingLeft: 16,
        paddingRight: 24,
        paddingVertical: 20,
        backgroundColor: '#778EAA',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    settingText: {
        fontFamily: 'SF Pro Display',
        fontWeight: '800',
        fontSize: 18,
        color: '#fff',
    },
});
