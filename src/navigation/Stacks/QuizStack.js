import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizMainScreen from '../../screens/Quiz/QuizMainScreen';

const Stack = createNativeStackNavigator();

export default function QuizStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="QuizMain" component={QuizMainScreen} />
        </Stack.Navigator>
    );
}
