import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import  Card  from './Card';
import { deleteCard } from '../Redux/cardSlice';

export default function HomeWallet() {

    const cards = useSelector((state) => state.card.cards);

    const dispatch = useDispatch();
    
    
    return (
        <motion.div className="home-container" 
                    initial={{ opacity:0 }} 
                    animate={{ opacity:1 }} 
                    exit={{ opacity:0 }} 
                    transition={{ ease: "easeIn", duration: .5 }}>

            <div className="wallet-container">
                <div className="active">
                    {cards.map((card, i) => {
                        if(card.active){
                            return(
                            <div className="card-bg-circle-active" key={i}>
                                <Card {...card}/>
                            </div>
                        )}
                        return null;
                    })}
                    <Link to="/createCard">
                        <button className="add-btn new-card-btn" 
                        disabled={cards.length === 4} 
                        style={cards.length === 4? { color: "#655c85", cursor: "not-allowed" }: null}>
                        {cards.length === 4? "Reached limit of cards" : "Add a new card"}</button>
                    </Link>
                </div>

                <div className="notActive">
                    {cards.map((card, i) => {
                        if (!card.active){
                            return(
                            <div className="card-wrapper-notActive" key={i}>  
                            <div onClick = {() => dispatch(deleteCard(card.cardNumber))}>
                            <i className="far fa-times-circle"></i></div>  
                                <Card {...card}/>
                            </div>
                        )
                        }
                        return null
                    })}
                </div>
            </div>
        </motion.div>
    )
}
