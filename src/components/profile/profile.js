import React, {useEffect, useState} from 'react';
import Footer from "../footer/footer";
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";
import {useAlert} from "react-alert";
import {useDispatch} from "react-redux";
import ReactTagInput from "@pathofdev/react-tag-input";
import * as api from "../../services/people-service";
import {useHistory} from "react-router-dom";
import './profile.css';
import {useLocation} from "react-router";

const stockChecker = require('stock-ticker-symbol');

export const Profile = ({ loggedUser = null }) => {

    const location = useLocation();

    const alert = useAlert();
    const dispatch = useDispatch();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isDisabled, setIsDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(false);
    const [updateForm, setUpdateForm] = useState(user.result);
    const [trader, setTrader] = useState(true);
    const history = useHistory();

    useEffect(() => {

    },[])

    const updateService = (result) => async (dispatch) => {
        try {
            const { data } = await api.updateUser(user.result._id, result);
            dispatch({ type : "AUTH", data });
        }
        catch (error) {
            alert.show("Update Failed!");
            console.log(error);
        }
    }

    const deleteService = (id, account, history) => async (dispatch) => {
        try {
            await api.deleteUser(user.result._id, account, history);
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
        if(user.result.accountType === "manager") {
            setTrader(false);
        }
        else {
            setTrader(true);
        }
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
        let account = "";

        if(user.result.accountType === "trader") {
            account = { account : "trader" };
        }
        else {
            account = { account : "manager" };
        }
        dispatch(deleteService(user.result._id, account, history));
        history.push("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let result = updateForm;

        if(trader) {
            result = { ...updateForm, accountType : "trader" };
        }
        else {
            result = { ...updateForm, accountType : "manager" };
        }

        dispatch(updateService(result));
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
                                   value={updateForm.accountType.toUpperCase()}
                                   className="form-control border-warning shadow-sm"
                                   disabled={true}/>
                        </div>
                        {
                            user.result.accountType === "trader" &&
                            <div>
                                <label>Gender</label>
                                <input type="text"
                                       name="gender"
                                       placeholder="Male | Female | Other"
                                       value={updateForm.gender}
                                       onChange={handleInput}
                                       className="form-control border-warning"/>
                            </div>
                        }
                        {
                            user.result.accountType === "manager" &&
                            <div>
                                <label>Experience</label>
                                <input type="text"
                                       name="experience"
                                       placeholder="X years | y months"
                                       value={updateForm.experience}
                                       onChange={handleInput}
                                       className="form-control border-warning"/>
                            </div>
                        }
                        <div>
                            <label>
                                <i className="fas fa-user-lock"/>
                                &nbsp;
                                Phone Number
                            </label>
                            <input type="text"
                                   name="phoneNumber"
                                   placeholder="(XXX)-XXX-XXXX"
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
                                   placeholder="City, State"
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
                        {
                            user.result.accountType === "trader" &&
                            <div>
                                <label>
                                    <i className="fas fa-user-lock"/>
                                    &nbsp;
                                    Bank Account Details
                                </label>
                                <input type="text"
                                       name="bankAccount"
                                       placeholder="Bank name | Acc. # | Routing #"
                                       onChange={handleInput}
                                       value={updateForm.bankAccount}
                                       className="form-control border-warning shadow-sm"/>
                            </div>
                        }
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