import React, {useState} from 'react'
import Topbar from "../topbar/topbar";
import Navbar from "../navbar/navbar";
import LandingFragment from "../landing-fragment/landing-fragment";

const Home = () => {

    const [expand, setExpand] = useState(false)

    const toggleTopbar = () => {
        setExpand(!expand)
    }

    return(
        <div>
            <Topbar expand={expand} toggle={toggleTopbar}/>
            <Navbar toggle={toggleTopbar}/>
            <LandingFragment/>
        </div>
    )
}

export default Home