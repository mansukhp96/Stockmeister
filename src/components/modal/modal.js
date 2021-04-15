import React from 'react';
import styled from 'styled-components';
import image from '../../images/modal.svg'
import {Link} from "react-router-dom";
import {dropAnimation} from "../../animations/animations";
import {motion} from "framer-motion";
import './modal.css';

const ModalImg = styled.img`
    width: 110%;
    padding: 20px;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000000;
    
    @media screen and (max-width: 700px) {
        display: none;
    }
    
    @media screen and (max-width: 500px) {
        display: none;
    }
`

const Modal = ({ showModal, toggleModal }) => {

    return (
        <>
            {
                showModal ? (
                        <div className="stockmesiter-modal-background">
                            <motion.div initial="out" animate="in" exit="out" variants={dropAnimation}>
                                <div className="stockmeister-modal-wrapper">
                                    <ModalImg src={image}
                                              alt='login/signup'/>
                                    <div className="stockmeister-modal-content">
                                        <Link to="/login"
                                              onClick={toggleModal}
                                              className="stockmesiter-modal-button text-dark text-decoration-none">
                                            Login/Register
                                        </Link>
                                        <div className="text-muted small">
                                            Login/Register to continue!
                                        </div>
                                    </div>
                                    <i className="fas fa-times stockmesiter-modal-close-button"
                                       onClick={toggleModal}/>
                                </div>
                            </motion.div>
                        </div>
                ) : (null)
            }
        </>
    )
}

export default Modal;