import { useRouter } from "next/router";
import React, { useState } from 'react';
import style from './stream.module.css'



const videoStreamID = () => {
    const router = useRouter();


    return (
        <div>
            <div className={style.showCase}>

                <div className={style.s0}>

                </div>

                <div className={style.options}>
                    
                </div>
            </div>
            <div className={style.recommendation}>
                <div className={style.discription}>
                    
                </div>
                <div className={style.subscribe}>
                    
                </div>
            
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

                <div className={style.BookShow}>
                </div>
            </div>
        </div>
    );
}

export default videoStreamID;