import React from 'react';
import style from "./cards.module.css"
function Cards(props){
    return (
        <div className={style.main}>
            <div className={style.Cards}>
                <div className={style.cardBody}>
                    <img src={props.img} className={style.cardImage} />
                </div>
                <div className={style.Title}>
                    <h2 className={style.cardTitle}>{props.title}</h2>
                    <h4 className={style.Genre}>{props.genre}</h4>                    
                </div>
            </div>
        </div>
        
    );
};

export default Cards;