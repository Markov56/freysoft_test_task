import React from 'react';

const Card = ({vac, city, remote, category, id}) => {
    return (
        <div className="card">
            <h5>{vac}</h5>
            <p>{`${city} ${remote ? 'or remote' : ''}`}</p>
        </div>
    )
}

export default Card;