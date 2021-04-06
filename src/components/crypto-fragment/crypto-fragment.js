import React, {useState} from 'react'
import './crypto-fragment.css'
import Video from '../../videos/crypto.mp4'
import Video4 from '../../videos/video4.mov'
import {Link as LinkScroll} from 'react-scroll'
import {Link as LinkRoute} from 'react-router-dom'
import {VideoBackground, VideoBackground2} from "./crypto-fragment-elements";

const CryptoFragment = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return(
        <div className="stockmeister-crypto-container">
            <div className="stockmesiter-crypto-background">
                {
                    !user &&
                    <VideoBackground playsInline autoPlay loop muted src={Video} type='video/mp4'/>
                }
                {
                    user &&
                    <VideoBackground2 playsInline autoPlay loop muted src={Video4} type='video/mov'/>
                }
            </div>
            <div className="stockmeister-crypto-content">
                <h1 className="stockmeister-crypto-header">
                    "Vires in numeris."
                </h1>
                <p className="stockmeister-crypto-subheader">
                    Start tracking the world's top cryptocurrencies
                </p>
                {
                    !user &&
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
                }
                {
                    user &&
                    <div className="stockmeister-explore-wrapper">
                        <LinkRoute to="/search/crypto"
                                    className="stockmeister-crypto-explore-btn text-decoration-none">
                            Search Crypto
                        </LinkRoute>
                    </div>
                }
            </div>
        </div>
    )
}

export default CryptoFragment