import React, {useEffect, useState} from 'react';
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";
import NewsCard from "./news-card";
import api from '../../api/news-api';
import ReactTagInput from "@pathofdev/react-tag-input";
import './news.css'
import PeopleCard from "../search/people/search-people-card";

export const News = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [loading, setLoading] = useState(false);
    const [tz, setTz] = useState(
        user.result.interests.slice(0, 5).map(t => {
        return t;
    }));
    const [newsData, setNewsData] = useState({});

    useEffect(() => {
        setLoading(true);
        const fetchNews = async () => {
            return await api.get("everything?q=AAPL&sortBy=popularity&apiKey=6a0d61dbbce2425e850071cafa4a3149&pageSize=10");
        }
        fetchNews().then(response => setNewsData(response.data.articles));
        setLoading(false);
    },[]);

    const handleTags = (newTags) => {
        setTz(newTags.map(x => x));
    }

    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-news-container center text-center bg-light">
                <div className="stockmeister-news-section">
                    <div className="stockmeister-news-search">
                        <form className="stockmeister-form-search">
                            <div className="p-1">
                                <input type="text"
                                       placeholder="Search"
                                       className="stockmeister-news-input form-control"/>
                            </div>
                            {
                                user &&
                                <ReactTagInput tags={tz}
                                               placeholder=" "
                                               editable={false}
                                               readOnly={false}
                                               onChange={handleTags}
                                               removeOnBackspace={false}/>
                            }
                        </form>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col stockmeister-people-card-container">
                        {
                            !loading && newsData.length > 0 &&
                            newsData.map((n,i) =>
                                <NewsCard key={i}
                                            data={n}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default News;