import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    trainings: [

    ],
    selectedDate: null,
};

const trainingSlice = createSlice({
    name: 'training',
    initialState,
    reducers: {
        addTraining: (state, action) => {
            state.trainings.push(action.payload);
        },
        removeTraining: (state, action) => {
            state.trainings = state.trainings.filter(
                training => training.id !== action.payload
            );
        },
        updateTraining: (state, action) => {
            const index = state.trainings.findIndex(
                training => training.id === action.payload.id
            );
            if (index !== -1) {
                state.trainings[index] = action.payload;
            }
        },
        setSelectedDate: (state, action) => {
            state.selectedDate = action.payload;
        },
    },
});

export const {
    addTraining,
    removeTraining,
    updateTraining,
    setSelectedDate,
} = trainingSlice.actions;

export const selectTrainings = (state) => state.training.trainings;

export const selectSelectedDate = (state) => state.training.selectedDate;

export const selectFilteredTrainings = (state) => {
    const selectedDate = state.training.selectedDate;
    if (selectedDate) {
        return state.training.trainings.filter(
            (training) => training.day === selectedDate
        );
    }
    return state.training.trainings;
};

export const selectStats = createSelector(
    (state) => state.training.trainings,
    (trainings) => {
        const totalTrainings = trainings.length;
        let totalMinutes = 0;
        let totalCalories = 0;
        let totalIntensity = 0;

        trainings.forEach((training) => {
            if (training.timeSpent) {
                const hourMatch = training.timeSpent.match(/(\d+)\s*h/);
                const minuteMatch = training.timeSpent.match(/(\d+)\s*m/);
                let minutes = 0;
                if (hourMatch) {
                    minutes += parseInt(hourMatch[1], 10) * 60;
                }
                if (minuteMatch) {
                    minutes += parseInt(minuteMatch[1], 10);
                }
                totalMinutes += minutes;
            }
            if (training.calories) {
                totalCalories += Number(training.calories);
            }
            if (training.intensity) {
                totalIntensity += training.intensity;
            }
        });

        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const timeSpent = `${hours}h ${minutes}m`;

        const averageIntensity =
            totalTrainings > 0 ? Math.round(totalIntensity / totalTrainings) : 0;

        return {
            totalTrainings,
            timeSpent,
            averageIntensity,
            totalCaloriesBurned: totalCalories,
        };
    }
);

export default trainingSlice.reducer;
