import React, {useState} from 'react'
import './login.css'
import GoogleLogin from 'react-google-login';
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { useAlert } from 'react-alert'
import * as api from "../../services/auth-service";
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";

//Initial states
const loginFormInitialState = {
    email : "", password : ""
};

const Login = () => {
    const alert = useAlert();

    //States
    const [loginFormData, setLoginFormData] = useState(loginFormInitialState);
    const [trader, setTrader] = useState(true);
    const [manager, setManager] = useState(false);

    //Constants
    const dispatch = useDispatch();
    const history = useHistory();

    const loginService = (result, history) => async (dispatch) => {
        try {
            //login the user
            const { data } = await api.login(result);
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
            const { data } = await api.gglLogin({
                token : token,
                accountType : result.accountType
            });
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
        alert.removeAll();
        setLoginFormData({ ...loginFormData, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        alert.removeAll();
        e.preventDefault();
        let result = loginFormData;
        if(trader) {
            result = { ...loginFormData, accountType : "trader"};
        }
        else {
            result = { ...loginFormData, accountType : "manager"};
        }

        //Login service
        dispatch(loginService(result, history));
    }

    const googleSuccess = async (res) => {
        let result = res?.profileObj;
        const token = res?.tokenId;
        
        try {
            if(trader) {
                result = { ...result, accountType : "trader" }
            }
            else {
                result = { ...result, accountType: "manager" }
            }
            dispatch(googleLogin(result, token, history));
        }
        catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google sign up unsuccessful");
        alert.show("Google login failed");
    }

    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-login-container">
                <div className="stockmeister-form-wrapper">
                    <div className="stockmeister-form-content">
                        <div className="stockmeister-roles">
                            <ul className="stockmeister-roles-menu">
                                <li className="stockmeister-roles-nav">
                                    <Link onClick={() => {
                                        setTrader(true)
                                        setManager(false)}}
                                          className={`stockmeister-link-route-roles ${trader ? `stockmeister-link-route-roles-active` : ``} text-decoration-none`}>
                                        Trader
                                    </Link>
                                </li>
                                <li className="stockmeister-roles-nav">
                                    <Link onClick={() => {
                                        setTrader(false)
                                        setManager(true)}}
                                          className={`stockmeister-link-route-roles ${manager ? `stockmeister-link-route-roles-active` : ``} text-decoration-none`}>
                                        Manager
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <br/>
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
        </motion.div>
    )
}

export default Login