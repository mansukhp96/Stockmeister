import React from 'react'
import './login.css'
import NavbarSimple from "../navbar/navbar-simple";
import GoogleLogin from 'react-google-login';
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';

const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        
        try {
            dispatch({ type : "AUTH", data : { result, token } });
            history.push("/")
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
                              action="#">
                            <div className="stockmeister-form-label">
                                Email
                            </div>
                            <input className="stockmeister-form-input" type="email" required={true}/>
                            <div className="stockmeister-form-label">
                                Password
                            </div>
                            <input className="stockmeister-form-input" type="password" required={true}/>
                            <button className="stockmeister-login-btn">
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