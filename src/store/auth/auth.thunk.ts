import { Action } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { axiosInstance } from "../../utils/axiosInstance";
import { User } from "../../utils/interfaces";
import { routes } from "../../utils/routes";
import { AppDispatch, AppThunk } from "../store";
import { authActions } from "./auth.state";

export function setTokenThunk(token: string): AppThunk {
    return (dispatch: any) => {
        localStorage.setItem("token", token);
        dispatch(authActions.setToken(token));
    };
}

export function setUserThunk(user: User): AppThunk {
    return (dispatch: any) => {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(authActions.setUser(user));
    };
}

// this is login
export function setUserAndTokenThunk(
    user: User,
    token: string,
): AppThunk {
    return (dispatch) => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        dispatch(authActions.setUser(user));
        dispatch(authActions.setToken(token));
    };
}


export function RegisterThunk(user: Omit<User, "_id">) {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axiosInstance.post("/auth/register", user)
            localStorage.setItem("user", JSON.stringify(response.data.data));
            localStorage.setItem("token", response.data.token);
            console.log(response.data);

        } catch (error) {
            console.log(error);

        }
    }
}

export function LoginThunk(email: string, password: string, navigate: NavigateFunction) {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axiosInstance.post("/auth/login", { email, password })
            console.log(response);

            if (response.data.success === true) {
                localStorage.setItem("user", JSON.stringify(response.data.data));
                localStorage.setItem("token", response.data.token);
                dispatch(authActions.setUser(response.data.data))
                dispatch(authActions.setToken(response.data.token))
                navigate(`${routes.DASHBOARD_HOME}`)
            }

        } catch (error) {
            console.log(error);

        }
    }
}

