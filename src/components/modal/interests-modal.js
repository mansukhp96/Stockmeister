import React, {useEffect, useState} from 'react';
import {dropAnimation} from "../../animations/animations";
import {motion} from "framer-motion";
import './list-modal.css';
import {Link} from "react-router-dom";

const InterestsModal = ({ showInterestsModal, toggleInterestsModal, InterestsData }) => {

    return (
        <>
            {
                showInterestsModal ? (
                    <div className="stockmesiter-modal-background">
                        <motion.div initial="out" animate="in" exit="out" variants={dropAnimation}>
                            <div className="stockmeister-modal-wrapper">
                                    <div className="col stockmeister-modal-content">
                                        <table className="table table-hover text-center">
                                            <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">STOCKS</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                InterestsData.interests &&
                                                InterestsData.interests.map((int, i) =>
                                                    <tr>
                                                        <td>
                                                            {int}
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            {}
                                            </tbody>
                                        </table>
                                    </div>
                                <i className="fas fa-times stockmesiter-modal-close-button"
                                   onClick={toggleInterestsModal}/>
                            </div>
                        </motion.div>
                    </div>
                ) : (null)
            }
        </>
    )
}

export default InterestsModal;