import React from 'react';
import style from '../styles/recommended.module.css'
import Cards from './Cards';

const Recommended = (props) => {
    console.log(props.movienames)
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
                            
                            /> 
                        </div>
                        <div className={style.MovieStyle}>
                             <Cards 

                             /> 
                        </div>
                        <div className={style.MovieStyle}> 
                            <Cards 
                            />
                         </div>
                        <div className={style.MovieStyle}> 
                            <Cards
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
                            <Cards title={props.movienames[2]}
                            ids = {props.ids[2]}
                            img = {props.img[2]}
                            genre = {props.genre[2]}
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