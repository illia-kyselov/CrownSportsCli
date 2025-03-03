import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';

import SportSVG from '../assets/navbar/SportSVG';
import CupSVG from '../assets/navbar/CupSVG';
import QuizSVG from '../assets/navbar/QuizSVG';
import SettingsSVG from '../assets/navbar/SettingsSVG';
import SportStack from './Stacks/SportStack';
import ChallengesStack from './Stacks/ChallengesStack';
import QuizStack from './Stacks/QuizStack';
import SettingsStack from './Stacks/SettingsStack';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused, size) => {
    let icon, label;
    switch (route.name) {
        case 'Sport':
            icon = <SportSVG color={focused ? '#FFFFFF' : '#9DB2CE'} size={size} />;
            label = 'Sport';
            break;
        case 'Challenges':
            icon = <CupSVG color={focused ? '#FFFFFF' : '#9DB2CE'} size={size} />;
            label = 'Challenges';
            break;
        case 'Quiz':
            icon = <QuizSVG color={focused ? '#FFFFFF' : '#9DB2CE'} size={size} />;
            label = 'Quiz';
            break;
        case 'Settings':
            icon = <SettingsSVG color={focused ? '#FFFFFF' : '#9DB2CE'} size={size} />;
            label = 'Settings';
            break;
        default:
            icon = null;
            label = '';
    }
    return (
        <View style={[styles.iconContainer, focused ? styles.activeTab : styles.inactiveTab]}>
            {icon}
            {focused && <Text style={[styles.iconLabel, styles.focusedIconLabel]}>{label}</Text>}
        </View>
    );
};

export default function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarIcon: ({ focused, size }) => getTabBarIcon(route, focused, size),
            })}
        >
            <Tab.Screen name="Sport" component={SportStack} />
            <Tab.Screen name="Challenges" component={ChallengesStack} />
            <Tab.Screen name="Quiz" component={QuizStack} />
            <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#677990',
        height: 106,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        marginTop: 20,
    },
    activeTab: {
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderColor: '#FFFFFF',
        minWidth: 100,
        paddingHorizontal: 8,
    },
    inactiveTab: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    iconLabel: {
        fontFamily: 'SF Pro',
        fontWeight: '600',
        fontSize: 13,
        marginLeft: 6,
    },
    focusedIconLabel: {
        color: '#FFFFFF',
    },
});
