import React, {useState} from 'react'
import './login.css'
import NavbarSimple from "../navbar/navbar-simple";
import GoogleLogin from 'react-google-login';
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {googleLogin, login} from "../../services/auth-services";

//Initial states
const loginFormInitialState = {
    email : "", password : ""
};

const Login = () => {

    //States
    const [loginFormData, setLoginFormData] = useState(loginFormInitialState);

    //Constants
    const dispatch = useDispatch();
    const history = useHistory();

    //Handlers
    const handleInput = (e) => {
        setLoginFormData({ ...loginFormData, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Login service
        dispatch(login(loginFormData, history));
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