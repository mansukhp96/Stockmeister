import React from 'react';
import './people-details.css';

const PeopleInfocard = ({data}) => {
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
                        <div className="stockmeister-user-info-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Gender
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.gender}
                            </div>
                        </div>
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
                        <div className="stockmeister-user-info-card-wrapper">
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
                        <div className="stockmeister-user-info-card-wrapper">
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
                        <div className="stockmeister-user-info-card-wrapper">
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
                    </div>
                </div>
            }
        </>
    )
}

export default PeopleInfocard;