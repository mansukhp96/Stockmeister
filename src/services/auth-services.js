export const register = (formData, history) => async (dispatch) => {
    try {
        //register the user
        history.push("/");
    }
    catch (error) {
        console.log(error);
    }
}

export const login = (formData, history) => async (dispatch) => {
    try {
        //login the user
        history.push("/");
    }
    catch (error) {
        console.log(error);
    }
}