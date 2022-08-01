import { useRouter } from "next/router";
import React, { useState } from 'react';
import { generatePath } from "react-router-dom";
import GridCard from "../../../components/Card/GridCard";
import MovieDetails from "../../../components/HomeCom/MovieDetails";


const genre = () => {
    const router = useRouter();
    return (
        <div>
            <h2>
               <GridCard resultFor={router['query']['genre']} />
            </h2>
        </div>
    );
}

export default genre;