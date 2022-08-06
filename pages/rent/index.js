import React, { useState } from 'react';
import OttCard from '../../components/Card/OttCard';

import Recommended from "../../components/HomeCom/Recommened"

function rent(){

    return (
        <div>
           <OttCard />
           <Recommended Title="Recommended Movies"
                            subTitle= " -- 4 most popular hit movies >> "
                            id_ = {0}
                        />
        </div>
    );
};
export default rent;