import React from 'react';
import style from './moviedetails.module.css'
import Cards from '../Card/Cards';

import { getMovieDetails, getLanguageDetails , getGenreDetails } from '../../utils/recommendation';

const MovieDetails = (props) => {
    let details
    details = (props.id_ == 0) ? getMovieDetails() : (props.id_ ==1 ? getLanguageDetails() : getGenreDetails())

    return (
        <div className={style.gridCard} >
            <div className={style.showCase}>
                <div className={style.MovieCard}>
                    <Cards />
                </div>
                <div className={style.details}>
                </div>
                <div className={style.values}>
                    
                </div>

            </div>
        </div>
    )
}

export default MovieDetails;