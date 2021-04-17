import "@pathofdev/react-tag-input/build/index.css";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Topbar from "./components/topbar/topbar";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import SearchMain from "./components/search/search-main";
import News from "./components/news/news";

import { AnimatePresence } from "framer-motion";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import React, {useState} from "react";
import Dashboard from "./components/dashboard/dashboard";
import Profile from "./components/profile/profile";
import CryptoDetails from "./components/details/crypto/crypto-details";
import StockDetails from "./components/details/stocks/stock-details";
import Modal from "./components/modal/modal";
import './components/modal/modal.css'
import PeopleDetails from "./components/details/people/people-details";
import InterestsModal from "./components/modal/interests-modal";
import FollowerModal from "./components/modal/follower-modal";

const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: 1500,
    offset: '100px',
    type : 'info',
    transition: transitions.FADE
}

function App() {

    const [expand, setExpand] = useState(false);
    const [showModal, setShowModal] =useState(false);
    const [showInterestsModal, setShowInterestsModal] =useState(false);
    const [showFollowerModal, setShowFollowerModal] =useState(false);
    const [userInterests, setUserInterests] =useState({});
    const [userFollowers, setUserFollowers] =useState({});
    const [userFollowersIds, setUserFollowersIds] =useState({});

    const openModal = () => {
        setShowModal(!showModal);
    }

    const openInterestsModal = (interests) => {
        setUserInterests(interests);
        setShowInterestsModal(!showInterestsModal);
    }

    const openFollowerModal = (followers, followersIds) => {
        setUserFollowers(followers);
        setUserFollowersIds(followersIds);
        setShowFollowerModal(!showFollowerModal);
    }

    const toggleTopbar = () => {
        setExpand(!expand);
    }

  return (
    <BrowserRouter>
            <Modal showModal={showModal}
                   toggleModal={openModal}/>
            <InterestsModal showInterestsModal={showInterestsModal}
                            InterestsData={userInterests}
                            toggleInterestsModal={openInterestsModal}/>
            <FollowerModal showFollowerModal={showFollowerModal}
                           toggleFollowerModal={openFollowerModal}
                           followersIds={userFollowersIds}
                           followersUnames={userFollowers}/>
            <Topbar expand={expand}
                    toggleTb={toggleTopbar}
                    toggleModal={openModal}/>
            <Navbar toggleTb={toggleTopbar}
                    toggleModal={openModal}/>
            <AnimatePresence exitBeforeEnter={true}>
                <Switch>
                    <AlertProvider template={AlertTemplate} {...alertOptions}>
                        <Route path="/" component={Home} exact={true}/>
                        <Route path="/news" component={News} exact={true}/>
                        <Route path="/login" component={Login} exact={true}/>
                        <Route path="/register" component={Register} exact={true}/>
                        <Route path="/dashboard" component={Dashboard} exact={true}/>
                        <Route path="/profile" component={Profile} exact={true}/>
                        <Route path={[
                            "/search/:section",
                            "/search",]}
                               exact={true}
                            render={() => (<SearchMain toggleModal={openModal}/>)}/>
                        <Route path="/search/people/details/:id"
                               exact={true}
                               render={() => (<PeopleDetails toggleFollowerModal={openFollowerModal}
                                                             toggleInterestsModal={openInterestsModal}/>)}/>
                        <Route path="/search/crypto/details/:id"
                               exact={true}
                               component={CryptoDetails}/>
                        <Route path="/search/stocks/details/:id"
                               exact={true}
                               component={StockDetails}/>
                    </AlertProvider>
                </Switch>
            </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
