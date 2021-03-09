import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/login" component={Login} exact={true}/>
          <Route path="/register" component={Register} exact={true}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
