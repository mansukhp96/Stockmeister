import React, {useState} from 'react'
import './landing-fragment.css'
import Video from '../../videos/video.mp4'
import Video3 from '../../videos/video3.mov'
import {Link as LinkScroll} from 'react-scroll'
import {Link as LinkRoute} from "react-router-dom";
import {VideoBackground} from "./landing-fragment-elements";

const LandingFragment = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return(
        <div className="stockmeister-landing-container">
            <div className="stockmesiter-landing-background">
                {
                    !user &&
                    <VideoBackground playsInline autoPlay loop muted src={Video} type='video/mp4'/>
                }
                {
                    user &&
                    <VideoBackground playsInline autoPlay loop muted src={Video3} type='video/mov'/>
                }
            </div>
            <div className="stockmeister-landing-content">
                {
                    !user &&
                    <h1 className="stockmeister-landing-header">
                        "Price is what you pay. Value is what you get."
                    </h1>
                }
                {
                    user &&
                    <h1 className="stockmeister-landing-header">
                        Hello, {user.result.firstName}!
                    </h1>
                }
                {
                    !user &&
                    <p className="stockmeister-landing-subheader">
                        Commission-free investing, plus the technology you need to grow your money
                    </p>
                }
                {
                    user &&
                    <p className="stockmeister-landing-subheader">
                        Fine-tune your investments, keep track of your favourite stocks and place your trades
                    </p>
                }
                {
                    !user &&
                    <div className="stockmeister-explore-wrapper">
                        <LinkScroll to="services"
                                    smooth={true}
                                    duration={600}
                                    spy={true}
                                    exact="true"
                                    offset={-79}
                                    className="stockmeister-landing-explore-btn text-decoration-none">
                            Start Today
                        </LinkScroll>
                    </div>
                }
                {
                    user &&
                    <div className="stockmeister-explore-wrapper">
                        <LinkRoute to="/dashboard"
                                    className="stockmeister-landing-explore-btn text-decoration-none">
                            My Dashboard
                        </LinkRoute>
                    </div>
                }
            </div>
        </div>
    )
}

export default LandingFragment