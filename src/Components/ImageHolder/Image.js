import React from 'react';
import { ImageHolder, Image } from './style';

function Images({ url }) {
    return (
        <ImageHolder>
            <Image src={url} />
        </ImageHolder>
    );
}

export default Images;
