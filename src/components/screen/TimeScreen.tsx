import React from 'react';
import style from './TimeScreen.module.css';


export const TimeScreen: React.FC<PropsType> = ({ time }) => {

    const hours = ('0' + Math.floor((time / 3600) % 60)).slice(-2)
    const minutes = ('0' + Math.floor((time / 60) % 60)).slice(-2)
    const seconds = ('0' + Math.floor(time % 60)).slice(-2)

    return (
        <div className={style.screen}>
            <span className={style.first}>{hours}</span>
            <span className={style.second}>:</span>
            <span className={style.first}>{minutes}</span>
            <span className={style.second}>:</span>
            <span className={style.first}>{seconds}</span>
        </div>
    );
};


type PropsType = {
    time: number
};

