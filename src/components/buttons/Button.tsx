import React from 'react';
import style from './Button.module.css';


export const Buttons: React.FC<PropsType> = ({ start, stop, wait, reset, watchOn }) => {

    return (
        <div className={style.buttons}>
            <button className={watchOn ? style.display : ''} onClick={start}>
                Start
            </button>

            <button className={watchOn ? '' : style.display} onClick={stop}>
                Stop
            </button>

            <button onClick={wait}>
                Wait
            </button>

            <button onClick={reset}>
                Reset
            </button>
        </div>
    );
};


type PropsType = {
    start: () => void
    stop: () => void
    wait: () => void
    reset: () => void
    watchOn: boolean
}
