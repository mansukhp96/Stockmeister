import React from 'react'
import './crypto-fragment.css'
import Video from '../../videos/crypto.mp4'
import {Link as LinkScroll} from 'react-scroll'

const CryptoFragment = () => {
    return(
        <div className="stockmeister-crypto-container">
            <div className="stockmesiter-crypto-background">
                <video className="stockmeister-crypto-video"
                       playsInline autoPlay loop muted src={Video} />
            </div>
            <div className="stockmeister-crypto-content">
                <h1 className="stockmeister-crypto-header">
                    "Vires in numeris."
                </h1>
                <p className="stockmeister-crypto-subheader">
                    Introducing crypto trading
                </p>
                <div className="stockmeister-explore-wrapper">
                    <LinkScroll to="services"
                                smooth={true}
                                duration={600}
                                spy={true}
                                exact="true"
                                offset={-79}
                                className="stockmeister-crypto-explore-btn text-decoration-none">
                        Learn More
                    </LinkScroll>
                </div>
            </div>
        </div>
    )
}

export default CryptoFragment