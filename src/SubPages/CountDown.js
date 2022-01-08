import React, { useState, useRef, useEffect } from 'react';
import Twos from '../Components/Two_By_To/Twos';
import { Timer, Heading } from './style';

function CountDown() {
    let [days, setDays] = useState('00');
    let [hours, setHours] = useState('00');
    let [mins, setMins] = useState('00');
    let [secs, setSecs] = useState('00');
    const [display, setDisplay] = useState(false);
    let interval = useRef();

    let startTimer = () => {
        let countdownDate = new Date('match 30, 2022 00:00:00').getTime();
        interval = setInterval(() => {
            let now = new Date().getTime();
            let distance = countdownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance < 0) {
                setDisplay(false);
            } else {
                setDisplay(true);
                setDays(days);
                setHours(hours);
                setMins(mins);
                setSecs(secs);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    }, []);
    return (
        <>
            {display && (
                <Twos>
                    <Heading display={display}> The Count Down .... </Heading>
                    <Timer display={display}>
                        <section className="first">
                            <p>{days}</p>
                            <p>
                                <small>Days</small>
                            </p>
                        </section>
                        <span>:</span>
                        <section className="second">
                            <p>{hours}</p>
                            <p>
                                <small>Hours</small>
                            </p>
                        </section>
                        <span>:</span>
                        <section className="third">
                            <p>{mins}</p>
                            <p>
                                <small>Minutes</small>
                            </p>
                        </section>
                        <span>:</span>
                        <section section="last">
                            <p>{secs}</p>
                            <p>
                                <small>Seconds</small>
                            </p>
                        </section>
                    </Timer>
                </Twos>
            )}
        </>
    );
}

export default CountDown;
