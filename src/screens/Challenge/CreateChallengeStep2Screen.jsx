import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';

import BackButton from '../../components/UI/BackButton';
import BigButton from '../../components/UI/BigButton';
import PlusSVG from '../../assets/icons/PlusSVG';
import DeleteSVG from '../../assets/icons/DeleteSVG';

export default function CreateChallengeStep2Screen() {
    const navigation = useNavigation();
    const [coverImage, setCoverImage] = useState(null);
    const route = useRoute();

    const handlePickCover = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('Пользователь отменил выбор изображения');
            } else if (response.errorCode) {
                console.log('Ошибка ImagePicker: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                setCoverImage(response.assets[0].uri);
            }
        });
    };

    const handleDeleteCover = () => {
        setCoverImage(null);
    };

    const handleNextPress = () => {
        const { heading, description, goal, duration } = route.params;
        const reward = duration === 'week' ? '+ 20' : duration === 'month' ? '+ 250' : '+ 0';
        const challenge = {
            id: 'new-' + Date.now(),
            category: duration,
            title: heading,
            description: description,
            goal: goal,
            reward: reward,
            userImage: coverImage ? { uri: coverImage } : null,
            completed: false,
        };

        navigation.navigate('AddChallengeSuccess', { challenge });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <BackButton style={styles.backButtonMargin} onPress={() => navigation.goBack()} />
                <Text style={styles.title}>New challenge</Text>
                <Text style={styles.coverLabel}>Cover</Text>
                <LinearGradient
                    colors={['#E1C285', '#9F7E3D']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.coverBlock}
                >
                    {coverImage ? (
                        <>
                            <Image source={{ uri: coverImage }} style={styles.coverImage} />
                            <TouchableOpacity style={styles.deleteIcon} onPress={handleDeleteCover}>
                                <DeleteSVG />
                            </TouchableOpacity>
                        </>
                    ) : (
                        <TouchableOpacity style={styles.coverButton} onPress={handlePickCover}>
                            <PlusSVG />
                        </TouchableOpacity>
                    )}
                </LinearGradient>
                <View style={styles.crownContainer}>
                    <Image
                        source={require('../../assets/icons/ChallengeCrownIcon.png')}
                        style={styles.challengeCrownIcon}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <BigButton title="Next" onPress={handleNextPress} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#677990',
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    backButtonMargin: {
        marginBottom: 19,
    },
    title: {
        fontFamily: 'SF Pro',
        fontWeight: '900',
        fontSize: 32,
        color: '#fff',
        marginBottom: 32,
    },
    coverLabel: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        marginBottom: 12,
    },
    coverBlock: {
        height: 200,
        borderRadius: 6,
        marginBottom: 22,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1,
    },
    coverButton: {
        width: 100,
        height: 100,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    coverImage: {
        width: '100%',
        height: '100%',
        borderRadius: 6,
    },
    deleteIcon: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
    crownContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    challengeCrownIcon: {
        width: 200,
        height: 200,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 24,
    },
});
