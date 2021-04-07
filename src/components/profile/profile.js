import React, {useEffect, useState} from 'react';
import Footer from "../footer/footer";
import "@pathofdev/react-tag-input/build/index.css";
import './profile.css';
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";
import {useAlert} from "react-alert";
import {useDispatch} from "react-redux";
import ReactTagInput from "@pathofdev/react-tag-input";
import * as api from "../../services/people-service";
import {useHistory} from "react-router-dom";

const stockChecker = require('stock-ticker-symbol');

export const Profile = ({ loggedUser = null }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isDisabled, setIsDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(false);
    const [updateForm, setUpdateForm] = useState(user.result);
    const history = useHistory();

    useEffect(() => {

    },[])

    const updateService = (updateForm) => async (dispatch) => {
        try {
            const { data } = await api.updateUser(user.result._id, updateForm);
            dispatch({ type : "AUTH", data });
        }
        catch (error) {
            alert.show("Update Failed!");
            console.log(error);
        }
    }

    const deleteService = (id, history) => async (dispatch) => {
        try {
            await api.deleteUser(user.result._id, history);
            dispatch({ type : "LOGOUT"});
            setUser(null);
            window.location.reload(false);
        }
        catch (error) {
            alert.show("Delete Failed!");
            console.log(error);
        }
    }

    const handleInput = (e) => {
        setIsDisabled(false);
        setUpdateForm({ ...updateForm, [e.target.name] : e.target.value });
    }

    const handleTags = (newTags) => {
        setValid(false);
        if(!loading) {
            newTags = newTags.map(function(x){ return x.toUpperCase(); })
            setIsDisabled(false);
            setUpdateForm({ ...updateForm, interests : newTags });
        }
    }

    const handleValidation = (symbol) => {
        if(stockChecker.lookup(symbol) !== null) {
            return true
        }
        else {
            alert.show("Invalid Stock Symbol!");
            return false;
        }
    }

    const handleDelete = () => {
        dispatch(deleteService(user.result._id, history));
        alert.show("Account has been deleted");
        history.push("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateService(updateForm));
        alert.show("Profile Updated!");
        setIsDisabled(true);
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
                            <label>
                                <i className="fas fa-user-lock"/>
                                &nbsp;
                                Phone Number
                            </label>
                            <input type="text"
                                   name="phoneNumber"
                                   value={updateForm.phoneNumber}
                                   onChange={handleInput}
                                   className="form-control border-warning shadow-sm"/>
                        </div>
                        <div>
                            <label>
                                <i className="fas fa-user-lock"/>
                                &nbsp;
                                Location
                            </label>
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
                            <ReactTagInput tags={updateForm.interests}
                                           className="react-tag-input__tag"
                                           placeholder="Type stock symbol and press enter"
                                           editable={true}
                                           readOnly={false}
                                           removeOnBackspace={true}
                                           validator={handleValidation}
                                           onChange={handleTags}/>

                        </div>
                        <div>
                            <label>
                                <i className="fas fa-user-lock"/>
                                &nbsp;
                                Bank Account Details
                            </label>
                            <input type="text"
                                   name="bankAccount"
                                   onChange={handleInput}
                                   value={updateForm.bankAccount}
                                   className="form-control border-warning shadow-sm"/>
                        </div>
                    </div>

                    <div className={`stockmeister-profile-info-wrapper-head`}>
                        <button type="submit"
                                disabled={isDisabled}
                                className={`  btn btn-block ${isDisabled ? `btn-secondary` : `btn-success`}   shadow-sm`}>
                            Update Profile
                        </button>
                        <button onClick={handleDelete}
                                className={`btn btn-outline-danger btn-block shadow-sm`}>
                            Delete Account
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
        </motion.div>
    )
}

export default Profile;