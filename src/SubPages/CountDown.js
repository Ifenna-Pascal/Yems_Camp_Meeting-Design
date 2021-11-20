import React, { useState, useRef, useEffect } from 'react';
import Twos from '../Components/Two_By_To/Twos';
import { Timer, Video, Container, Heading } from './style';
import video from '../Components/Media/today.mp4';
import ReactPlayer from 'react-player';

function CountDown() {
    let [days, setDays] = useState('00');
    let [hours, setHours] = useState('00');
    let [mins, setMins] = useState('00');
    let [secs, setSecs] = useState('00');
    const [display, setDisplay] = useState(false);
    let interval = useRef();

    let startTimer = () => {
        let countdownDate = new Date('Dec 14, 2021 00:00:00').getTime();
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
        <Twos>
            {/* <Container> */}
            {/* <ReactPlayer url="../components/Media/today.mp4" /> */}
            <Heading> The Count Down .... </Heading>
            <Timer>
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
            {/* </Container> */}
        </Twos>
    );
}

export default CountDown;
