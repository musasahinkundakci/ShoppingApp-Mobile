import { createSlice } from '@reduxjs/toolkit';
import { years } from '../fakeData/years';
import { goods } from '../fakeData/goods';
const initialState = {
    year: years[years.length - 1],
};
export const yearSlice = createSlice({
    name: 'year',
    initialState,
    reducers: {
        setYear: (state, { payload }) => {
            return { ...state, year: payload };
        },
    },
});

// Action creators are generated for each case reducer function
export const { setYear } = yearSlice.actions;

export default yearSlice.reducer;
