import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addCard } from '../Redux/cardSlice';
import Card from './Card';
import { motion } from 'framer-motion';


export default function CreateCard() {

    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [ccvNumber, setCcvNumber] = useState("");
    const [vendor, setVendor] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const inputInfo = {
        cardNumber: cardNumber,
        name: name,
        date: date,
        ccvNumber: ccvNumber,
        vendor: vendor
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addCard(inputInfo))

        history.goBack();

        //Clear input
        setCardNumber("");
        setName("");
        setDate("");
        setCcvNumber("");
        setVendor("");
    }
    
    // Only trigger digits and make a space every fourth number.
    const handleCardNumber = (e) => {
        setCardNumber(e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim())
    }

    return (
        <motion.div className="form-card-container" 
                    initial={{ opacity:0 }} 
                    animate={{ opacity:1 }} 
                    exit={{ opacity:0 }} 
                    transition={{ ease: "easeOut", duration: 2 }}>

            <div className="form-container">
                <h2 className="create-card-title">Add a new bank card.</h2>
                
                <form className="form-wrapper" onSubmit={handleSubmit}>
                    
                    <label className="label-form">Card number</label><br/>
                    <input className="long-input" type="text" minLength="19" maxLength="19" required value={cardNumber} onChange={(e) => handleCardNumber(e)}/><br/>
                    <label className="label-form">Cardholder name</label><br/>
                    <input className="long-input" type="text" required value={name} onChange={(e) => setName(e.target.value.replace(/[^\D]/g, ''))}/><br/>
                    <div className="short-input-wrapper">
                        <div>
                            <label className="label-form" >Valid thru</label><br/>
                            <input className="short-input" type="text" minLength="5" maxLength="5" required value={date} onChange={(e) => {setDate(e.target.value.replace(/[^0-9]/g, '').replace(/(\d{2})(\d{1})/, "$1/$2"))}}/><br/>
                        </div>
                        <div>
                            <label className="label-form" >ccv</label><br/>
                            <input className="short-input" type="text" minLength="3" maxLength="3" required value={ccvNumber} onChange={(e) => setCcvNumber(e.target.value.replace(/[^\d]/g, ''))}/><br/>
                        </div>
                    </div>            
                    <label className="label-form">Vendor</label><br/>
                    <select className="options" required value={vendor} onChange={(e) => setVendor(e.target.value)}>
                        <option value="">-- Choose an option --</option>
                        <option value="Mastercard">Mastercard</option>
                        <option value="Visa">Visa</option>
                        <option value="American express">American express</option>
                        <option value="Discover">Discover</option>
                    </select><br/>

                    <button className="add-btn" type="submit">Add card</button>                 
                </form>
            </div>
            
            <div className="live-card-wrapper">
                <Card {...inputInfo}/>   
            </div>
            
            
        </motion.div>
    )
}
