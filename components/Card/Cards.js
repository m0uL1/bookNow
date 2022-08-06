import { ComputeBudgetInstruction } from '@solana/web3.js';
import React, { useState } from 'react';
import style from "./cards.module.css"
import { changeState } from '../../utils/constRedirects'
import MovieDetails from '../HomeCom/MovieDetails';

function Cards(props){
    
    return (
        <div >
            <div className={style.Cards}>

                
                <div className={style.cardBody}>
                    <img src={props.img} className={style.cardImage} />
                </div>

                <div className={style.card}>
                </div>
                <center>  
                    <h4 className={style.hints}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"> : 90% </i> 
                        &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-star-o" aria-hidden="true"> : 3.4 </i>
                    </h4>    
                </center>
                
            </div>
        </div>
    );
};

export default Cards;