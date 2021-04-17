import React from 'react';
import {dropAnimation} from "../../animations/animations";
import {motion} from "framer-motion";
import './list-modal.css';
import {Link} from "react-router-dom";

const FollowingModal = ({ showFollowingModal, toggleFollowingModal, followingUnames, followingIds }) => {

    return (
        <>
            {
                showFollowingModal ? (
                    <div className="stockmesiter-user-modal-background">
                        <motion.div initial="out" animate="in" exit="out" variants={dropAnimation}>
                            <div className="stockmeister-user-modal-wrapper">
                                <div className="col stockmeister-user-modal-content">
                                    <table className="table table-hover text-center">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">FOLLOWING</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            followingUnames && followingIds &&
                                            followingUnames.map((following, i) => {
                                                const followerId = followingIds[i];
                                                return(
                                                    <tr>
                                                        <td>
                                                            <Link onClick={toggleFollowingModal}
                                                                  to={`/search/people/details/${followerId}`}>
                                                                {following}
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
                                   onClick={toggleFollowingModal}/>
                            </div>
                        </motion.div>
                    </div>
                ) : (null)
            }
        </>
    )
}

export default FollowingModal;