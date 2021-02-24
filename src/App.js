import logo from './logo.svg';
import './App.css';
import Topbar from "./components/topbar/topbar";
import Navbar from "./components/navbar/navbar";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <Navbar/>
    </BrowserRouter>
  );
}

export default App;
