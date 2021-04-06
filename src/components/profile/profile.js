import React, {useEffect, useState} from 'react';
import Footer from "../footer/footer";
import './profile.css';
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";
import {useAlert} from "react-alert";
import {useDispatch} from "react-redux";
import * as api from "../../services/people-service";

export const Profile = ({ loggedUser = null }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [updateForm, setUpdateForm] = useState(user.result);

    useEffect(() => {

    },[])

    const updateService = (updateForm) => async (dispatch) => {
        try {
            //login the user
            const { data } = await api.updateUser(user.result._id, updateForm);
            dispatch({ type : "AUTH", data });
        }
        catch (error) {
            // alert.show(error.response.data.message);
            console.log(error);
        }
    }

    const handleInput = (e) => {
        setUpdateForm({ ...updateForm, [e.target.name] : e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateService(updateForm));
    }

    return (
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-profile-info bg-light">
                <form className="col"
                      onSubmit={handleSubmit}>
                    <div className="stockmeister-profile-info-wrapper-head">
                        <div className="stockmeister-profile-header">
                            Profile
                        </div>
                    </div>
                    <div className="stockmeister-profile-info-wrapper">
                        <div>
                            <label>Name</label>
                            <input type="text"
                                   value={updateForm.firstName + " " + updateForm.lastName}
                                   className="form-control border-warning shadow-sm"
                                   disabled={true}/>
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type="text"
                                   value={updateForm.email}
                                   className="form-control border-warning shadow-sm"
                                   disabled={true}/>
                        </div>
                        <div>
                            <label>Account Type</label>
                            <input type="text"
                                   className="form-control border-warning shadow-sm"
                                   disabled={true}/>
                        </div>
                        <div>
                            <label>Gender</label>
                            <input type="text"
                                   name="gender"
                                   value={updateForm.gender}
                                   onChange={handleInput}
                                   className="form-control border-warning"/>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input type="text"
                                   name="phoneNumber"
                                   value={updateForm.phoneNumber}
                                   onChange={handleInput}
                                   className="form-control border-warning shadow-sm"/>
                        </div>
                        <div>
                            <label>Location</label>
                            <input type="text"
                                   name="address"
                                   onChange={handleInput}
                                   value={updateForm.address}
                                   className="form-control border-warning shadow-sm"/>
                        </div>
                    </div>
                    <div className="stockmeister-profile-info-wrapper2">
                        <div>
                            <label>Interests</label>
                            <input type="text"
                                   name="interests"
                                   className="form-control border-warning shadow-sm"/>
                        </div>
                        <div>
                            <label>Bank Account Details</label>
                            <input type="text"
                                   name="bankAccount"
                                   onChange={handleInput}
                                   value={updateForm.bankAccount}
                                   className="form-control border-warning shadow-sm"/>
                        </div>
                    </div>
                    <div className="stockmeister-profile-info-wrapper-head">
                        <button type="submit"
                                className="btn-lg btn-block btn-success shadow-sm">
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