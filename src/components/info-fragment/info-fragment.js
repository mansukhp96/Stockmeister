import React from 'react'
import './info-fragment.css'
import {Link as LinkScroll} from 'react-scroll'

import {InfoContainer, InfoHeader, InfoRow, InfoText, Img} from "./info-fragment-elements";

const InfoFragment = ({lightBg, id, imgStart, title, lightText, header, darkText, subtext, buttonLabel, img, alt}) => {
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
                            <div className="stockmesiter-info-btn-wrapper">
                                <LinkScroll to="services"
                                            smooth={true}
                                            duration={600}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            className="stockmeister-info-getstarted-button text-decoration-none">
                                    {buttonLabel}
                                </LinkScroll>
                            </div>
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