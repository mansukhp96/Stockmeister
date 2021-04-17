import React, {useEffect, useState} from 'react';
import {dropAnimation} from "../../animations/animations";
import {motion} from "framer-motion";
import './list-modal.css';

const InterestsModal = ({ showInterestsModal, toggleInterestsModal, InterestsData }) => {

    return (
        <>
            {
                showInterestsModal ? (
                    <div className="stockmesiter-user-modal-background">
                        <motion.div initial="out" animate="in" exit="out" variants={dropAnimation}>
                            <div className="stockmeister-user-modal-wrapper">
                                    <div className="col stockmeister-user-modal-content">
                                        <table className="table table-hover text-center">
                                            <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">STOCKS</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                InterestsData &&
                                                InterestsData.map((int, i) =>
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
                                <i className="fas fa-times stockmesiter-user-modal-close-button"
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