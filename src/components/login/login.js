import React, {useState} from 'react'
import './login.css'
import NavbarSimple from "../navbar/navbar-simple";
import GoogleLogin from 'react-google-login';
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { useAlert } from 'react-alert'
import * as api from "../../services/auth-service";

//Initial states
const loginFormInitialState = {
    email : "", password : ""
};

const Login = () => {
    const alert = useAlert();

    //States
    const [loginFormData, setLoginFormData] = useState(loginFormInitialState);

    //Constants
    const dispatch = useDispatch();
    const history = useHistory();

    const loginService = (loginFormData, history) => async (dispatch) => {
        try {
            //login the user
            const { data } = await api.login(loginFormData);
            dispatch({ type : "AUTH", data });
            history.push("/");
        }
        catch (error) {
            alert.show(error.response.data.message);
            console.log(error);
        }
    }

    const googleLogin = (result, token, history) => async (dispatch) => {

        try {
            //Google login the user
            const { data } = await api.gglLogin({ token : token });
            data.result.imageUrl = result.imageUrl;
            dispatch({ type : "AUTH", data });
            history.push("/");
        }
        catch (error) {
            alert.show(error.response.data.message);
            console.log(error);
        }
    };

    //Handlers
    const handleInput = (e) => {
        setLoginFormData({ ...loginFormData, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        alert.removeAll();
        e.preventDefault();

        //Login service
        dispatch(loginService(loginFormData, history));
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        
        try {
            dispatch(googleLogin(result, token, history));
        }
        catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("Google sign up unsuccessful")
    }

    return(
        <>
            <NavbarSimple/>
            <div className="stockmeister-login-container">
                <div className="stockmeister-form-wrapper">
                    <div className="stockmeister-form-content">
                        <form className="stockmeister-form"
                              onSubmit={handleSubmit}
                              action="#">
                            <div className="stockmeister-form-label">
                                Email
                            </div>
                            <input className="stockmeister-form-input"
                                   name="email"
                                   type="email"
                                   onChange={handleInput}
                                   required={true}/>
                            <div className="stockmeister-form-label">
                                Password
                            </div>
                            <input className="stockmeister-form-input"
                                   type="password"
                                   name="password"
                                   onChange={handleInput}
                                   required={true}/>
                            <button className="stockmeister-login-btn"
                                    type="submit">
                                LOGIN
                            </button>
                            <GoogleLogin clientId="773832370247-e8m7hoo3qe1ba9vu590rfhjm67f0itps.apps.googleusercontent.com"
                                         onSuccess={googleSuccess}
                                         onFailure={googleFailure}
                                         cookiePolicy="single_host_origin"
                                         render={(renderProps) => (
                                             <button className="stockmeister-register-google-btn"
                                                     onClick={renderProps.onClick}
                                                     disabled={renderProps.disabled}
                                                     color="primary">
                                                 Google Sign In
                                             </button>
                                         )
                                         }/>
                            <div className="row">
                                <Link to="/"
                                      className="col-6 stockmeister-forgot-text text-left text-decoration-none">
                                    Forgot password?
                                </Link>
                                <Link to="/register"
                                      className="col-6 stockmeister-register-text text-right text-decoration-none">
                                    New user? Register
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login