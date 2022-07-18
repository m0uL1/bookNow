import React from 'react';
import HomeNav from './HomeNav';
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
                            movienames={["Movie1","Movie2","Movie3","Movi4"]}
                            ids={[11,22,33,44]}
                            img={[
                                "https://www.themoviedb.org/t/p/w500/8HLQLILZLhDQWO6JDpvY6XJLH75.jpg",
                                "https://r7k2t3x9.rocketcdn.me/wp-content/uploads/2021/01/img-16743.jpg",
                                "https://static.wikia.nocookie.net/villains/images/c/cf/Doom_2005_poster.jpg/revision/latest?cb=20220110191103",
                                "https://static.wikia.nocookie.net/marvelmovies/images/5/56/JohnnyStormHalfFlame-FF.jpg/revision/latest?cb=20131228033431"
                            ]}
                            genre = {["comedy","action","comedy","thriller"]}
                            
                            
                        />
                </div>
            </div>
            <div className={style.rec}>
                <div className={style.topdiv}> 
                    <Recommended Title=" Languages "
                            subTitle= " Regoinal/Desi Voices" />
                </div>
            </div>

            <div className={style.rec}>
                <div className={style.topdiv}> 
                    <Recommended Title=" Genres"
                            subTitle= " Action/Comedy/Thriller " />
                </div>
            </div>
            
            
        </div>
    );
};

export default Home;