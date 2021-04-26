import React from 'react';
import {dropAnimation} from "../../animations/animations";
import {motion} from "framer-motion";
import './list-modal.css';
import {Link} from "react-router-dom";

const ClientsModal = ({ showClientsModal, toggleClientsModal, clientUnames, clientIds }) => {

    return (
        <>
            {
                showClientsModal ? (
                    <div className="stockmesiter-user-modal-background">
                        <motion.div initial="out" animate="in" exit="out" variants={dropAnimation}>
                            <div className="stockmeister-user-modal-wrapper">
                                <div className="col stockmeister-user-modal-content">
                                    <table className="table table-hover text-center">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">CLIENTS</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            clientUnames && clientIds &&
                                            clientUnames.map((clients, i) => {
                                                const clientId = clientIds[i];
                                                return(
                                                    <tr>
                                                        <td>
                                                            <Link onClick={toggleClientsModal}
                                                                  to={`/search/people/details/${clientId}`}>
                                                                {clients}
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
                                   onClick={toggleClientsModal}/>
                            </div>
                        </motion.div>
                    </div>
                ) : (null)
            }
        </>
    )
}

export default ClientsModal;