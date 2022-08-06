import React,{useState} from 'react';
import Cards from './Cards';
import style from './ott.module.css'


import { getMovieDetails, getLanguageDetails , getGenreDetails } from '../../utils/recommendation';
import EmptyCard from './EmptyCard';

const OttCard = (props) => {
        return (
        <div className={style.showCase}>
            <div className={style.s1}>
                
            </div>
            <div className={style.s2}>
            </div>
            
            <div className={style.s3}>
            </div>

            <div className={style.s4}>
            </div>
            <div className={style.s5}>
                
            </div>
            <div className={style.s6}>
            </div>
            
            <div className={style.s7}>
            </div>

            <div className={style.s8}>
            </div>
            <div className={style.s9}>
            
            </div>
            <div className={style.s10}>
            </div>
            
            <div className={style.s11}>
            </div>

            <div className={style.s12}>
            </div>
            <div className={style.s13}>
                
            </div>
            <div className={style.s14}>
            </div>

            <div className={style.BookShow}>

            </div>
        </div>
        )
}

export default OttCard;
