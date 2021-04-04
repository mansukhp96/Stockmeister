import React, {useState} from 'react';
import './search-people-card.css';
import avatar from '../../../images/avatar_white.svg'
import {Link} from "react-router-dom";
import {useParams} from "react-router";

const PeopleCard = ({userData, modal}) => {

    const {section} = useParams();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const handleFollow = () => {
        if(!user) {
            modal()
        }
        else{
            alert("following this user")
        }
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
            <img src={avatar}
                 className="card-img-top"
                 alt="No User Image"/>
            <div className="card-body">
                <p className="card-text">
                    <button onClick={handleFollow}
                            className="btn btn-block btn-dark">
                        Follow
                    </button>
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