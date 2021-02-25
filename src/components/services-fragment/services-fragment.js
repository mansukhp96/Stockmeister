import React from 'react'
import './services-fragment.css'

import Img1 from '../../images/img1.svg'
import Img2 from '../../images/img2.svg'
import Img3 from '../../images/img3.svg'

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
                        Service1
                    </div>
                    <div className="stockmeister-services-card-subtext">
                        Service1 some random text for now
                    </div>
                </div>
                <div className="stockmeister-services-card">
                    <ServicesImg src={Img2}/>
                    <div className="stockmeister-services-card-header">
                        Service2
                    </div>
                    <div className="stockmeister-services-card-subtext">
                        Service2 some random text for now again
                    </div>
                </div>
                <div className="stockmeister-services-card">
                <ServicesImg src={Img3}/>
                    <div className="stockmeister-services-card-header">
                        Service3
                    </div>
                    <div className="stockmeister-services-card-subtext">
                        Service3 some random text yet again for now
                    </div>
                </div>
                <div className="stockmeister-services-card">
                    <ServicesImg src={Img3}/>
                    <div className="stockmeister-services-card-header">
                        Service4
                    </div>
                    <div className="stockmeister-services-card-subtext">
                        Service4 some random text yet again for now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesFragment