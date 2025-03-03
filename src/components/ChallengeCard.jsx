import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ChallengeCard({ item, onPress }) {
    const isUserImage = !!item.userImage;

    const getImageSource = () => {
        if (item.userImage) {
            if (typeof item.userImage === 'object' && item.userImage.uri) {
                return item.userImage;
            }
            if (typeof item.userImage === 'string') {
                return { uri: item.userImage };
            }
            return item.userImage;
        } else if (item.image) {
            if (typeof item.image === 'object' && item.image.uri) {
                return item.image;
            }
            if (typeof item.image === 'string') {
                return { uri: item.image };
            }
            return item.image;
        }
        return null;
    };

    const imageSource = getImageSource();

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View style={styles.challengeCard}>
                {imageSource && (
                    <Image
                        source={imageSource}
                        style={[
                            styles.challengeImage,
                            isUserImage && styles.userImage,
                        ]}
                    />
                )}
                <View style={styles.cardContent}>
                    <Text style={styles.challengeTitle}>{item.title}</Text>
                    <Text
                        style={styles.challengeDescription}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {item.description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    challengeCard: {
        backgroundColor: '#778EAA',
        borderRadius: 8,
        padding: 16,
    },
    challengeImage: {
        width: '100%',
        borderRadius: 8,
        resizeMode: 'cover',
        marginBottom: 12,
    },
    userImage: {
        height: 140,
    },
    cardContent: {},
    challengeTitle: {
        fontFamily: 'SF Pro Display',
        fontWeight: '800',
        fontSize: 18,
        color: '#fff',
        marginBottom: 8,
    },
    challengeDescription: {
        fontFamily: 'SF Pro Display',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
    },
});
