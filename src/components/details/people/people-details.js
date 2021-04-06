import React, {useEffect, useState} from 'react';
import {fadeAnimate} from "../../../animations/animations";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useParams} from "react-router";
import * as api from '../../../services/people-service';
import PeopleInfocard from "./people-details-info-card";
import './people-details.css';

const PeopleDetails = () => {

    const {id} = useParams();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUserInfo = async () => {
            setLoading(true);
            const userInf = await api.getUserInfo(id);
            setUserInfo(userInf.data);
        }
        fetchUserInfo();
        setLoading(false);
    }, []);

    return (
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-search-tabs-container">
                <Link className="col-1 stockmeister-details-back-container"
                      to={`/search/people`}>
                    <i className="fas fa-chevron-left stockmeister-details-back"/>
                </Link>
                <div className={`stockmeister-search-tabs-active col-11`}>
                    {
                        userInfo.email &&
                        <div className={`nav-link stockmeister-details-text`}>
                            {userInfo.email.substring(0, userInfo.email.lastIndexOf("@"))}
                        </div>
                    }
                </div>
            </div>
            {
                !loading &&
                <div className="stockmeister-user-info bg-light">
                    <PeopleInfocard data={userInfo}/>
                </div>
            }
            {
                user &&
                <div className="stockmeister-user-info bg-light">
                    <div className="row">
                        <div className="stockmeister-user-details-wrapper">
                            <div className="stockmeister-user-info-card-wrapper">
                                <div className="stockmeister-coin-details-head">
                                    Phone Number
                                </div>
                                <div className="stockmeister-coin-details-value">
                                    {userInfo.phone_number}
                                </div>
                            </div>
                            <div className="stockmeister-user-info-card-wrapper">
                                <div className="stockmeister-coin-details-head">
                                    Address
                                </div>
                                <div className="stockmeister-coin-details-value">
                                    {userInfo.address}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                !user &&
                <div className="stockmeister-crypto-details-data text-center bg-light">
                    Login/Register to view user details
                </div>
            }
        </motion.div>
    )
}

export default PeopleDetails;