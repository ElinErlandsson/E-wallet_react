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
                    <input className="card-input card-input-vendor" type="text" disabled placeholder="VENDOR" value={props.vendor}/>
                </div>
                
                <div className="card-images">
                    <img width="35px" src={chip} alt="Card chip"/>
                    <img height="30px" src={blip} alt="Card blip"/>
                </div>
                
                <input className="card-input card-input-number" type="text" disabled placeholder="xxxx xxxx xxxx xxxx" value={props.cardNumber}/>
                <div className="name-date-container">
                    <div className="cardholder-wrapper name-space">
                        <label className="label-text">CARDHOLDER NAME</label>
                        <input className="card-input card-input-name" type="text" disabled placeholder="FIRSTNAME LASTNAME" value={props.name}/>
                    </div>
                    <div className="cardholder-wrapper">
                        <label className="label-text">VALID THRU</label>
                        <input className="card-input-date card-input" type="text" disabled placeholder="MM/YY" value={props.date}/>
                    </div>
                </div>
            </div>
    )
}
