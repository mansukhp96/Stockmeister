import React, {useEffect, useState} from 'react'
import './topbar.css'
import {TopbarContainer} from './topbar-elements'
import {Link as LinkScroll} from "react-scroll";
import {Link as LinkRouter, Link as LinkRoute, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router";

const Topbar = ({expand, toggleTb, toggleModal}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);

    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({ type : "LOGOUT" });
        history.push("/");
        setUser(null);
    }

    return(
        <TopbarContainer expand={expand}
                         onClick={toggleTb}>
            <div className="stockmeister-icon"
                 onClick={toggleTb}>
                    <i className="fas fa-times text-light"/>
            </div>
            <div className="stockmeister-topbar-wrapper">
                <div className="stockmeister-topbar-menu">
                    {
                        !user?.result && location.pathname === "/" &&
                        <LinkScroll to="market"
                                    smooth={true}
                                    duration={600}
                                    spy={true}
                                    exact="true"
                                    offset={-130}
                                    onClick={() => {
                                        toggleTb();
                                    }}
                                    className="stockmeister-topbar-link text-decoration-none">
                            Trade
                        </LinkScroll>
                    }
                    {
                        !user?.result && location.pathname !== "/" &&
                        <LinkRouter to={`${location.pathname}`}
                                    onClick={toggleModal}
                                    smooth={true}
                                    duration={600}
                                    spy={true}
                                    exact="true"
                                    offset={-130}
                                    className="stockmeister-topbar-link text-decoration-none">
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
                                    className={`stockmeister-topbar-link text-decoration-none ${location.pathname === `/dashboard` ? `stockmeister-link-scroll-active` : ``}`}>
                            &nbsp;Trade
                        </LinkRouter>
                    }
                    <LinkRoute to="/news"
                                smooth={true}
                                duration={600}
                                spy={true}
                                exact="true"
                                offset={-79}
                                onClick={toggleTb}
                                className="stockmeister-topbar-link text-decoration-none">
                        News
                    </LinkRoute>
                    <LinkRoute to="/search/crypto"
                                onClick={toggleTb}
                                className="stockmeister-topbar-link text-decoration-none">
                        Search
                    </LinkRoute>
                    {
                        !user?.result &&
                        <LinkRoute to="/register"
                                   onClick={toggleTb}
                                   className="stockmeister-topbar-link text-decoration-none">
                            Sign Up
                        </LinkRoute>
                    }
                </div>
                {
                    !user?.result &&
                    <div className="stockmeister-topbar-login">
                        <LinkRoute to="/login"
                                   className="stockmeister-topbar-link-route-login text-decoration-none">
                            Login
                        </LinkRoute>
                    </div>
                }
                {
                    user?.result &&
                    <div className="stockmeister-topbar-login">
                        <LinkRoute to="/login"
                                   onClick={()=> { logout() }}
                                   className="stockmeister-topbar-link-route-login text-decoration-none">
                            Logout
                        </LinkRoute>
                    </div>
                }
            </div>
        </TopbarContainer>
    )
}

export default Topbar