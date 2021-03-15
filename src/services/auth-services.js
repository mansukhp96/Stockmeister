import * as api from '../api/api.js'

export const register = (formData, router) => async (dispatch) => {
    try {
        //register the user
        const { data } = await api.register(formData);
        dispatch({ type : "AUTH", data });
        router.push("/");
    }
    catch (error) {
        console.log(error);
    }
}

export const login = (loginFormData, router) => async (dispatch) => {
    try {
        //login the user
        const { data } = await api.login(loginFormData);
        dispatch({ type : "AUTH", data });
        router.push("/");
    }
    catch (error) {
        console.log(error);
    }
}