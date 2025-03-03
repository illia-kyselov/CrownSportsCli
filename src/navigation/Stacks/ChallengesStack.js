import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CrownChallengesScreen from '../../screens/Challenge/CrownChallengesScreen';

const Stack = createNativeStackNavigator();

export default function ChallengesStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CrownChallenges" component={CrownChallengesScreen} />
        </Stack.Navigator>
    );
}
