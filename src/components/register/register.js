import React, {useState} from 'react'
import './register.css'
import {Link, useHistory} from "react-router-dom";
import GoogleLogin from 'react-google-login';
import {useDispatch} from "react-redux";
import * as api from "../../services/auth-service";
import {useAlert} from "react-alert";
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";

//Initial states
const formInitialState = {
    firstName : "", lastName : "", email : "", password : "", rePassword : "", followers : 0, following: 0
};

const Register = () => {
    const alert = useAlert();

    //States
    const [formData, setFormData] = useState(formInitialState);
    const [trader, setTrader] = useState(true);
    const [manager, setManager] = useState(false);

    //Constants
    const dispatch = useDispatch();
    const history = useHistory();

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
    }

    const registerService = (formData, history) => async (dispatch) => {
        try {
            //register the user
            const { data } = await api.register(formData);
            console.log(data);
            dispatch({ type : "AUTH", data });
            history.push("/");
        }
        catch (error) {
            alert.show(error.response.data.message);
            console.log(error);
        }
    }

    //handlers
    const handleInput = (e) => {
        alert.removeAll();
        setFormData({ ...formData, [e.target.name] : e.target.value });
    }

    const handleSubmit = (e) => {
        alert.removeAll();
        e.preventDefault();
        let result = formData;
        if(trader) {
            result = { ...formData, accountType : "trader"};
        }
        else {
            result = { ...formData, accountType : "manager"};
        }

        //sign up service
        dispatch(registerService(result, history));
    };

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
    }

    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-register-container">
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
                            <div className="row justify-content-center">
                                <div className="col-5 stockmeister-form-label">
                                    First Name
                                </div>
                                <div className="col stockmeister-form-label">
                                    Last Name
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <input className="col-5 stockmeister-form-input"
                                       onChange={handleInput}
                                       name="firstName"
                                       type="text"
                                       required={true}/>
                                &nbsp;
                                <input className="col-6 stockmeister-form-input"
                                       onChange={handleInput}
                                       name="lastName"
                                       type="text"
                                       required={true}/>
                            </div>
                            <div className="stockmeister-form-label">
                                Email
                            </div>
                            <input className="stockmeister-form-input"
                                   onChange={handleInput}
                                   name="email"
                                   type="email"
                                   required={true}/>
                            <div className="stockmeister-form-label">
                                Password
                            </div>
                            <input className="stockmeister-form-input"
                                   onChange={handleInput}
                                   name="password"
                                   type="password"
                                   required={true}/>
                            <div className="stockmeister-form-label">
                                Re-enter Password
                            </div>
                            <input className="stockmeister-form-input"
                                   onChange={handleInput}
                                   name="rePassword"
                                   type="password"
                                   required={true}/>
                            <button type="submit"
                                    className="stockmeister-register-btn">
                                SIGN UP
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
                                                 Google Sign Up
                                             </button>
                                         )
                                         }/>
                            <div className="row">
                                <Link to="/login"
                                      className="col-12 stockmeister-register-text text-decoration-none">
                                    Existing user? Login
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Register