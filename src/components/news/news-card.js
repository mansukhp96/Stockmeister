import React from 'react';
import './news.css';
import {Link} from "react-router-dom";

const NewsCard = ({data}) => {
    return(
        <>
            <div className="card border-warning shadow">
                <Link to={data.url}
                      className="list-unstyled text-decoration-none">
                    <div className="card-header">
                        <h5 className="card-title text-dark font-weight-bolder">
                            {data.title}
                        </h5>
                    </div>
                </Link>
                <img src={data.urlToImage}
                     className="card-img-top"
                     alt="No User Image"/>
                <div className="card-body">
                    <p className="card-text">
                        {data.description}
                    </p>
                </div>
                <div className="card-footer">
                    <p className="card-text">
                        <small className="text-muted">
                            Source: {data.author} - {data.publishedAt}
                        </small>
                    </p>
                </div>
            </div>
        </>
    )
}

export default NewsCard;