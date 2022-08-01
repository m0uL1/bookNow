import React from 'react';
import style from './recommended.module.css'
import Cards from '../Card/Cards';

import { getMovieDetails, getLanguageDetails , getGenreDetails } from '../../utils/recommendation';

const Recommended = (props) => {
    let details
    details = (props.id_ == 0) ? getMovieDetails() : (props.id_ ==1 ? getLanguageDetails() : getGenreDetails())

    return (
        <div className={style.Recommended} >
            <div className={style.Header}>
                    <div className={style.HeadTag}>
                        <h2> {props.Title }</h2>
                    </div>
                    <div className={style.ChildTag}>
                        <h3> {props.subTitle} &gt; &gt;</h3>
                    </div>
                    <hr width="50%" align="left"/>
            </div>
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
        </div>
    )
}

export default Recommended;

/**
 * <div className={style.MovieStyle} >
                            <Cards 
                            title={props["movienames"][0]}
                            ids = {props.ids[0]}
                            img = {props.img[0]}
                            genre = {props.genre[0]}

                            /> 
                        </div>
                        <div className={style.MovieStyle}>
                             <Cards title={props.movienames[1]}
                             ids = {props.ids[1]}
                             img = {props.img[1]}
                             genre = {props.genre[1]}

                             /> 
                        </div>
                        <div className={style.MovieStyle}> 
                            <Cards title={props.movienames[3]}
                            ids = {props.ids[3]}
                            img = {props.img[3]}
                            genre = {props.genre[3]}
                            />
                         </div>
                        <div className={style.MovieStyle}> 
                            <Cards title={props.movienames[3]}
                            ids = {props.ids[3]}
                            img = {props.img[3]}
                            genre = {props.genre[3]}
                            /> 
                        </div>
 */