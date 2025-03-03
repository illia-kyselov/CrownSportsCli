import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    easy: [
        {
            id: 'easy-1',
            title: 'Quadriceps',
            question: 'What is the primary muscle group worked during a squat?',
            image: require('../../assets/quiz/easy/Quadriceps.png'),
            answers: [
                { text: 'Biceps', isCorrect: false },
                { text: 'Quadriceps', isCorrect: true },
                { text: 'Triceps', isCorrect: false },
            ],
        },
        {
            id: 'easy-2',
            title: 'Running',
            question: 'Which exercise is best for improving cardiovascular endurance?',
            image: require('../../assets/quiz/easy/Running.png'),
            answers: [
                { text: 'Bench press', isCorrect: false },
                { text: 'Running', isCorrect: true },
                { text: 'Deadlift', isCorrect: false },
            ],
        },
        {
            id: 'easy-3',
            title: 'Push-Ups',
            question: 'What is the main benefit of doing push-ups?',
            image: require('../../assets/quiz/easy/BuildsUpperBodyStrength.png'),
            answers: [
                { text: 'Improves flexibility', isCorrect: false },
                { text: 'Builds upper body strength', isCorrect: true },
                { text: 'Enhances balance', isCorrect: false },
            ],
        },
        {
            id: 'easy-4',
            title: 'Plank',
            question: 'Which exercise primarily targets the abdominal muscles?',
            image: require('../../assets/quiz/easy/Plank.png'),
            answers: [
                { text: 'Lunges', isCorrect: false },
                { text: 'Plank', isCorrect: true },
                { text: 'Shoulder press', isCorrect: false },
            ],
        },
    ],
    hard: [
        {
            id: 'hard-1',
            title: 'Clean and Jerk',
            question: 'Which of the following exercises is considered an Olympic lift?',
            image: require('../../assets/quiz/hard/CleanAndJerk.png'),
            answers: [
                { text: 'Cleans and Jerks', isCorrect: true },
                { text: 'Deadlift', isCorrect: false },
                { text: 'Bench press', isCorrect: false },
            ],
        },
        {
            id: 'hard-2',
            title: 'Plyometrics',
            question: 'What is the primary benefit of plyometric exercises?',
            image: require('../../assets/quiz/hard/ImprovedExplosivePower.png'),
            answers: [
                { text: 'Increased flexibility', isCorrect: false },
                { text: 'Improved explosive power', isCorrect: true },
                { text: 'Enhanced core stability', isCorrect: false },
            ],
        },
        {
            id: 'hard-3',
            title: 'Turkish Get-Up',
            question: 'Which muscle group is primarily engaged during a Turkish Get-Up?',
            image: require('../../assets/quiz/hard/Shoulders.png'),
            answers: [
                { text: 'Hamstrings', isCorrect: false },
                { text: 'Shoulders', isCorrect: true },
                { text: 'Calves', isCorrect: false },
            ],
        },
        {
            id: 'hard-4',
            title: 'Resistance Bands',
            question: 'What is the main purpose of using resistance bands in training?',
            image: require('../../assets/quiz/hard/ToProvideVariableResistance.png'),
            answers: [
                { text: 'Increase power output', isCorrect: false },
                { text: 'To provide variable resistance', isCorrect: true },
                { text: 'To enhance flexibility', isCorrect: false },
            ],
        },
    ],
    incredible: [
        {
            id: 'incredible-1',
            title: 'Plank (Transverse Abdominis)',
            question: 'Which of the following exercises primarily targets the transverse abdominis?',
            image: require('../../assets/quiz/incredible/Plank.png'),
            answers: [
                { text: 'Bicycle Crunches', isCorrect: false },
                { text: 'Plank', isCorrect: true },
                { text: 'Shoulder Press', isCorrect: false },
            ],
        },
        {
            id: 'incredible-2',
            title: 'Clean (Weightlifting)',
            question: 'In Olympic weightlifting, what is the phase of the lift where the barbell is brought from the floor to the shoulders?',
            image: require('../../assets/quiz/incredible/Clean.png'),
            answers: [
                { text: 'Clean', isCorrect: true },
                { text: 'Snatch', isCorrect: false },
                { text: 'Jerk', isCorrect: false },
            ],
        },
        {
            id: 'incredible-3',
            title: 'HIIT Benefits',
            question: 'What is the primary physiological benefit of high-intensity interval training (HIIT)?',
            image: require('../../assets/quiz/incredible/EnhancedCardiovascularEfficiency.png'),
            answers: [
                { text: 'Increased muscle hypertrophy', isCorrect: false },
                { text: 'Enhanced cardiovascular efficiency', isCorrect: true },
                { text: 'Improved flexibility', isCorrect: false },
            ],
        },
        {
            id: 'incredible-4',
            title: 'Kettlebell Swing',
            question: 'Which exercise is considered a functional movement that mimics real-life actions?',
            image: require('../../assets/quiz/incredible/KettlebellSwing.png'),
            answers: [
                { text: 'Leg press', isCorrect: false },
                { text: 'Kettlebell Swing', isCorrect: true },
                { text: 'Seated rowing', isCorrect: false },
            ],
        },
    ],
    progress: {
        easy: {
            completed: false,
            currentQuestionIndex: 0,
        },
        hard: {
            completed: false,
            currentQuestionIndex: 0,
        },
        incredible: {
            completed: false,
            currentQuestionIndex: 0,
        },
    },
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuizProgress: (state, action) => {
            const { level, currentQuestionIndex, completed } = action.payload;
            if (state.progress[level]) {
                state.progress[level].currentQuestionIndex = currentQuestionIndex;
                if (completed !== undefined) {
                    state.progress[level].completed = completed;
                }
            }
        },
        resetQuizProgress: (state, action) => {
            const { level } = action.payload;
            if (state.progress[level]) {
                state.progress[level] = { completed: false, currentQuestionIndex: 0 };
            }
        },
    },
});

export const { setQuizProgress, resetQuizProgress } = quizSlice.actions;

export default quizSlice.reducer;
