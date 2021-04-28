import React, {useEffect, useState} from 'react';
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";
import NewsCard from "./news-card";
import api from '../../api/newscatcher-api';
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
                api.get("search_free?q=" + tz[0] + "&lang=en&media=True&page_size=10", {
                    headers : {
                        "x-rapidapi-key": "dd2c68c0b8msh7a436aa8ec273d1p13d278jsnf1e7c9c3ac8f",
                        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
                        "useQueryString": true
                    }
                }),
                api.get("search_free?q=" + tz[1] + "&lang=en&media=True&page_size=10", {
                    headers : {
                        "x-rapidapi-key": "dd2c68c0b8msh7a436aa8ec273d1p13d278jsnf1e7c9c3ac8f",
                        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
                        "useQueryString": true
                    }
                }),
                api.get("search_free?q=" + tz[2] + "&lang=en&media=True&page_size=10", {
                    headers : {
                        "x-rapidapi-key": "dd2c68c0b8msh7a436aa8ec273d1p13d278jsnf1e7c9c3ac8f",
                        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
                        "useQueryString": true
                    }
                })
            ])

            //setNewsData(one.data.articles);
            setNewsData(one.data.articles.concat(two.data.articles).concat(three.data.articles));
        }
        const fetchTopNews = async () => {
            return await api.get("search_free?q=finance&lang=en&media=True",{
                headers : {
                    "x-rapidapi-key": "dd2c68c0b8msh7a436aa8ec273d1p13d278jsnf1e7c9c3ac8f",
                    "x-rapidapi-host": "newscatcher.p.rapidapi.com",
                    "useQueryString": true
                }
            })
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
                            <ReactTagInput tags={tz}
                                           placeholder=" "
                                           editable={false}
                                           readOnly={false}
                                           onChange={handleTags}
                                           removeOnBackspace={false}/>
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