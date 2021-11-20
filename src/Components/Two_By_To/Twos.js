import React from 'react';
import Card from '../Card/Card';
import { EventContainer, Event, EventWrapper } from './style';

function Twos({ children, hero, maxwidth }) {
    return (
        <EventContainer hero={hero} id="home">
            <EventWrapper>
                <Event maxwidth={maxwidth}>{children}</Event>
            </EventWrapper>
        </EventContainer>
    );
}

export default Twos;
