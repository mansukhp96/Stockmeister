import React, {useEffect, useState} from 'react';
import './search-people-card.css';
import avatar1 from '../../../images/generic_avatar.png'
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import * as api from "../../../services/people-service";
import {useDispatch} from "react-redux";
import {useAlert} from "react-alert";

const PeopleCard = ({userData, modal}) => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const {section} = useParams();
    const [confirmFollow, setConfirmFollow] = useState(false);
    const [confirmUnfollow, setConfirmUnfollow] = useState(false);
    const [follow, setFollow] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [currentUser, setCurrentUser] = useState({});
    const [otherUser, setOtherUser] = useState({});

    const fetchCurrentUser = async () => {
        const response =  await api.getUserInfo(user.result._id);
        setCurrentUser(response.data);
    }
    const fetchOtherUser = async () => {
        const response =  await api.getUserInfo(userData._id);
        setOtherUser(response.data);
    }

    useEffect(() => {
        if(user) {
            fetchCurrentUser();
            fetchOtherUser();
            if(user.result.following.includes(userData._id)
                || userData.followers.includes(user.result._id)) {
                setFollow(true);
            }
            else {
                setFollow(false);
            }
        }
    },[]);

    const handleFollow = () => {
        if(!user) {
            modal()
        }
        else {
            setCurrentUser({
                ...currentUser, following : [ ...currentUser.following, otherUser._id]
            });
            setOtherUser({
                ...otherUser, followers : [ ...otherUser.followers, currentUser._id ]
            });
            setConfirmFollow(true);
        }
    }

    const handleUnfollow = () => {
        setCurrentUser({
            ...currentUser, following :
                currentUser.following.filter(f => {
                    return f !== userData._id
            })
        });

        setOtherUser({
            ...otherUser, followers :
                otherUser.followers.filter(f => {
                    return f !== currentUser._id
                })
        });

        setConfirmUnfollow(true);
    }

    const updateOtherFollowerService = (curr, other) => async (dispatch) => {
        try {
            await api.updateFollower(other._id, curr);
        }
        catch (error) {
            alert.show("Update Failed!");
            console.log(error);
        }
    }

    const updateCurrFollowingService = (curr, other) => async (dispatch) => {
        try {
            const { data } = await api.updateFollowing(curr._id, other);
            dispatch({ type : "AUTH", data });
        }
        catch (error) {
            alert.show("Follow failed!");
            console.log(error);
        }
    }

    const handleFollowSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCurrFollowingService(currentUser, otherUser));
        dispatch(updateOtherFollowerService(currentUser, otherUser));
        setConfirmFollow(false);
        setFollow(true);
    }


    const removeCurrUnfollowingService = (curr, other) => async (dispatch) => {
        try {
            const { data } = await api.removeFollowing(curr._id, other);
            dispatch({ type : "AUTH", data });
        }
        catch (error) {
            alert.show("Follow failed!");
            console.log(error);
        }
    }

    const removeOtherFollowerService = (curr, other) => async (dispatch) => {
        try {
            await api.removeFollower(other._id, curr);
        }
        catch (error) {
            alert.show("Update Failed!");
            console.log(error);
        }
    }

    const handleUnfollowSubmit = (e) => {
        e.preventDefault();
        dispatch(removeCurrUnfollowingService(currentUser, otherUser));
        dispatch(removeOtherFollowerService(currentUser, otherUser));
        setConfirmUnfollow(false);
        setFollow(false);

    }

    const handleFollowCancel = () => {
        setConfirmFollow(false);
    }

    const handleUnfollowCancel = () => {
        setConfirmUnfollow(false);
    }

    return(
        <div className="card border-warning shadow">
            <Link to={`/search/${section}/details/${userData._id}`}
                  className="list-unstyled text-decoration-none">
                <div className="card-header">
                    <h5 className="card-title text-dark font-weight-bolder">
                        {userData.username}
                    </h5>
                </div>
            </Link>
            <img src={avatar1}
                 className="card-img-top"
                 alt="No User Image"/>
            <div className="card-body">
                <p className="card-text">
                    {
                        confirmFollow &&
                        <>
                            <Link onClick={handleFollowSubmit}
                                  className="btn btn-sm btn-success float-left">
                                confirm
                            </Link>
                            <button onClick={handleFollowCancel}
                                    className="btn btn-sm btn-danger float-right">
                                cancel
                            </button>
                        </>
                    }
                    {
                        !follow && !confirmFollow &&
                        <button onClick={handleFollow}
                                className="btn btn-block btn-dark">
                            Follow
                        </button>
                    }
                    {
                        confirmUnfollow &&
                        <>
                            <Link onClick={handleUnfollowSubmit}
                                  className="btn btn-sm btn-success float-left">
                                confirm
                            </Link>
                            <button onClick={handleUnfollowCancel}
                                    className="btn btn-sm btn-danger float-right">
                                cancel
                            </button>
                        </>
                    }
                    {
                        follow && !confirmUnfollow &&
                        <button onClick={handleUnfollow}
                                className="btn btn-block btn-danger">
                            Unfollow
                        </button>
                    }
                </p>
            </div>
            <div className="card-footer">
                <p className="card-text">
                    <small className="text-muted">
                        Joined: {
                        userData.joined_on.substring(0, userData.joined_on.lastIndexOf("T"))
                    }
                    </small>
                </p>
            </div>
        </div>
    )
}

export default PeopleCard;