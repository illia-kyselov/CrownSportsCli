import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SettingsMain" component={SettingsScreen} />
        </Stack.Navigator>
    );
}
