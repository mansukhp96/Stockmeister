import React, {useState} from 'react'
import './topbar.css'
import {TopbarContainer} from './topbar-elements'
import {Link as LinkScroll} from "react-scroll";
import {Link as LinkRoute, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

const Topbar = ({expand, toggle}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({ type : "LOGOUT" });
        history.push("/");
        setUser(null);
    }

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return(
        <TopbarContainer expand={expand}
                         onClick={toggle}>
            <div className="stockmeister-icon"
                 onClick={toggle}>
                    <i className="fas fa-times text-light"/>
            </div>
            <div className="stockmeister-topbar-wrapper">
                <div className="stockmeister-topbar-menu">
                    <LinkScroll to="market"
                                smooth={true}
                                duration={600}
                                spy={true}
                                exact="true"
                                offset={-130}
                                onClick={toggle}
                                className="stockmeister-topbar-link text-decoration-none">
                        Trade
                    </LinkScroll>
                    <LinkRoute to="/news"
                                smooth={true}
                                duration={600}
                                spy={true}
                                exact="true"
                                offset={-79}
                                onClick={toggle}
                                className="stockmeister-topbar-link text-decoration-none">
                        News
                    </LinkRoute>
                    <LinkRoute to="/search"
                                onClick={toggle}
                                className="stockmeister-topbar-link text-decoration-none">
                        Search
                    </LinkRoute>
                    {
                        !user?.result &&
                        <LinkRoute to="/register"
                                   onClick={toggle}
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