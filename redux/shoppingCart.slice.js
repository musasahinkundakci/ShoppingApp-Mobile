import { createSlice } from '@reduxjs/toolkit';
import { years } from '../fakeData/years';
const initialState = {
    year: years[years.length - 1],
    items: [],
};
export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addItem: (state, { payload }) => {
            const index = state.items.findIndex((item) => item.id === payload.id);
            const tempItems = [...state.items];
            if (index !== -1) {
                const tempItem = { ...tempItems[index], count: tempItems[index].count + 1 };
                return {
                    ...state,
                    items: [...tempItems.slice(0, index), tempItem, ...tempItems.slice(index + 1)],
                };
            } else {
                const tempItem = { ...payload, count: 1 };
                return {
                    ...state,
                    items: [...tempItems, tempItem],
                };
            }
        },
        removeItem: (state, { payload }) => {
            return {
                ...state,
                items: state.items.filter((item) => item.id !== payload.id),
            };
        },
        resetItems: (state) => {
            return { ...state, items: [] };
        },
        setShoppingCartYear: (state, { payload }) => {
            return {
                ...state,
                year: payload,
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, resetItems, setShoppingCartYear } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
