import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    minimumWage: '',
    budget: '',
    currency: 'tl',
    dollar: '',
};
export const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        incrementBudget: (state, { payload }) => {
            return { ...state, budget: state.budget + payload };
        },
        decrementBudget: (state, { payload }) => {
            return { ...state, budget: state.budget - payload };
        },
        setCurrency: (state, { payload }) => {
            return { ...state, currency: payload };
        },
        setBudget: (state, { payload }) => {
            return { ...state, budget: payload };
        },
        setMinimumWage: (state, { payload }) => {
            return { ...state, minimumWage: payload };
        },
        setDollar: (state, { payload }) => {
            return { ...state, dollar: payload };
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    incrementBudget,
    decrementBudget,
    incrementByAmount,
    setCurrency,
    setBudget,
    setMinimumWage,
    setDollar,
} = budgetSlice.actions;

export default budgetSlice.reducer;
