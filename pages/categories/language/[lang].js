import { useRouter } from "next/router";
import React, { useState } from 'react';
import { generatePath } from "react-router-dom";
import GridCard from "../../../components/Card/GridCard";
import MovieDetails from "../../../components/HomeCom/MovieDetails";
import UserNav from "../../../components/Nav/UserNav"
import style from "../style.module.css";
const lang = () => {
    const router = useRouter();
    console.log(router['query']['lang'])
    if (router['query']['lang'] == undefined){
        return (
            <div>
                PageNotFound
            </div>
        );
    }
    return (
        <div>
            <UserNav />
            <div className="" >
            <div className={style.Header}>
                    <div className={style.HeadTag}>
                        <h2> Most related results to {router['query']['lang']}  </h2>
                    </div>
                    <hr width="50%" align="left"/>
            </div>
            <GridCard />
            </div>
        </div>
    );
}

export default lang;