import React from 'react';
import style from './moviedetails.module.css'
import styled from 'styled-components';
import { getMovieDetails, getLanguageDetails , getGenreDetails } from '../../utils/recommendation';
import { SolanaJSONRPCError } from '@solana/web3.js';
import EmptyCard from '../Card/EmptyCard';

const MovieDetails = (props) => {
    
        const Bar = styled.div`
            position: relative;
            height: 130px;
            width: 50%;
            border-radius: 7px;
            border: 1px solid #ccc;
            margin-bottom : 10px;
        `

        const Fill = styled.div`
            background: #aa6c39;
            height: 100%;
            border-radius: inherit;
            margin-top:${(props) => `${129-(130*props.percentual)/100}px`};
            height: ${(props) => `${props.percentual}%`};
        `

        const SOLfield = () => {
            return (
                <div>
                    <p className={style.SOL}> 1 Sol </p>
                    <Bar>
                        <Fill percentual={`${Math.round(60)}`} />
                    </Bar>
                    <p  className={style.SOL}> 0 Sol </p>
                </div>
            )
        }

        const Ratefield = () => {
            return (
                <div>

                </div>
            )
        }

        const admin = 0;
    return (
        <div className={style.gridCard} >
            <div className={style.showCase}>
            <div className={style.Movies}>
                <div className={style.MovieCard}>
                    <EmptyCard />
                </div>
                <div className={style.details}>
                    <center>
                    <h2> Movie Name </h2>
                    </center> 
                </div>
                <div className={style.outcomes}>

                    <button className={style.like}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        
                    </button>
                    <br />
                        <center>
                            <span > 12 </span>
                        </center>
                    <br />

                    <button className={style.dislike}>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                    </button>
                    <br />
                        <center>
                            <span > 23 </span>
                        </center>
                    <br />
                    <center>
                        <div>
                            {admin ? <SOLfield /> : <Ratefield />}
                        </div>
                    </center>
                </div>
             </div>
        </div>
    </div>
    )
}

export default MovieDetails;