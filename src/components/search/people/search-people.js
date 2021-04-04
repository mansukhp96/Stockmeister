import React, {useEffect, useState} from 'react'
import {fadeAnimate} from "../../../animations/animations";
import {motion} from "framer-motion";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import * as api from "../../../services/people-service";
import './search-people.css';

const SearchPeople = () => {

    const [users, setUsers] = useState({});

    useEffect(() => {
        //call to backend to get all users
        const fetchAllUsers = async () => {
            const allUsers = await api.findAllUsers();
            console.log(allUsers.data.result);
            setUsers(allUsers.data.result);
        }
        fetchAllUsers();
    }, []);

    const {section} = useParams();

    return(
        <motion.div initial="out"
                    animate="in"
                    variants={fadeAnimate}>
            <div className="stockmeister-people-section">
                <div className="stockmeister-people-search">
                    <form>
                        <input type="text"
                               placeholder="Search"
                               className="stockmeister-people-input form-control"/>
                    </form>
                </div>
            </div>
            {
                users.length > 0 &&
                users.map((u,i) =>
                    <Link to={`/search/${section}/details/${u._id}`}>
                        <li>
                            {u.email}
                        </li>
                    </Link>
                )

            }
            {
                users.length === 0 &&
                <div className="text-muted small">
                    No user found
                </div>
            }
        </motion.div>
    )
}

export default SearchPeople;