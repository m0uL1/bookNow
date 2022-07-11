import React from 'react';
import style from "./cards.module.css"

function Cards(props){
    return (
        <div className={style.main}>
            <div className={style.Cards}>
                <div className={style.cardBody}>
                    <img src={props.img} className={style.cardImage} />
                    
                </div>
            </div>
            <h2 className={style.cardTitle}>{props.title}</h2>
            <div className={style.Genre}> - {props.genre}</div>
        </div>
        
    );
};

export default Cards;