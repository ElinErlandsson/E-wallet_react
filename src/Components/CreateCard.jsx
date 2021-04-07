import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../Redux/cardSlice';
import chip from '../bilder/card-chip.png';
import blip from '../bilder/blip.png';

export default function CreateCard() {

    const cards = useSelector((state) => state.card.cards);

    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [ccvNumber, setCcvNumber] = useState("");
    const [vendor, setVendor] = useState("");

    const [disabled, setDisabled] = useState(false)

    const dispatch = useDispatch();

    const inputInfo = {
        cardNumber: cardNumber,
        name: name,
        date: date,
        ccvNumber: ccvNumber,
        vendor: vendor
    }

   

    const handleSubmit = (e) => {
        e.preventDefault();

        // Dispatch reducern funktionen som heter addContact och lägg in name och number staten.
        dispatch(addCard(inputInfo))

        if(cards.length === 3){
            setDisabled(true)
        }
        //Clear input
        setCardNumber("");
        setName("");
        setDate("");
        setCcvNumber("");
        setVendor("");
    }

    /* const dateInput = (e) => {
        let date = e.target.value.split("/");
        let month = parseInt(date[0],10);
        let year = parseInt(date[1],10);

        if(isNaN(month) || isNaN(year)){
            console.log("not valid");
        }
        else{
            setDate(e.target.value)
        }

    } */
   
    

    return (
        <div className="form-card-container">
            <div className="form-container">
            <form className="form-wrapper" onSubmit={handleSubmit}>
                
                <label className="label-form">Card number</label><br/>
                <input className="long-input" type="text" maxLength="19" required value={cardNumber} onChange={(e) => setCardNumber(e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim())}/><br/>
                <label className="label-form">Cardholder name</label><br/>
                <input className="long-input" type="text" required value={name} onChange={(e) => setName(e.target.value.toUpperCase())}/><br/>
                    <div className="short-input-wrapper">
                        <div>
                            <label className="label-form" >Valid thru</label><br/>
                            <input className="short-input" type="text" maxLength="5" required value={date} onChange={(e) => {setDate(e.target.value)}}/><br/>
                        </div>
                        <div>
                            <label className="label-form" >ccv</label><br/>
                            <input className="short-input" type="text" maxLength="3" required value={ccvNumber} onChange={(e) => setCcvNumber(e.target.value.replace(/[^\d]/g, ''))}/><br/>
                        </div>
                    
                    </div>
                

                <label className="label-form">Vendor</label><br/>
                <select className="options" required value={vendor} onChange={(e) => setVendor(e.target.value)}>
                    <option value="">-- Choose an option --</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Visa">Visa</option>
                    <option value="American express">American express</option>
                </select><br/>

                     {!disabled? <button className="add-btn" type="submit">Add card</button>:<button className="add-btn btn-disabled" disabled type="submit">Add card</button>}
                    
            </form>
            </div>
            

            <div className="live-card">
                <div className="vendor-card">
                <input className="live-card-input-name live-card-vendor" type="text" disabled placeholder="VENDOR" value={vendor}/>
                </div>
                
<div className="card-images">
<img width="100px" src={chip} alt=""/>
                <img height="30px" src={blip} alt=""/>
</div>
                

                <input className="live-card-input" type="text" disabled placeholder="xxxx xxxx xxxx xxxx" value={cardNumber}/>
                <div className="name-date-container">
                <div className="cardholder-wrapper name-space">
                <label className="label-text">CARDHOLDER NAME</label>
                <input className="live-card-input-name" type="text" disabled placeholder="FIRSTNAME LASTNAME" value={name}/>
                </div>
                <div className="cardholder-wrapper">
                <label className="label-text">VALID THRU</label>
                <input className="live-card-input-date live-card-input-name" type="text" disabled placeholder="MM/YY" value={date}/>
                </div>
                </div>
                
                
                
                
            </div>
            

            
        </div>
    )
}
