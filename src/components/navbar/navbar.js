import React, { useState, useEffect } from 'react'
import './navbar.css'
import defaultAvatar from '../../images/avatar.svg';
import {Link as LinkRouter, useHistory, useLocation} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll"
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import {animateScroll as scroll} from 'react-scroll'
import {ImgAvatar} from "./navbar-elements";

const Navbar = ({toggle}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({ type : "LOGOUT" });
        history.push("/");
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token

        //Json Web Token
        if(token) {
            const decodeToken = decode(token);

            if(decodeToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);

    return(
        <div className="stockmeister-nav">
            <div className="stockmeister-navbar-container">
                <LinkRouter to="/"
                            onClick={() => scroll.scrollToTop()}
                            className="stockmeister-nav-logo text-decoration-none">
                    <i className="fas fa-layer-group"/>
                    StockMeister
                </LinkRouter>
                <div className="stockmeister-mobile-icon">
                    {
                        !user?.result ? (
                            <LinkRouter to="#"
                                        className="stockmeister-placeholder-avatar">
                                <div className="stockmeister-placeholder-avatar">
                                </div>
                            </LinkRouter>
                        ) : (
                            <>
                                {
                                    user?.result.imageUrl &&
                                    <LinkRouter to="/profile"
                                                className="stockmeister-link-route-avatar text-decoration-none">
                                        <ImgAvatar className="rounded-pill" src={user?.result.imageUrl}/>
                                    </LinkRouter>
                                }
                                {
                                    !user?.result.imageUrl &&
                                    <LinkRouter to="/profile"
                                    className="stockmeister-link-route-avatar text-decoration-none">
                                    <ImgAvatar className="rounded-pill" src={defaultAvatar}/>
                                    </LinkRouter>
                                }
                            </>
                        )

                    }
                    <div onClick={toggle}>
                        <i className="fas fa-bars stockmesiter-fa-bars"/>
                    </div>
                </div>
                <ul className="stockmeister-nav-menu">
                    <li className={`stockmesiter-nav-item ${location.pathname === `/dashboard` ? `stockmesiter-nav-active` : ``}`}>
                        {
                            !user?.result && location.pathname === "/" &&
                            <LinkScroll to="market"
                                        smooth={true}
                                        duration={600}
                                        spy={true}
                                        exact="true"
                                        offset={-130}
                                        className="stockmeister-link-scroll text-decoration-none">
                                <i className="fas fa-coins"/>
                                &nbsp;Trade
                            </LinkScroll>
                        }
                        {
                            !user?.result && location.pathname !== "/" &&
                            <LinkRouter to="/register"
                                        smooth={true}
                                        duration={600}
                                        spy={true}
                                        exact="true"
                                        offset={-130}
                                        className="stockmeister-link-scroll text-decoration-none">
                                <i className="fas fa-coins"/>
                                &nbsp;Trade
                            </LinkRouter>
                        }
                        {
                            user?.result &&
                            <LinkRouter to="/dashboard"
                                        smooth={true}
                                        duration={600}
                                        spy={true}
                                        exact="true"
                                        offset={-130}
                                        className={`stockmeister-link-scroll text-decoration-none ${location.pathname === `/dashboard` ? `stockmeister-link-scroll-active` : ``}`}>
                                <i className="fas fa-coins"/>
                                &nbsp;Trade
                            </LinkRouter>
                        }
                    </li>
                    <li className={`stockmesiter-nav-item ${location.pathname === `/news` ? `stockmesiter-nav-active` : ``}`}>
                        <LinkRouter to="/news"
                                    smooth={true}
                                    duration={600}
                                    spy={true}
                                    exact="true"
                                    offset={-79}
                                    className={`stockmeister-link-scroll text-decoration-none ${location.pathname === `/news` ? `stockmeister-link-scroll-active` : ``}`}>
                            <i className="fas fa-globe-americas"/>
                            &nbsp;News
                        </LinkRouter>
                    </li>
                    <li className={`stockmesiter-nav-item ${location.pathname === `/search` ? `stockmesiter-nav-active` : ``}`}>
                        <LinkRouter to="/search"
                                    className={`stockmeister-link-scroll text-decoration-none ${location.pathname === `/search` ? `stockmeister-link-scroll-active` : ``}`}>
                            <i className="fas fa-search"/>
                            &nbsp;Search
                        </LinkRouter>
                    </li>
                </ul>
                {
                    !user?.result ? (
                        <div className="stockmesiter-nav-login">
                            <LinkRouter to="/register"
                                        className="stockmeister-link-route-register text-decoration-none">
                                Sign Up
                            </LinkRouter>
                            <LinkRouter to="/login"
                                        className="stockmeister-link-route-login active text-decoration-none">
                                Login
                            </LinkRouter>
                        </div>
                    ) : (
                        <div className="stockmesiter-nav-login">
                            <LinkRouter to="/profile"
                                        className="stockmeister-link-route-avatar text-decoration-none">
                                {
                                    !user?.result.imageUrl &&
                                    <ImgAvatar className="rounded-pill" src={defaultAvatar}/>
                                }
                                {
                                    user?.result.imageUrl &&
                                    <ImgAvatar className="rounded-pill" src={user?.result.imageUrl}/>
                                }
                            </LinkRouter>
                            <LinkRouter to="/login"
                                        onClick={()=> { logout() }}
                                        className="stockmeister-link-route-login active text-decoration-none">
                                Logout
                            </LinkRouter>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar