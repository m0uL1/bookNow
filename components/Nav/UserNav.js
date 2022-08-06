import React from 'react';
import style from './homenav.module.css';
const UserNav = () => {
    return (
        <div className={style.navbar} >
            <a href="/home"><img src="https://www.pngkey.com/png/full/393-3933881_book-now-button-book-now-button-png.png" /></a>
            <a href="/home">Home</a>
            <a href="#newMoview"> Movies</a>
            <div className={style.dropdown}>
                <button className={style.dropbtn} > Location
                </button>
                <center>
                    <div className={style.dropdown_content_input} >
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
                <a href="/categories/language/telugu"> Telugu </a>
                <a href="/categories/language/tamil"> Tamil </a>
                <a href="/categories/language/hindi"> Hindi </a>
                <a href="/categories/language/english"> English </a>
                </div>
            </div> 

            <div className={style.dropdown}>
                <button className={style.dropbtn} > Genre
                    <i>
                    </i>
                </button>
                <div className={style.dropdown_content} >
                    <a href="/categories/genre/comedy"> Comedy </a>
                    <a href="/categories/genre/thriller"> Thriller </a>
                    <a href="/categories/genre/action"> Action </a>
                    <a href="/categories/genre/romance"> Romance </a>
                    <a href="/categories/genre/family"> Family </a>
                </div>
            </div> 

            <a href="/coupons"> *Coupons </a>
            <a href="/rent"> Stream/Rent </a>

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