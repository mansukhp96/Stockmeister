import React, {useEffect, useState} from 'react'
import {fadeAnimate} from "../../../animations/animations";
import {motion} from "framer-motion";
import {useParams} from "react-router";
import * as api from "../../../services/people-service";
import './search-people.css';
import PeopleCard from "./search-people-card";

const SearchPeople = ({modal}) => {

    const [users, setUsers] = useState({});
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //call to backend to get all users
        const fetchAllUsers = async () => {
            setLoading(true);
            const allUsers = await api.findAllUsers();
            setUsers(allUsers.data.result);
        }
        fetchAllUsers();
        setLoading(false);
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    let filterUsers = [];
    if(users.length > 0 && !user) {
        filterUsers = users.filter(u =>
            (u.first_name.toLowerCase().includes(search.toLowerCase()) ||
            u.last_name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase())
        ))
    }
    else if (users.length > 0 && user) {
        filterUsers = users.filter(u =>
            u._id !== user.result._id &&
            (u.first_name.toLowerCase().includes(search.toLowerCase()) ||
                u.last_name.toLowerCase().includes(search.toLowerCase()) ||
                u.email.toLowerCase().includes(search.toLowerCase())
            ))
    }
    else {
        filterUsers = [];
    }

    return(
        <motion.div initial="out"
                    animate="in"
                    variants={fadeAnimate}>
            <div className="stockmeister-people-section">
                <div className="stockmeister-people-search">
                    <form>
                        <input type="text"
                               placeholder="Search"
                               className="stockmeister-people-input form-control"
                               onChange={handleChange}/>
                    </form>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col stockmeister-people-card-container">
                {
                    !loading && filterUsers.length > 0 &&
                    filterUsers.map((u,i) =>
                            <PeopleCard key={i}
                                        modal={modal}
                                        userData={u}/>
                                        )
                }
                </div>
            </div>
            {
                filterUsers.length <= 0 &&
                <div className="text-muted small">
                    No users found
                </div>
            }
        </motion.div>
    )
}

export default SearchPeople;