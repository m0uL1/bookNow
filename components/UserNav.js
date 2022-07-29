import React from 'react';
import style from '../styles/homenav.module.css';
const UserNav = () => {
    return (
        <div className={style.navbar} >
            <a href="#home"><img src="logo.png" /></a>
            <a href="#home">Home</a>
            <a href="#newMoview"> new Movies</a>
            <div className={style.dropdown}>
                <button className={style.dropbtn} > Location
                </button>
                <center>
                    <div className={style.dropdown_content} >
                        <input className={style.search_location} 
                            type="text" 
                            placeholder="Banglore, Hyderabad .."
                        />
                    </div>
                </center>
                
            </div> 
            <div className={style.dropdown}>
                <button className={style.dropbtn} > Languages
                    <i>
                    </i>
                </button>
                <div className={style.dropdown_content} >
                <a href="#"> Telugu </a>
                <a href="#"> Tamil </a>
                <a href="#"> Hindi </a>
                <a href="#"> English </a>
                </div>
            </div> 

            <div className={style.dropdown}>
                <button className={style.dropbtn} > Genre
                    <i>
                    </i>
                </button>
                <div className={style.dropdown_content} >
                    <a href="#"> Comedy </a>
                    <a href="#"> Thriller </a>
                    <a href="#"> Action </a>
                    <a href="#"> Romance </a>
                    <a href="#"> Family </a>
                </div>
            </div> 

            <a href="#Coupons"> *Coupons </a>
            <a href="#Coupons"> Stream/Rent </a>

            <div className={style.search_box}>
                <input className={style.search_input} 
                    type="text" 
                    placeholder="Search by Movie, Actor, Language .."
                 />
                 
            </div>
            
            
        </div>
    );
};

export default UserNav;