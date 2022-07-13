import React from 'react';
import style from './booknow.module.css'
import Chair from './Chair';
import Screen from './Screen'

function BookNow(props){
    return (
        <div className={style.main}>
            <div>
                <div className={style.navHeader}>
                    <div className={style.navMovieName}>
                        <span >{props.movieTitle}</span>
                    </div>
                    <div className={style.navMovieDetails}>
                        <span >{props.details}</span>
                    </div>
                </div>
                <div className={style.wakeBox}>
                    <Chair />
                    <div className={style.Available}>
                        
                        <p>Available</p>
                    </div>
                    <span></span>
                    <div className={style.Booked}>
                        <p>Booked</p>
                    </div>
                </div>
                <p> Each seat tooks 0.0023 SOL</p>
                <div className={style.seatBox}>
                    

                </div>
                <Screen />
            </div>
            
        </div>

        
    );
};

export default BookNow;