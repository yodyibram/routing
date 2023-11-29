import React from 'react';

function NewsUpdate({ title, description, imageUrl, newsUrl }) {
    return (
        <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl} className="card-img-top" alt="..." height="200px" />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} className="btn btn-primary">Details</a>
                </div>
            </div>
        </div>
    );
}

export default NewsUpdate;
