import React, {useEffect, useState} from 'react';
import './dashboard.css';
import api from '../../api/twelvedata-api';
import Footer from "../footer/footer";
import DashboardChart from "./dashboard-chart";
import DashboardStocks from "./dashboard-stocks";

export const Dashboard = () => {

    const topTags = () => {
        if (user) {
            return user.result.interests.slice(0, 3).map(t => {
                return t;
            })
        } else
            return null
    }

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [loading, setLoading] = useState(false);
    const [watchList, setWatchList] = useState({});
    const [tz, setTz] = useState(topTags);

    useEffect(() => {
        const fetchStonks = async () => {
            setLoading(true);
            const [watchOne, watchTwo, watchThree] = await Promise.all([
                api.get("quote?apikey=" + process.env.REACT_APP_TWLDATA_APIKEY + "&symbol=" + tz[0]),
                api.get("quote?apikey=" + process.env.REACT_APP_TWLDATA_APIKEY + "&symbol=" + tz[1]),
                api.get("quote?apikey=" + process.env.REACT_APP_TWLDATA_APIKEY + "&symbol=" + tz[2])
            ]);

            setWatchList({
                one: watchOne.data,
                two: watchTwo.data,
                three: watchThree.data
            });
        }
        fetchStonks();
        setLoading(false);
    }, []);

    return (
        <>
            <div className="stockmeister-dashboard-graph-container text-center bg-light">
                {
                    loading &&
                    <div className="text-muted small bg-light">
                        Loading dashboard chart...
                    </div>
                }
                {
                    !loading &&
                    <DashboardChart/>
                }
            </div>
            <div className="stockmeister-dashboard-stocks-container center text-center bg-light">
                <div className="stockmeister-dashboard-stocks-header">
                    Stocks
                </div>
            </div>
            <div className="stockmeister-dashboard-watch-container center text-center bg-light">
                <DashboardStocks data={watchList}/>
            </div>
            <Footer/>
        </>
    )
}

export default Dashboard;