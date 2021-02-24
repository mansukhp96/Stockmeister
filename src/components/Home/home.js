import React, {useState} from 'react'
import Topbar from "../topbar/topbar";
import Navbar from "../navbar/navbar";

const Home = () => {

    const [expand, setExpand] = useState(false)

    const toggleTopbar = () => {
        setExpand(!expand)
    }

    return(
        <div>
            <Topbar expand={expand} toggle={toggleTopbar}/>
            <Navbar toggle={toggleTopbar}/>
        </div>
    )
}

export default Home