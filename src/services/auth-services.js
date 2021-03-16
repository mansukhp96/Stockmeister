import * as api from '../api/api.js'

export const register = (formData, history) => async (dispatch) => {
    try {
        //register the user
        const { data } = await api.register(formData);
        console.log(data);
        dispatch({ type : "AUTH", data });
        history.push("/");
    }
    catch (error) {
        alert(error.response.data.message);
        console.log(error);
    }
}

export const login = (loginFormData, history) => async (dispatch) => {
    try {
        //login the user
        const { data } = await api.login(loginFormData);
        dispatch({ type : "AUTH", data });
        history.push("/");
    }
    catch (error) {
        alert(error.response.data.message);
        console.log(error);
    }
}

export const googleLogin = (result, token, history) => async (dispatch) => {
    try {
        //Google login the user
        const { data } = await api.gglLogin({ token : token });
        data.result.imageUrl = result.imageUrl;
        dispatch({ type : "AUTH", data });
        history.push("/");
    }
    catch (error) {
        alert(error.response.data.message);
        console.log(error);
    }
}