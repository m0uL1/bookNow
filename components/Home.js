import React from 'react';
import HomeNav from './HomeNav';
import style from '../styles/home.module.css'
import Cards from './Cards';

const Home = () => {
    return (
        <div>
            <HomeNav />
            <div className={style.Recommended} >
                <div className={style.Header}>
                        <div className={style.HeadTag}>
                            <h2>Recommended Movies</h2>
                        </div>
                        <div className={style.ChildTag}>
                            <h3>based on popular hits &gt; &gt;</h3>
                        </div>
                        <hr width="50%" align="left"/>
                </div>
                <div className={style.showCase}>

                </div>

            </div>
            
        </div>
    );
};

export default Home;