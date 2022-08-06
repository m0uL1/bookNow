import React,{useState} from 'react';
import style from './recommended.module.css'
import Cards from '../Card/Cards';

import { getMovieDetails, getLanguageDetails , getGenreDetails } from '../../utils/recommendation';
import MovieDetails from './MovieDetails';

const Recommended = (props) => {
    let details
    details = (props.id_ == 0) ? getMovieDetails() : (props.id_ ==1 ? getLanguageDetails() : getGenreDetails())

    const [view,setView] = useState(0)
    const [select,setSeletion] = useState(-1)

    function updateSelection(sel){
        setView(1)
        setSeletion(sel)
    }
    
    return (
        <div className={style.Recommended} >
            <div className={style.Header}>
                    <div className={style.HeadTag}>
                        <h2> {props.Title }</h2>
                    </div>
                    <div className={style.ChildTag}>
                        <h3> {props.subTitle} </h3>
                    </div>
                    <hr width="50%" align="left"/>
            </div>

            {
                <div>
                    {
                        view
                            ?        
                                <MovieDetails id_={select}/> 
                            : 
                                null 
                    }
                    
                    <div className={style.showCase}>
                    
                            <div className={style.Movies}>
                                {
                                    (select == 0) ? null : (
                                        <div className={style.Sty1} 
                                            onClick={() =>  updateSelection(0)}
                                        >
                                            <Cards 
                                                title = {details['1'][0]}
                                                genre = {details['1'][3]}
                                                img = {details['1'][2]}
                                            /> 
                                        </div>
                                    )
                                }
                                
                                {
                                    (select == 1) ? null : (
                                        <div className={style.Sty2} 
                                            onClick={() =>  updateSelection(1)}
                                        >
                                            <Cards 
                                                title = {details['2'][0]}
                                                genre = {details['2'][3]}
                                                img = {details['2'][2]}
                                            /> 
                                        </div>
                                    )
                                }
                                {
                                    (select == 2) ? null : (
                                        <div className={style.Sty3} 
                                            onClick={() =>  updateSelection(2)}
                                        >
                                            <Cards 
                                                title = {details['3'][0]}
                                                genre = {details['3'][3]}
                                                img = {details['3'][2]}
                                            /> 
                                        </div>
                                    )
                                }
                                {
                                    (select == 3) ? null : (
                                        <div className={style.Sty4} 
                                            onClick={() =>  updateSelection(3)}
                                        >
                                            <Cards 
                                                title = {details['4'][0]}
                                                genre = {details['4'][3]}
                                                img = {details['4'][2]}
                                            /> 
                                        </div>
                                    )
                                }
                            </div>
                    </div>
                </div>
            }
             
        </div>
    )
}

export default Recommended;