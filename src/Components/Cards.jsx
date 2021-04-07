import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Cards() {

    const cards = useSelector((state) => state.card.cards);

    return (
        <div className="card-container">
            {cards.map((card, i) => {
                return(
                     
                    <div className="card-wrapper" key={i}>
                        <h2>{card.cardNumber}</h2>
                        <h2>{card.name}</h2>
                        <h2>{card.date}</h2>
                        <h2>{card.ccvNumber}</h2>
                        <h2>{card.vendor}</h2>
                    </div>
                )
            })}
           
            <Link to="/createCard">
                 <button>Add a new Card</button>
            </Link>
        </div>
    )
}
