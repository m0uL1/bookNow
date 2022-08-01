import { ComputeBudgetInstruction } from '@solana/web3.js';
import React, { useState } from 'react';
import style from "./cards.module.css"
import { changeState } from '../../utils/constRedirects'
import MovieDetails from '../HomeCom/MovieDetails';

function Cards(props){

    const k = [];

    const [details,setDetails] = useState(0)
    function gotforBooking(title){
        setDetails(1)
    }
    
    return (
        <div >
        {
            details ? <MovieDetails /> : (

            <div className={style.Cards}>
                <div className={style.cardBody} 
                    onClick={() =>  gotforBooking()}
                >
                    <img src={props.img} className={style.cardImage} />
                </div>
                <div className={style.Title}>
                    <h2 className={style.cardTitle}> {props.title}</h2>
                    <h4 className={style.Genre}> {props.genre}</h4>
                                       
                </div>
            </div>
            )
        }
        </div>
    );
};

export default Cards;