import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth.state";
import { alertReducer } from "./UI/Alert.state";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        alert: alertReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;