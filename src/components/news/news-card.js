import React from 'react';
import './news.css';
import {Link} from "react-router-dom";

const NewsCard = ({data}) => {
    return(
        <>
            <div className="card border-warning shadow">
                <Link to={data.link}
                      className="list-unstyled text-decoration-none">
                    <div className="card-header">
                        <h5 className="card-title text-dark font-weight-bolder">
                            {data.title}
                        </h5>
                    </div>
                </Link>
                <img src={data.media}
                     className="card-img-top"
                     alt="No User Image"/>
                <div className="card-body">
                    <p className="card-text">
                        {data.summary}
                    </p>
                </div>
                <div className="card-footer">
                    <p className="card-text">
                        <small className="text-muted">
                            Published: {data.published_date}
                        </small>
                    </p>
                </div>
            </div>
        </>
    )
}

export default NewsCard;