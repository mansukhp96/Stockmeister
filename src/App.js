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


const alertOptions = {
    position: positions.BOTTOM_CENTER,
    timeout: 1500,
    offset: '30px',
    type : 'error',
    transition: transitions.FADE
}

function App() {

    const [expand, setExpand] = useState(false);
    const [showModal, setShowModal] =useState(false);

    const openModal = () => {
        setShowModal(!showModal);
    }

    const toggleTopbar = () => {
        setExpand(!expand);
    }

  return (
    <BrowserRouter>
            <Modal showModal={showModal}
                   toggleModal={openModal}/>
            <Topbar expand={expand}
                    toggleTb={toggleTopbar}
                    toggleModal={openModal}/>
            <Navbar toggleTb={toggleTopbar}
                    toggleModal={openModal}/>
            <AnimatePresence exitBeforeEnter={true}>
                <Switch>
                    <AlertProvider template={AlertTemplate} {...alertOptions}>
                        <Route path="/login" component={Login} exact={true}/>
                        <Route path="/register" component={Register} exact={true}/>
                        <Route path="/" component={Home} exact={true}/>
                        <Route path="/dashboard" component={Dashboard} exact={true}/>
                        <Route path="/profile" component={Profile} exact={true}/>
                        <Route path={[
                            "/search/:section",
                            "/search",]}
                               exact={true}
                            render={() => (<SearchMain toggleModal={openModal}/>)}/>
                        <Route path="/search/crypto/details/:id"
                               exact={true}
                               component={CryptoDetails}/>
                        <Route path="/search/stocks/details/:id"
                               exact={true}
                               component={StockDetails}/>
                        <Route path="/search/people/details/:id"
                               exact={true}
                               component={PeopleDetails}/>
                        <Route path="/news" component={News} exact={true}/>
                    </AlertProvider>
                </Switch>
            </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
