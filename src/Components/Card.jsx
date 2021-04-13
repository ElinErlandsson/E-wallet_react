import React from 'react'
import chip from '../bilder/card-chip.png';
import blip from '../bilder/blip.png';
import { useDispatch } from "react-redux";
import { changeActive } from '../Redux/cardSlice';


export default function Card(props) {


    const dispatch = useDispatch();

    const handleActiveCard = () => {
        dispatch(changeActive(props.cardNumber));
    };

    return (
 
            <div className="card-container" onClick={handleActiveCard}  
                style={
                props.vendor === "Mastercard"
                ? { background: "linear-gradient(-60deg, #ff58583b 0%, #f09819 100%)" }
                : props.vendor === "Visa"
                ? { background: "linear-gradient(-60deg, #2c3f613b 0%, #4c70c5 100%)" }
                : props.vendor === "American express"
                ? { background: "linear-gradient(-60deg, #4897723b 0%, #5cbe99 100%)" }
                : props.vendor === "Discover"
                ? { background: "linear-gradient(-60deg, #27272c3b 0%, #a7acbb 100%)" }
                : null
            }>
            
                <div className="vendor-card-wrapper">
                    <p className="card-input card-vendor">{props.vendor? props.vendor : "Vendor"}</p>  
                </div>
                
                <div className="card-images">
                    <img width="35px" src={chip} alt="Card chip"/>
                    <img height="30px" src={blip} alt="Card blip"/>
                </div>
                
                <p className="card-input card-input-number">{props.cardNumber? props.cardNumber : "XXXX XXXX XXXX XXXX" } </p>

                <div className="name-date-container">
                    <div className="name-date-wrapper">
                        <p className="label-text">Cardholder name</p>
                        <p className="card-input">{props.name}</p>
                    </div>
                    <div className="name-date-wrapper date-space">
                        <p className="label-text">Valid thru</p>
                        <p className="card-input">{props.month && props.year? `${props.month} / ${props.year}` : "MM/YY"}</p>
                    </div>
                </div>
            </div>          
    )
}
