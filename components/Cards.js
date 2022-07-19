import { ComputeBudgetInstruction } from '@solana/web3.js';
import React, { useState } from 'react';
import style from "../styles/cards.module.css"

function Cards (props){

    const k = [];
    
    return (
            <div className={style.Cards}>
                <div className={style.cardBody} 
                    onClick={() =>  gotforBooking(props.id,props.title)}
                >
                    <img src={props.img} className={style.cardImage} />
                </div>
                <div className={style.Title}>
                    <h2 className={style.cardTitle}> {props.title}</h2>
                    <h4 className={style.Genre}> {props.genre}</h4>
                                       
                </div>
            </div>
        
    );
};

export default Cards;