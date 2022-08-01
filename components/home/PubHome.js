import React from 'react';
import HomeNav from '../Nav/PubNav';
import style from './userhome.module.css'
import MovieDetails from '../HomeCom/MovieDetails';

const PubHome = () => {
    const uploadCounts = 1;

    const Nomore = () => {
        return (
            <div className={style.nomore}>
                <h2> No More uploaded content </h2>
            </div>
        );
    }

    const ViewAll = () => {
        return (
            <div className={style.nomore}>
                <a href='/myuploads'> <h2>View All --&gt; </h2> </a>
            </div>
        )
    }

    return (
        <div>
            <HomeNav />
            <div className={style.Header}>
                    <div className={style.HeadTag}>
                        <h2> Most Recent uploads ^_-</h2>
                    </div>
                    <hr width="50%" align="left"/>
            </div>
            {
                (uploadCounts > 0 ? <MovieDetails /> : <></>)
            }
            <br />
            {
                (uploadCounts > 1 ? <MovieDetails /> : <Nomore />)
            }
            {
                (uploadCounts > 1 ? <ViewAll /> : <> </>)
            }
        </div>
    );
};

export default PubHome;

