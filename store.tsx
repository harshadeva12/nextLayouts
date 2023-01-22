import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './pages/slices/counterSlice'

export const Store = configureStore({
    reducer:{counter:CounterReducer},
});