import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './src/navigation/MainTabs';

import ChallengeDetailsScreen from './src/screens/Challenge/ChallengeDetailsScreen';
import ChallengeSuccessScreen from './src/screens/Challenge/ChallengeSuccessScreen';
import CreateChallengeScreen from './src/screens/Challenge/CreateChallengeScreen';
import CreateChallengeStep2Screen from './src/screens/Challenge/CreateChallengeStep2Screen';
import AddChallengeSuccessScreen from './src/screens/Challenge/AddChallengeSuccessScreen';
import CrownChallengesScreen from './src/screens/Challenge/CrownChallengesScreen';

import QuizMainScreen from './src/screens/Quiz/QuizMainScreen';
import GameOverScreen from './src/screens/Quiz/GameOverScreen';
import QuizSuccessScreen from './src/screens/Quiz/QuizSuccessScreen';

import SettingsScreen from './src/screens/SettingsScreen';
import QuizQuestionScreen from './src/screens/Quiz/QuizQuestionScreen';
import MainSportScreen from './src/screens/Sport/MainSportScreen';
import AddTrainingScreen from './src/screens/Sport/AddTrainingScreen';
import AddTrainingStep2Screen from './src/screens/Sport/AddTrainingStep2Screen';
import AddTrainingSuccessScreen from './src/screens/Sport/AddTrainingSuccessScreen';
import TrainingDetailsScreen from './src/screens/Sport/TrainingDetailsScreen';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="MainTabs" component={MainTabs} />

                        <Stack.Screen name="ChallengeDetails" component={ChallengeDetailsScreen} />
                        <Stack.Screen name="ChallengeSuccess" component={ChallengeSuccessScreen} />
                        <Stack.Screen name="CreateChallenge" component={CreateChallengeScreen} />
                        <Stack.Screen name="CreateChallengeStep2" component={CreateChallengeStep2Screen} />
                        <Stack.Screen name="AddChallengeSuccess" component={AddChallengeSuccessScreen} />
                        <Stack.Screen name="CrownChallenges" component={CrownChallengesScreen} />

                        <Stack.Screen name="QuizMain" component={QuizMainScreen} />
                        <Stack.Screen name="QuizQuestion" component={QuizQuestionScreen} />
                        <Stack.Screen name="QuizSuccess" component={QuizSuccessScreen} />
                        <Stack.Screen name="GameOver" component={GameOverScreen} />

                        <Stack.Screen name="MainSport" component={MainSportScreen} />
                        <Stack.Screen name="TrainingDetails" component={TrainingDetailsScreen} />
                        <Stack.Screen name="AddTraining" component={AddTrainingScreen} />
                        <Stack.Screen name="AddTrainingStep2" component={AddTrainingStep2Screen} />
                        <Stack.Screen name="AddTrainingSuccess" component={AddTrainingSuccessScreen} />

                        <Stack.Screen name="Settings" component={SettingsScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            {/* </PersistGate> */}
        </Provider>
    );
}