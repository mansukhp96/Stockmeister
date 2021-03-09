import React from 'react'
import './landing-fragment.css'
import Video from '../../videos/video.mp4'
import {Link as LinkScroll} from 'react-scroll'

const LandingFragment = () => {
    return(
        <div className="stockmeister-landing-container">
            <div className="stockmesiter-landing-background">
                <video className="stockmeister-landing-video"
                       playsInline autoPlay loop muted src={Video} />
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
                                smooth={true}
                                duration={600}
                                spy={true}
                                exact="true"
                                offset={-79}
                                className="stockmeister-landing-explore-btn text-decoration-none">
                        Start Today
                    </LinkScroll>
                </div>
            </div>
        </div>
    )
}

export default LandingFragment