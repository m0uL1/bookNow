import { useRouter } from "next/router";
import React, { useState } from 'react';
import { generatePath } from "react-router-dom";
import GridCard from "../../../components/Card/GridCard";
import MovieDetails from "../../../components/HomeCom/MovieDetails";
import UserNav from "../../../components/Nav/UserNav";


const genre = () => {
    const router = useRouter();
    return (
        <div>
            <UserNav />
            <GridCard resultFor={router['query']['genre']} />
        </div>
    );
}

export default genre;