import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const alertOptions = {
    position: positions.BOTTOM_CENTER,
    timeout: 1500,
    offset: '30px',
    type : 'error',
    transition: transitions.FADE
}

function App() {
  return (
    <BrowserRouter>
          <Switch>
              <Route path="/" component={Home} exact={true}/>
              <AlertProvider template={AlertTemplate} {...alertOptions}>
                  <Route path="/login" component={Login} exact={true}/>
                  <Route path="/register" component={Register} exact={true}/>
              </AlertProvider>
          </Switch>
    </BrowserRouter>
  );
}

export default App;
