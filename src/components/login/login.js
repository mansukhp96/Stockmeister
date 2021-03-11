import React from 'react'
import './login.css'
import NavbarSimple from "../navbar/navbar-simple";
import Footer from "../footer/footer";
import {Link} from "react-router-dom";

const Login = () => {
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
            <Footer/>
        </>
    )
}

export default Login