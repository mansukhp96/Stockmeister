import React, {useState} from 'react'
import './register.css'
import NavbarSimple from "../navbar/navbar-simple";
import {Link, useHistory} from "react-router-dom";
import GoogleLogin from 'react-google-login';
import {useDispatch} from "react-redux";
import {googleLogin, register} from "../../services/auth-services";

//Initial states
const formInitialState = {
    firstName : "", lastName : "", email : "", password : "", rePassword : "", followers : 0, following: 0
};

const Register = () => {

    //States
    const [formData, setFormData] = useState(formInitialState);

    //Constants
    const dispatch = useDispatch();
    const history = useHistory();

    //handlers
    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //sign up service
        dispatch(register(formData, history));
    };

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
            <div className="stockmeister-register-container">
                <div className="stockmeister-form-wrapper">
                    <div className="stockmeister-form-content">
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
                            <div className="row">
                                <div className="col-5 stockmeister-checkbox-stocks text-center">
                                    <input type="radio"
                                           name="stockmeister-user-type"
                                           id="stocks-checkbox"
                                           className="stockmeister-checkbox"/>
                                    <label htmlFor="stocks-checkbox"
                                           className="stockmeister-checkbox">
                                        &nbsp;Trader
                                    </label>
                                </div>
                                <div className="col-7 stockmeister-checkbox-stocks text-left">
                                    <input type="radio"
                                           name="stockmeister-user-type"
                                           id="crypto-checkbox"
                                           className="stockmeister-checkbox"
                                           required={true}/>
                                    <label htmlFor="crypto-checkbox"
                                           className="stockmeister-checkbox">
                                        &nbsp;Portfolio&nbsp;Manager
                                    </label>
                                </div>
                            </div>
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
        </>
    )
}

export default Register