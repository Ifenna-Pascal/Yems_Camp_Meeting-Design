import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Components/Nav/style';
import Twos from '../Components/Two_By_To/Twos';
import { SuccessWrapper } from '../SubPages/style';

function Success() {
    return (
        <Twos>
            <SuccessWrapper>
                <h1> Thanks For Registering, We Look Foward To Seeing You</h1>
                <Button to="/">Home Page</Button>
            </SuccessWrapper>
        </Twos>
    );
}

export default Success;
