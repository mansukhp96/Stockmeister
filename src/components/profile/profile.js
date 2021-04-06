import React, {useState} from 'react';
import Footer from "../footer/footer";
import './profile.css';
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";

export const Profile = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return (
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-profile-info bg-light">
                <form className="col">
                    <div className="stockmeister-profile-info-wrapper-head">
                        <div className="stockmeister-profile-header">
                            Profile
                        </div>
                    </div>
                    <div className="stockmeister-profile-info-wrapper">
                        <div>
                            <label>Name</label>
                            <input type="text"
                                   value={user.result.firstName + " " + user.result.lastName}
                                   className="form-control border-warning shadow-sm"
                                   disabled={true}/>
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type="text"
                                   value={user.result.email}
                                   className="form-control border-warning shadow-sm"
                                   disabled={true}/>
                        </div>
                        <div>
                            <label>Account Type</label>
                            <input type="text"
                                   value=""
                                   className="form-control border-warning shadow-sm"
                                   disabled={true}/>
                        </div>
                        <div>
                            <label>Gender</label>
                            <select className="form-control border-warning">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input type="text"
                                   value={user.result.phoneNumber}
                                   className="form-control border-warning shadow-sm"/>
                        </div>
                        <div>
                            <label>Location</label>
                            <input type="text"
                                   value={user.result.address}
                                   className="form-control border-warning shadow-sm"/>
                        </div>
                    </div>
                    <div className="stockmeister-profile-info-wrapper2">
                        <div>
                            <label>Interests</label>
                            <input type="text"
                                   className="form-control border-warning shadow-sm"/>
                        </div>
                        <div>
                            <label>Bank Account Details</label>
                            <input type="text"
                                   value={user.result.bankAccount}
                                   className="form-control border-warning shadow-sm"/>
                        </div>
                    </div>
                    <div className="stockmeister-profile-info-wrapper-head">
                        <button className="btn-lg btn-block btn-success shadow-sm">
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
        </motion.div>
    )
}

export default Profile;