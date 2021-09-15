import React, {useEffect, useState} from 'react';
import {interval, Subject,} from "rxjs";
import {takeUntil,} from 'rxjs/operators';
import style from './App.module.css';
import {TimeScreen} from './components/screen/TimeScreen';
import {Buttons} from './components/buttons/Button';


function App() {
    const [time, setTime] = useState(0);
    const [stopWatchOn, setStopWatchOn] = useState(false);

    useEffect(() => {
        const unsubscribe = new Subject();
        interval(1000)
            .pipe(takeUntil(unsubscribe))
            .subscribe(() => {
                if (stopWatchOn) {
                    setTime((val) => val + 1);
                }
            });
        return () => {
            unsubscribe.next(false);
            unsubscribe.complete();
        };
    }, [stopWatchOn]);

    const onClickHandleStart = () => {
        setStopWatchOn(true);
    };

    const onClickHandleStop = () => {
        if (time !== 0) {
            setStopWatchOn(false);
            setTime(0);
        }
    };

    let wasClicked = false;
    let timeout: NodeJS.Timeout;
    const onClickHandleWait = () => {
        if (wasClicked) {
            wasClicked = false;
            clearTimeout(timeout);
            setStopWatchOn(false);
            return;
        }
        wasClicked = true;
        timeout = setTimeout(() => {
            wasClicked = false;
        }, 300);
    };

    const onClickHandleReset = () => {
        setTime(0);
        setStopWatchOn(false);
        if (time !== 0) {
            onClickHandleStart();
        }
    };

    return (
        <div className={style.container}>
            <TimeScreen time={time}/>
            <Buttons
                start={onClickHandleStart}
                stop={onClickHandleStop}
                wait={onClickHandleWait}
                reset={onClickHandleReset}
                watchOn={stopWatchOn}
            />
        </div>
    );
}


export default App;
