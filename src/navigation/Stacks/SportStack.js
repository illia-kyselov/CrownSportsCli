import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainSportScreen from '../../screens/Sport/MainSportScreen';

const Stack = createNativeStackNavigator();

export default function SportStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainSport" component={MainSportScreen} />
        </Stack.Navigator>
    );
}
