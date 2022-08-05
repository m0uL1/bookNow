import { useRouter } from "next/router";
import React, { useState } from 'react';
import { generatePath } from "react-router-dom";
import GridCard from "../../../components/Card/GridCard";
import MovieDetails from "../../../components/HomeCom/MovieDetails";
import UserNav from "../../../components/Nav/UserNav"
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
            <GridCard resultFor={router['query']['lang']} />
        </div>
    );
}

export default lang;