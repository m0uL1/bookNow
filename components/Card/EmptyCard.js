import { ComputeBudgetInstruction } from '@solana/web3.js';
import React, { useState } from 'react';
import style from "./cards.module.css"
import { changeState } from '../../utils/constRedirects'


function EmptyCard (props){

    const k = [];

    function gotforBooking(title){
        console.log(title)
        changeState()
    }
    
    return (
        
            <div className={style.Cards}>
                <div className={style.cardArea} 
                    onClick={() =>  gotforBooking(props.title)}
                >
                    <img src={props.img} className={style.cardImg} />
                </div>
            </div>
    );
};

export default EmptyCard;