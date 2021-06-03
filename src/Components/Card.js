import React from 'react'
import "./Card.css"

function Card({ title, imgUrl, body }) {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={imgUrl } alt="nophoto"/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h1>{title}</h1>
                </div>
                <div className="card-body">
                    {body}
                </div>
            </div>
            <div className="btn">
                    <button>
                        <a>View more</a>
                    </button>
            </div>
        </div>
    )
}

export default Card
