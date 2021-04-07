import React from 'react';
import './news.css';

const NewsCard = ({data}) => {
    return(
        <>
            <div className="stockmeister-news-card-wrapper">
                <div className="stockmeister-news-card-head">
                    {data.title}
                </div>
                <div className="stockmeister-news-card-body">
                    {data.description}
                </div>
            </div>
        </>
    )
}

export default NewsCard;