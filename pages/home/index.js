import React, { useState } from 'react';
import UserHome from '../../components/home/UserHome';
import PubHome from '../../components/home/PubHome';

const Home = () => {

    const index = 0;
    return (
        // function to check wheter the person is publisher or user
        <div>
            {index ? <PubHome /> : <UserHome /> }
        </div>
        
    );
};
export default Home;