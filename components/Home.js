import React from 'react';
import HomeNav from './UserNav';
import style from '../styles/home.module.css'
import Recommended from './Recommened';

const Home = () => {


    return (
        <div>
            <HomeNav />
            <div className={style.rec}>
                <div className={style.topdiv}> 
                    <Recommended Title="Recommended Movies"
                            subTitle= "4 most popular hit movies"
                            id_ = {0}
                        />
                </div>
            </div>
            <div className={style.rec}>
                <div className={style.topdiv}> 
                    <Recommended Title=" Languages "
                            subTitle= " Regoinal/Desi Voices"
                            id_ = {1} />
                </div>
            </div>

            <div className={style.rec}>
                <div className={style.topdiv}> 
                    <Recommended Title=" Genres"
                            subTitle= " Action/Comedy/Thriller"
                            id_ = {2} />
                </div>
            </div>
            
            
        </div>
    );
};

export default Home;