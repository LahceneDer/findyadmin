import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils/interfaces";

const initialState = {
    user: localStorage.getItem("user") !== "undefined" ? JSON.parse(localStorage.getItem("user")!) : null,
    token: localStorage.getItem("token") !== "undefined" ? localStorage.getItem("token")! : ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload
        },
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload
        },
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;