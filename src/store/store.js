import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import challengesReducer from './slices/challengesSlice';
import scoreReducer from './slices/scoreSlice';
import quizReducer from './slices/quizSlice';
import trainingReducer from './slices/trainingSlice';

const rootReducer = combineReducers({
    challenges: challengesReducer,
    score: scoreReducer,
    quiz: quizReducer,
    training: trainingReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['challenges', 'score', 'quiz', 'training'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
