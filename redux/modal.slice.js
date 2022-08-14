import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isVisible: false,
};
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, { payload }) => {
            return { isVisible: payload };
        },
    },
});

// Action creators are generated for each case reducer function
export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
