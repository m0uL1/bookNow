import React,{useState} from 'react';
import style from './recommended.module.css'
import Cards from '../Card/Cards';

import { getMovieDetails, getLanguageDetails , getGenreDetails } from '../../utils/recommendation';
import MovieDetails from './MovieDetails';

const Recommended = (props) => {
    let details
    details = (props.id_ == 0) ? getMovieDetails() : (props.id_ ==1 ? getLanguageDetails() : getGenreDetails())

    const [view,setView] = useState(0)

    function gotforBooking(){
        setView(1)
    }

    console.log(view)

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

            {
                view ? <MovieDetails /> :
                (
                    <div className={style.showCase}>
                    
                            <div className={style.Movies}>
                                <div className={style.Sty1} 
                                    onClick={() =>  gotforBooking()}
                                >
                                    <Cards 
                                        title = {details['1'][0]}
                                        genre = {details['1'][3]}
                                        img = {details['1'][2]}
                                    /> 
                                </div>
                                <div className={style.Sty2}>
                                    <Cards 
                                        title = {details['2'][0]}
                                        genre = {details['2'][3]}
                                        img = {details['2'][2]}
                                    /> 
                                </div>
                                <div className={style.Sty3}>
                                    <Cards 
                                        title = {details['4'][0]}
                                        genre = {details['4'][3]}
                                        img = {details['4'][2]}
                                    /> 
                                </div>
                                <div className={style.Sty4}>
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
        </div>
    )
}

export default Recommended;