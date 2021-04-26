import React, {useEffect, useState} from 'react';
import './people-details.css';
import * as api from '../../../services/people-service';
import {useParams} from "react-router-dom";

const PeopleInfocard = ({data, interestsModal, followerModal, followingModal, clientsModal}) => {

    const {id} = useParams();

    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [clients, setClients] = useState([]);

    const fetchFollowersForId = async () => {
        await api.getUserFollowers(id)
            .then(response => setFollowers(response.data));
    }

    const fetchFollowingForId = async () => {
        await api.getUserFollowing(id)
            .then(response => setFollowing(response.data));
    }

    const fetchClientsForId = async () => {
        await api.getManagerClients(id)
            .then(response => setClients(response.data));
    }

    useEffect(() => {
        fetchFollowersForId();
        fetchFollowingForId();
        fetchClientsForId();
    },[id]);

    const handleInterestsModal = () => {
        interestsModal(data.interests);
    }

    const handleFollowersModal = () => {
        followerModal(followers, data.followers);
    }

    const handleFollowingModal = () => {
        followingModal(following, data.following);
    }

    const handleClientsModal = () => {
        clientsModal(clients, data.clients);
    }

    return(
        <>
            {
                data &&
                <div className="row">
                    <div className="stockmeister-user-info-wrapper">
                        <div className="stockmeister-user-info-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                First Name
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.first_name}
                            </div>
                        </div>
                        <div className="stockmeister-user-info-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Last Name
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.last_name}
                            </div>
                        </div>
                        <div className="stockmeister-user-info-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Email Address
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.email}
                            </div>
                        </div>
                        <div className="stockmeister-user-info-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Username
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.username}
                            </div>
                        </div>
                        {
                            data.accountType === "trader" &&
                            <div className="stockmeister-user-info-card-wrapper">
                                <div className="stockmeister-coin-details-head">
                                    Gender
                                </div>
                                <div className="stockmeister-coin-details-value">
                                    {data.gender}
                                </div>
                            </div>
                        }
                        {
                            data.accountType === "manager" &&
                            <div className="stockmeister-user-info-card-wrapper">
                                <div className="stockmeister-coin-details-head">
                                    Experience
                                </div>
                                <div className="stockmeister-coin-details-value">
                                    {data.experience}
                                </div>
                            </div>
                        }
                        <div className="stockmeister-user-info-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Joined On
                            </div>
                            {
                                data.joined_on &&
                                <div className="stockmeister-coin-details-value">
                                    {data.joined_on.substring(0, data.joined_on.lastIndexOf("T"))}
                                </div>
                            }
                        </div>
                        <div onClick={handleInterestsModal}
                             className="stockmeister-user-info-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Stock Interests
                            </div>
                            {
                                data.interests &&
                                <div className="stockmeister-coin-details-value">
                                    {data.interests.length}
                                </div>
                            }
                        </div>
                        {
                            data.accountType !== "manager" &&
                            <>
                                <div onClick={handleFollowersModal}
                                     className="stockmeister-user-info-card-wrapper">
                                    <div className="stockmeister-coin-details-head">
                                        Followers
                                    </div>
                                    {
                                        data.followers &&
                                        <div className="stockmeister-coin-details-value">
                                            {data.followers.length}
                                        </div>
                                    }
                                </div>
                                <div onClick={handleFollowingModal}
                                     className="stockmeister-user-info-card-wrapper">
                                    <div className="stockmeister-coin-details-head">
                                        Following
                                    </div>
                                    {
                                        data.following &&
                                        <div className="stockmeister-coin-details-value">
                                            {data.following.length}
                                        </div>
                                    }
                                </div>
                            </>
                        }
                        {
                            data.accountType === "manager" &&
                            <>
                                <div onClick={handleClientsModal}
                                     className="stockmeister-user-info-card-wrapper">
                                    <div className="stockmeister-coin-details-head">
                                        Clients
                                    </div>
                                    {
                                        data.clients &&
                                        <div className="stockmeister-coin-details-value">
                                            {data.clients.length}
                                        </div>
                                    }
                                </div>
                                <div onClick={handleFollowingModal}
                                     className="stockmeister-user-info-card-wrapper">
                                    <div className="stockmeister-coin-details-head">
                                        Services
                                    </div>
                                    {
                                        <div className="stockmeister-coin-details-value">
                                            Portfolio Management
                                        </div>
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default PeopleInfocard;