import React from 'react';
import style from './homenav.module.css';
import { Link } from "react-router-dom";

const PubNav = () => {
    return (
        <div className={style.navbar} >
                <a>
                    <img src="https://www.pngkey.com/png/full/393-3933881_book-now-button-book-now-button-png.png" />
                </a>
            <a href="#home">Home</a>
            <a href="#myuploads"> myUploads </a>
            <a href="#publish"> Publish </a>
            <a href="#Coupons"> OTT/Rent </a>


            <div className={style.avatar}>
                <div className={style.usericon}><span className={style.dot}></span>
                </div>
            </div>


        </div>
    );
};

export default PubNav;