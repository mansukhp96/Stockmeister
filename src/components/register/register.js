import React from 'react'
import './register.css'
import NavbarSimple from "../navbar/navbar-simple";
import {Link} from "react-router-dom";

const Register = () => {
    return(
        <>
            <NavbarSimple/>
            <div className="stockmeister-register-container">
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
                            <div className="stockmeister-form-label">
                                Re-enter Password
                            </div>
                            <input className="stockmeister-form-input" type="password" required={true}/>
                            <div className="row">
                                <div className="col-5 stockmeister-checkbox-stocks text-center">
                                    <input type="checkbox"
                                           id="stocks-checkbox"
                                           className="stockmeister-checkbox"/>
                                   <label htmlFor="stocks-checkbox"
                                          className="stockmeister-checkbox">
                                       &nbsp;Stocks
                                   </label>
                                </div>
                                <div className="col-6 stockmeister-checkbox-stocks text-center">
                                    <input type="checkbox"
                                           id="crypto-checkbox"
                                           className="stockmeister-checkbox"/>
                                    <label htmlFor="crypto-checkbox"
                                           className="stockmeister-checkbox">
                                        &nbsp;Crypto
                                    </label>
                                </div>
                            </div>
                            <button className="stockmeister-register-btn">
                                SIGN UP
                            </button>
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