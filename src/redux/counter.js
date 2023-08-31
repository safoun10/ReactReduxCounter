import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: [{task: 1}],
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.count -= action.payload;
        },
        multiplyByAmount: (state, action) => {
            state.count *= action.payload;
        }
    },
});

export const { increment, decrement, incrementByAmount, decrementByAmount, multiplyByAmount } = counterSlice.actions;

export default counterSlice.reducer;
