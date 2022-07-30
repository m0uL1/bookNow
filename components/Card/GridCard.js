import React from 'react';
import style from './gridcard.module.css'
import Cards from './Cards';

import { getMovieDetails, getLanguageDetails , getGenreDetails } from '../../utils/recommendation';

const GridCard = (props) => {
    let details
    details = (props.id_ == 0) ? getMovieDetails() : (props.id_ ==1 ? getLanguageDetails() : getGenreDetails())


    const Grid = () =>{
        return (

            <div className={style.showCase}>
            
                    <div className={style.Movies}>
                        <div className={style.MovieStyle} >
                            <Cards 
                                title = {details['1'][0]}
                                genre = {details['1'][3]}
                                img = {details['1'][2]}
                            /> 
                        </div>
                        <div className={style.MovieStyle}>
                             <Cards 
                                title = {details['2'][0]}
                                genre = {details['2'][3]}
                                img = {details['2'][2]}
                             /> 
                        </div>
                        <div className={style.MovieStyle}> 
                            <Cards
                                title = {details['3'][0]}
                                genre = {details['3'][3]}
                                img = {details['3'][2]}
                            />
                         </div>
                        <div className={style.MovieStyle}> 
                            <Cards
                                title = {details['4'][0]}
                                genre = {details['4'][3]}
                                img = {details['4'][2]}
                            /> 
                        </div>
                       
                    </div>
            </div>

        )
    }

    return (
        <div className={style.gridCard} >
            <div className={style.Header}>
                    <div className={style.HeadTag}>
                        <h2> Most related results to Telugu {props.resultFor}  </h2>
                    </div>
                    <hr width="50%" align="left"/>
            </div>
            
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <hr width="50%" align="left"/>

        </div>
    )
}

export default GridCard;
