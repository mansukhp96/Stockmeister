import React from 'react';
import {dropAnimation} from "../../animations/animations";
import {motion} from "framer-motion";
import './list-modal.css';
import {Link} from "react-router-dom";

const FollowerModal = ({ showFollowerModal, toggleFollowerModal, followersUnames, followersIds }) => {

    return (
        <>
            {
                showFollowerModal ? (
                    <div className="stockmesiter-user-modal-background">
                        <motion.div initial="out" animate="in" exit="out" variants={dropAnimation}>
                            <div className="stockmeister-user-modal-wrapper">
                                <div className="col stockmeister-user-modal-content">
                                    <table className="table table-hover text-center">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">FOLLOWERS</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            followersUnames && followersIds &&
                                            followersUnames.map((follower, i) => {
                                                const followerId = followersIds[i];
                                                return(
                                                        <tr>
                                                            <td>
                                                                <Link onClick={toggleFollowerModal}
                                                                      to={`/search/people/details/${followerId}`}>
                                                                {follower}
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                )
                                            })
                                        }
                                        {}
                                        </tbody>
                                    </table>
                                </div>
                                <i className="fas fa-times stockmesiter-user-modal-close-button"
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