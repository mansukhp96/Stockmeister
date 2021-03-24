import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Topbar from "./components/topbar/topbar";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Search from "./components/search/search";
import News from "./components/news/news";

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import React, {useState} from "react";
import Dashboard from "./components/dashboard/dashboard";
import Profile from "./components/profile/profile";


const alertOptions = {
    position: positions.BOTTOM_CENTER,
    timeout: 1500,
    offset: '30px',
    type : 'error',
    transition: transitions.FADE
}

function App() {

    const [expand, setExpand] = useState(false)
    const toggleTopbar = () => {
        setExpand(!expand)
    }

  return (
    <BrowserRouter>
        <Topbar expand={expand} toggle={toggleTopbar}/>
        <Navbar toggle={toggleTopbar}/>
          <Switch>
                  <AlertProvider template={AlertTemplate} {...alertOptions}>
                      <Route path="/login" component={Login} exact={true}/>
                      <Route path="/register" component={Register} exact={true}/>
                          <Route path="/" component={Home} exact={true}/>
                          <Route path="/dashboard" component={Dashboard} exact={true}/>
                          <Route path="/profile" component={Profile} exact={true}/>
                          <Route path="/search" component={Search} exact={true}/>
                          <Route path="/news" component={News} exact={true}/>
                  </AlertProvider>
          </Switch>

    </BrowserRouter>
  );
}

export default App;
