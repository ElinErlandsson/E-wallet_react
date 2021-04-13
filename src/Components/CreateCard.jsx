import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addCard } from '../Redux/cardSlice';
import Card from './Card';
import { motion } from 'framer-motion';


export default function CreateCard() {

    const user = useSelector((state) => state.card.cards[0].name);

    const [cardNumber, setCardNumber] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [ccvNumber, setCcvNumber] = useState("");
    const [vendor, setVendor] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const inputInfo = {
        cardNumber: cardNumber,
        name: user,
        month: month,
        year: year,
        ccvNumber: ccvNumber,
        vendor: vendor
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addCard(inputInfo))

        history.goBack();
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
                    <input className="long-input" type="text" disabled value={user}/><br/>
                    <div className="short-input-wrapper">
                        <div className="form-date-input">
                            <div className="input-date-wrapper">
                                <label className="label-form" >Valid thru</label><br/>
                                <select className=" input-date" required value={month} onChange={(e) => setMonth(e.target.value)}>
                                    <option value="">MM</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select><br/>
                            </div>
                            <div>
                                <label className="label-form"></label><br/>
                                <select className=" input-date" required value={year} onChange={(e) => setYear(e.target.value)}>
                                    <option value="">YY</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                </select><br/>
                            </div>
                            
                        </div>
                        <div className="ccv-input">
                            <label className="label-form" >ccv</label><br/>
                            <input type="text" minLength="3" maxLength="3" required value={ccvNumber} onChange={(e) => setCcvNumber(e.target.value.replace(/[^\d]/g, ''))}/><br/>
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
