import React, {useEffect, useState} from 'react';
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";
import NewsCard from "./news-card";
import api from '../../api/news-api';
import ReactTagInput from "@pathofdev/react-tag-input";
import './news.css'

export const News = () => {

    const topTags = () => {
        if(user) {
            return user.result.interests.slice(0, 3).map(t => {
                return t;
            })
        }
        else
            return null
    }

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [loading, setLoading] = useState(false);
    const [tz, setTz] = useState(topTags);
    const [newsData, setNewsData] = useState({});

    useEffect(() => {
        setLoading(true);
        const fetchNewsLoggedIn = async () => {
            const [one, two, three] = await Promise.all([
                api.get("everything?q=" + tz[0] + "&from=2021-04-14&sortBy=popularity&apiKey=6a0d61dbbce2425e850071cafa4a3149&pageSize=10"),
                api.get("everything?q=" + tz[1] + "&from=2021-04-14&sortBy=popularity&apiKey=6a0d61dbbce2425e850071cafa4a3149&pageSize=10"),
                api.get("everything?q=" + tz[2] + "&from=2021-04-14&sortBy=popularity&apiKey=6a0d61dbbce2425e850071cafa4a3149&pageSize=10")
            ])

            setNewsData(one.data.articles.concat(two.data.articles).concat(three.data.articles));
        }
        const fetchTopNews = async () => {
            return await api.get("top-headlines?country=us&apiKey=6a0d61dbbce2425e850071cafa4a3149");
        }
        if(user) {
            fetchNewsLoggedIn();
        }
        else {
            fetchTopNews().then(response => setNewsData(response.data.articles));
        }
        setLoading(false);
    },[tz]);

    const handleTags = (newTags) => {
        setTz(newTags.map(x => x));
    }

    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-news-container center text-center bg-light">
                <div className="stockmeister-news-section">
                    <div className="stockmeister-news-search">
                        <form className="stockmeister-form-search">
                            {/*<div className="p-1">*/}
                            {/*    <input type="text"*/}
                            {/*           placeholder="Search"*/}
                            {/*           className="stockmeister-news-input form-control"/>*/}
                            {/*</div>*/}
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
                    <div className="stockmeister-news-card-container">
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