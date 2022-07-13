import React from 'react';
import style from './screen.module.css'


function Screen() {
    return (

        <div className={style.masterdiv}>
            <div>
                <img className={style.underpic} src="screen.png" />
            </div>
        </div>
    );
};

export default Screen;