import React from 'react';
import style from '../styles/chair.module.css'
function Chair() {
    return (
            <div className={style.chair}>
                <img src="chair.png" className={style.chairImage} />
            </div>
    );
};

export default Chair;