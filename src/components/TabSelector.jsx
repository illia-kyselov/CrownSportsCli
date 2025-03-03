import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TabSelector = ({ selectedCategory, setSelectedCategory, labels }) => {
    const renderTabButton = (label) => {
        const isSelected = selectedCategory.toLowerCase() === label.toLowerCase();

        if (isSelected) {
            return (
                <TouchableOpacity
                    key={label}
                    activeOpacity={0.9}
                    onPress={() => setSelectedCategory(label.toLowerCase())}
                    style={styles.tabButtonWrapper}
                >
                    <LinearGradient
                        colors={['#E1C285', '#9F7E3D']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={[styles.tabButtonGradient, styles.tabButtonShadow]}
                    >
                        <Text style={[styles.tabButtonText, styles.tabButtonTextActive]}>
                            {label}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            );
        }

        return (
            <TouchableOpacity
                key={label}
                activeOpacity={0.9}
                onPress={() => setSelectedCategory(label.toLowerCase())}
                style={styles.tabButtonWrapper}
            >
                <View style={styles.tabButtonInactive}>
                    <Text style={styles.tabButtonText}>{label}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.tabsContainer}>
            {labels.map((label) => (
                <React.Fragment key={label}>
                    {renderTabButton(label)}
                </React.Fragment>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    tabsContainer: {
        backgroundColor: '#778EAA',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        borderRadius: 8,
        padding: 4,
    },
    tabButtonWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    tabButtonGradient: {
        width: '95%',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#0000000A',
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabButtonInactive: {
        width: '95%',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#0000000A',
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabButtonShadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
    },
    tabButtonText: {
        fontFamily: 'SF Pro',
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
    },
    tabButtonTextActive: {
        fontWeight: '600',
    },
});

export default TabSelector;
