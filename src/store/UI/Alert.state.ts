import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    open: boolean;
    message: string;
}

const initialState: InitialState = {
    open: false,
    message: ""
}

const alertSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setState(state, action: PayloadAction<InitialState>) {
            state.open = action.payload.open
            state.message = action.payload.message
        }
    }
})

export const alertActions = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
