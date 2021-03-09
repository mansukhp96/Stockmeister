import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className="stockmeister-footer-container">
            <div className="stockmeister-footer-wrapper">
                <div className="stockmeister-footer-links-container">
                    <div className="stockmeister-footer-links-wrapper">
                        <div className="stockmeister-links-items">
                            <h1 className="stockmeister-footer-title">
                                About
                            </h1>
                            <a href="#" className="stockmeister-footer-link text-decoration-none">Our Services</a>
                            <a href="#" className="stockmeister-footer-link text-decoration-none">Investors</a>
                            <a href="#" className="stockmeister-footer-link text-decoration-none">Crypto</a>
                        </div>
                        <div className="stockmeister-links-items">
                            <h1 className="stockmeister-footer-title">
                                Resources
                            </h1>
                            <a href="#" className="stockmeister-footer-link text-decoration-none">Technology</a>
                            <a href="#" className="stockmeister-footer-link text-decoration-none">Designs</a>
                            <a href="#" className="stockmeister-footer-link text-decoration-none">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="stockmeister-footer-links-wrapper">
                        <div className="stockmeister-links-items">
                            <h1 className="stockmeister-footer-title">
                                Projects
                            </h1>
                            <a href="#" className="stockmeister-footer-link text-decoration-none">Chalkboard</a>
                            <a href="#" className="stockmeister-footer-link text-decoration-none">SecPassMgr</a>
                            <a href="#" className="stockmeister-footer-link text-decoration-none">Trawel.co.in</a>
                        </div>
                        <div className="stockmeister-links-items">
                            <h1 className="stockmeister-footer-title">
                                Developers
                            </h1>
                            <a href="#" className="stockmeister-footer-link text-decoration-none">Mansukh Pamarath</a>
                            <a href="#" className="stockmeister-footer-link text-decoration-none">Ojas Thanawala</a>
                            <a href="#" className="stockmeister-footer-link text-decoration-none">Vishwas Thakkar</a>
                        </div>
                    </div>
                </div>
                <div className="stockmeister-socials">
                    <div className="stockmeister-socials-wrap">
                        <p className="stockmeister-footer-muted-text-logo text-decoration-none">
                            <i className="fas fa-layer-group"/>
                            StockMeister 2021
                        </p>
                        <div className="stockmeister-social-logos">
                            <i aria-label="Facebook" className="fab fa-facebook stockmeister-social-link"/>
                            <i aria-label="Instagram" className="fab fa-instagram stockmeister-social-link"/>
                            <i aria-label="Twitter" className="fab fa-twitter stockmeister-social-link"/>
                            <i aria-label="LinkedIn" className="fab fa-linkedin stockmeister-social-link"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer