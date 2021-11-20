import React from 'react';
import { ThreeWrapper, ThreeSmall, BtnWrapper, Button, ThreeBig } from './style';

function Three({ small, big, btn_text }) {
    return (
        <ThreeWrapper>
            <ThreeSmall>{small}</ThreeSmall>
            <ThreeBig>{big}</ThreeBig>
            <BtnWrapper>
                <Button style={{ textDecoration: 'none' }} to="/register">
                    {btn_text}
                </Button>
            </BtnWrapper>
        </ThreeWrapper>
    );
}

export default Three;
