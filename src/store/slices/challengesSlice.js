import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    challenges: [
        {
            id: 'week-1',
            category: 'week',
            title: 'Burpee Blast Challenge',
            image: require('../../assets/challenges/week/BurpeeBlastChallenge.png'),
            imageWithoutCrown: require('../../assets/challenges/withoutPoints/week/BurpeeBlastChallenge.png'),
            description: 'Complete as many burpees as you can in 5 minutes. Aim to increase your count each week.',
            reward: '+ 15',
            goal: '5 minutes of burpees',
            completed: false,
        },
        {
            id: 'week-2',
            category: 'week',
            title: 'Core Strength Challenge',
            image: require('../../assets/challenges/week/CoreStrengthChallenge.png'),
            imageWithoutCrown: require('../../assets/challenges/withoutPoints/week/CoreStrengthChallenge.png'),
            description: 'A fit individual engaging in various core exercises on a yoga mat, with a clock showing time elapsed',
            reward: '+ 20',
            goal: '15 minutes (increasing weekly)',
            completed: false,
        },
        {
            id: 'week-3',
            category: 'week',
            title: 'Step Count Challenge',
            image: require('../../assets/challenges/week/StepCountChallenge.png'),
            imageWithoutCrown: require('../../assets/challenges/withoutPoints/week/StepCountChallenge.png'),
            description: 'Aim to walk at least 10,000 steps each day for a week. Use a pedometer or fitness tracker to monitor your progress.',
            reward: '+ 30',
            goal: '10,000 steps daily',
            completed: false,
        },
        {
            id: 'week-4',
            category: 'week',
            title: 'Squat Challenge',
            image: require('../../assets/challenges/week/SquatChallenge.png'),
            imageWithoutCrown: require('../../assets/challenges/withoutPoints/week/SquatChallenge.png'),
            description: 'Start with 30 squats on the first day and increase the number by 5 each day for a week.',
            reward: '+ 40',
            goal: '30 squats on Day 1 (increasing daily)',
            completed: false,
        },
        {
            id: 'month-1',
            category: 'month',
            title: '30-Day Running Challenge',
            image: require('../../assets/challenges/month/30DaysRunningChallenge.png'),
            imageWithoutCrown: require('../../assets/challenges/withoutPoints/month/30DaysRunningChallenge.png'),
            description: 'Run a total of 50 km over the month. Break it down into manageable distances each week and track your runs.',
            reward: '+ 100',
            goal: '50 km in one month',
            completed: false,
        },
        {
            id: 'month-2',
            category: 'month',
            title: 'Yoga Flexibility Challenge',
            image: require('../../assets/challenges/month/YogaFlexibilityChallenge.png'),
            imageWithoutCrown: require('../../assets/challenges/withoutPoints/month/YogaFlexibilityChallenge.png'),
            description: 'Practice yoga for at least 20 minutes every day for a month, focusing on different poses each week to improve flexibility.',
            reward: '+ 150',
            goal: '20 minutes daily',
            completed: false,
        },
        {
            id: 'month-3',
            category: 'month',
            title: 'Monthly Cycling Challenge',
            image: require('../../assets/challenges/month/MonthlyCyclingChallenge.png'),
            imageWithoutCrown: require('../../assets/challenges/withoutPoints/month/MonthlyCyclingChallenge.png'),
            description: 'Cycle at least 100 km over the month. Plan your rides and try to increase your distance each week.',
            reward: '+ 250',
            goal: '100 km in one month',
            completed: false,
        },
        {
            id: 'month-4',
            category: 'month',
            title: 'Strength Training Challenge',
            image: require('../../assets/challenges/month/StrengthTrainingChallenge.png'),
            imageWithoutCrown: require('../../assets/challenges/withoutPoints/month/StrengthTrainingChallenge.png'),
            description: 'Complete a strength training routine (including weights and resistance exercises) at least three times a week for the entire month.',
            reward: '+ 500',
            goal: '12 sessions (3 per week)',
            completed: false,
        },
    ],
};

const challengesSlice = createSlice({
    name: 'challenges',
    initialState,
    reducers: {
        markCompleted: (state, action) => {
            const challengeId = action.payload;
            const challenge = state.challenges.find((ch) => ch.id === challengeId);
            if (challenge) {
                challenge.completed = true;
            }
        },
        addChallenge: (state, action) => {
            state.challenges.push(action.payload);
        },
        markRewardAwarded: (state, action) => {
            const challengeId = action.payload;
            const challenge = state.challenges.find(ch => ch.id === challengeId);
            if (challenge) {
                challenge.rewardAwarded = true;
            }
        },
        deleteChallenge: (state, action) => {
            const challengeId = action.payload;
            state.challenges = state.challenges.filter(ch => ch.id !== challengeId);
        },
    },
});

export const { markCompleted, addChallenge, markRewardAwarded, deleteChallenge } = challengesSlice.actions;
export default challengesSlice.reducer;
