import React, {useEffect, useState} from 'react';
import {dropAnimation} from "../../animations/animations";
import {motion} from "framer-motion";
import './list-modal.css';
import {Link} from "react-router-dom";
import * as api from '../../services/people-service';

const FollowerModal = ({ showFollowerModal, toggleFollowerModal, FollowerData }) => {

    return (
        <>
            {
                showFollowerModal ? (
                    <div className="stockmesiter-modal-background">
                        <motion.div initial="out" animate="in" exit="out" variants={dropAnimation}>
                            <div className="stockmeister-modal-wrapper">
                                <div className="col stockmeister-modal-content">
                                    <table className="table table-hover text-center">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">FOLLOWERS</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            FollowerData.followers &&
                                            FollowerData.followers.map((f, i) =>
                                                {
                                                    return(
                                                        <tr key={i}>
                                                            <td>
                                                                <Link onClick={toggleFollowerModal}
                                                                      to={`/search/people/details/${f}`}>
                                                                    {f}
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            )
                                        }
                                        {}
                                        </tbody>
                                    </table>
                                </div>
                                <i className="fas fa-times stockmesiter-modal-close-button"
                                   onClick={toggleFollowerModal}/>
                            </div>
                        </motion.div>
                    </div>
                ) : (null)
            }
        </>
    )
}

export default FollowerModal;