import React, {useState} from 'react'
import './info-fragment.css'
import {Link as LinkScroll} from 'react-scroll'
import {Link as LinkRoute} from "react-router-dom";

import {InfoContainer, InfoHeader, InfoRow, InfoText, Img} from "./info-fragment-elements";

const InfoFragment = ({routeLink, lightBg, id, imgStart, title, lightText, header, darkText, subtext, buttonLabel, img, alt}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return(
        <InfoContainer id={id}
                       lightBg={lightBg}>
            <div className="stockmeister-info-wrapper">
                <InfoRow imgStart={imgStart}>
                    <div className="stockmeister-info-column1">
                        <div className="stockmeister-info-textwrapper">
                            <div className="stockmeister-info-title">
                                {title}
                            </div>
                            <InfoHeader lightText={lightText}>
                                {header}
                            </InfoHeader>
                            <InfoText darkText={darkText}>
                                {subtext}
                            </InfoText>
                            {
                                !user &&
                                <div className="stockmesiter-info-btn-wrapper">
                                    <LinkScroll to="services"
                                                smooth={true}
                                                duration={600}
                                                spy={true}
                                                exact="true"
                                                offset={-79}
                                                className="btn btn-outline-warning stockmeister-info-getstarted-button text-decoration-none">
                                        {buttonLabel}
                                    </LinkScroll>
                                </div>
                            }
                            {
                                user &&
                                <div className="stockmesiter-info-btn-wrapper">
                                    <LinkRoute to={routeLink}
                                                className="btn btn-outline-warning stockmeister-info-getstarted-button text-decoration-none">
                                        {buttonLabel}
                                    </LinkRoute>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="stockmeister-info-column2">
                        <div className="stockmeister-info-imgwrap">
                            <Img src={img} alt={alt}/>
                        </div>
                    </div>
                </InfoRow>
            </div>
        </InfoContainer>
    )
}

export default InfoFragment