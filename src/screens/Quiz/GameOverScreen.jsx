import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import BackButton from '../../components/UI/BackButton';
import BigButton from '../../components/UI/BigButton';
import CannotExecuteButton from '../../components/UI/CannotExecuteButton';

export default function GameOverScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    const { level, questionIndex } = route.params || {};

    const handleBackPress = () => {
        navigation.replace('MainTabs', { screen: 'Quiz', params: { screen: 'QuizMain' } });
    };

    const handleTryAgain = () => {
        navigation.replace('QuizQuestion', { level, questionIndex });
    };

    const handleClose = () => {
        navigation.replace('MainTabs', { screen: 'Quiz', params: { screen: 'QuizMain' } });
    };

    return (
        <View style={styles.root}>
            <ImageBackground
                source={require('../../assets/CrownBlurBG.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <SafeAreaView style={styles.safeArea}>
                    <BackButton style={styles.backBtn} onPress={handleBackPress} />
                    <View style={styles.spacer62} />

                    <View style={styles.content}>
                        <Text style={styles.mainTitle}>Game over!</Text>
                        <Text style={styles.subTitle}>Try again and take the prize!</Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <BigButton
                            title="Try again"
                            onPress={handleTryAgain}
                            containerStyle={styles.bigButtonContainerMargin}
                        />
                        <CannotExecuteButton
                            title="Close"
                            onPress={handleClose}
                            noMarginTop
                        />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#677990',
    },
    backgroundImage: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        marginHorizontal: 16,
    },
    backBtn: {
        marginTop: 12,
    },
    content: {
        alignItems: 'center',
    },
    mainTitle: {
        fontFamily: 'SF Pro',
        fontWeight: '900',
        fontSize: 32,
        color: '#fff',
        marginBottom: 14,
    },
    subTitle: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 32,
    },
    spacer62: {
        marginBottom: 62,
    },
    bigButtonContainerMargin: {
        marginBottom: 20,
    },
});
