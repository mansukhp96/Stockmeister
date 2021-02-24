import './App.css';
import {BrowserRouter} from "react-router-dom";
import Home from "./components/Home/home";

function App() {
  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  );
}

export default App;
