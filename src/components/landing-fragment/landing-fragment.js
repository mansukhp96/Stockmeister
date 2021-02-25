import React from 'react'
import './landing-fragment.css'
import Video from '../../videos/video.mp4'
import {Link as LinkScroll} from 'react-scroll'
import {VideoBackground} from "./landing-fragment-elements";

const LandingFragment = () => {
    return(
        <div className="stockmeister-landing-container">
            <div className="stockmesiter-landing-background">
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            </div>
            <div className="stockmeister-landing-content">
                <h1 className="stockmeister-landing-header">
                    "Price is what you pay. Value is what you get."
                </h1>
                <p className="stockmeister-landing-subheader">
                    Commission-free investing, plus the technology you need to grow your money
                </p>
                <div className="stockmeister-explore-wrapper">
                    <LinkScroll to="services"
                                className="stockmeister-landing-explore-btn text-decoration-none">
                        Start Today
                    </LinkScroll>
                </div>
            </div>
        </div>
    )
}

export default LandingFragment