import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';

const CustomSlider = ({
    value,
    onValueChange,
    hideThumb = false,
    minimumValue = 0,
    maximumValue = 100,
    step = 1,
}) => {
    return (
        <View style={styles.sliderContainer}>
            <View style={styles.trackContainer}>
                <LinearGradient
                    colors={['#E1C285', '#9F7E3D']}
                    start={[1, 0]}
                    end={[0, 0]}
                    style={[styles.trackFill, { width: `${value}%` }]}
                />
                <View
                    style={[
                        styles.trackUnfilled,
                        {
                            left: `${value}%`,
                            width: `${100 - value}%`,
                        },
                    ]}
                />
                <View style={styles.trackBorder} />
            </View>

            <Slider
                style={styles.slider}
                minimumValue={minimumValue}
                maximumValue={maximumValue}
                step={step}
                value={value}
                onValueChange={onValueChange}
                minimumTrackTintColor="transparent"
                maximumTrackTintColor="transparent"
                thumbTintColor="transparent"
            />

            {!hideThumb && (
                <View
                    style={[
                        styles.thumbWrapper,
                        { left: `${value}%` },
                        styles.thumbWrapperMarginLeft,
                    ]}
                >
                    <LinearGradient
                        colors={['#E1C285', '#9F7E3D']}
                        start={[1, 0]}
                        end={[0, 0]}
                        style={styles.thumbGradientBorder}
                    >
                        <View style={styles.thumbCenterWhite}>
                            <LinearGradient
                                colors={['#E1C285', '#9F7E3D']}
                                start={[1, 0]}
                                end={[0, 0]}
                                style={styles.thumbCenterGradientCircle}
                            />
                        </View>
                    </LinearGradient>
                </View>
            )}

            <View
                style={[
                    styles.valueLabel,
                    { left: `${value}%` },
                    styles.valueLabelMarginLeft,
                ]}
            >
                <Text style={styles.valueLabelText}>{value}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sliderContainer: {
        position: 'relative',
        height: 40,
        justifyContent: 'center',
    },
    trackContainer: {
        position: 'relative',
        height: 22,
        borderRadius: 11,
        overflow: 'hidden',
    },
    trackFill: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
    },
    trackUnfilled: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        backgroundColor: '#3B403F99',
    },
    trackBorder: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: '#3D3D3D4D',
    },
    slider: {
        position: 'absolute',
        width: '100%',
        height: 40,
    },
    thumbWrapper: {
        position: 'absolute',
        top: '50%',
        width: 32,
        height: 32,
        borderRadius: 16,
        transform: [{ translateY: -16 }],
    },
    thumbWrapperMarginLeft: {
        marginLeft: -16,
    },
    thumbGradientBorder: {
        flex: 1,
        borderRadius: 16,
        padding: 3,
    },
    thumbCenterWhite: {
        flex: 1,
        borderRadius: 13,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    thumbCenterGradientCircle: {
        width: 16,
        height: 16,
        borderRadius: 8,
    },
    valueLabel: {
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: 22 }],
    },
    valueLabelMarginLeft: {
        marginLeft: -10,
    },
    valueLabelText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
});

export default CustomSlider;
