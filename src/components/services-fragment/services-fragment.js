import React from 'react'
import './services-fragment.css'

import Img1 from '../../images/img1.svg'
import Img3 from '../../images/img3.svg'
import Img4 from '../../images/img4.svg'
import Img6 from '../../images/img6.svg'

import {ServicesImg} from './service-fragment-elements'

const ServicesFragment = () => {
    return(
        <div id="services" className="stockmeister-services-container">
            <div className="stockmeister-services-title">
                What we offer
            </div>
            <div className="stockmeister-services-wrapper">
                <div className="stockmeister-services-card">
                    <ServicesImg src={Img1}/>
                    <div className="stockmeister-services-card-header">
                        Helpful Tools
                    </div>
                    <div className="stockmeister-services-card-subtext">
                        Curated stocks & exclusive insights
                    </div>
                </div>
                <div className="stockmeister-services-card">
                    <ServicesImg src={Img4}/>
                    <div className="stockmeister-services-card-header">
                        Socialize
                    </div>
                    <div className="stockmeister-services-card-subtext">
                        Keep in touch with your peers
                    </div>
                </div>
                <div className="stockmeister-services-card">
                <ServicesImg src={Img3}/>
                    <div className="stockmeister-services-card-header">
                        No limits
                    </div>
                    <div className="stockmeister-services-card-subtext">
                        Unlimited commission-free online trades
                    </div>
                </div>
                <div className="stockmeister-services-card">
                    <ServicesImg src={Img6}/>
                    <div className="stockmeister-services-card-header">
                        Expert Advice
                    </div>
                    <div className="stockmeister-services-card-subtext">
                        Personalized finance strategies and advice
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesFragment