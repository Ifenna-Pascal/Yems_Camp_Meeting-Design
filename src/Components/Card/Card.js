import React from 'react';
import { Right, Left, Display } from './style';
function Card({ right, left, posW, hero }) {
    return (
        <Display posW={posW}>
            <Left>{left} </Left>
            <Right hero={hero}>{right}</Right>
        </Display>
    );
}

export default Card;
