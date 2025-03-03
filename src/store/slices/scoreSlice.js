import { createSlice } from '@reduxjs/toolkit';

const scoreSlice = createSlice({
    name: 'score',
    initialState: { points: 100 },
    reducers: {
        addScore: (state, action) => {
            state.points += action.payload;
        },
    },
});

export const { addScore } = scoreSlice.actions;
export default scoreSlice.reducer;
