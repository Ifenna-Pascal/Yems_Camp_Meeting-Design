import React from 'react';
import Twos from '../Components/Two_By_To/Twos';
import Card from '../Components/Card/Card';
import Three from '../Components/Text_three/Three';
import Images from '../Components/ImageHolder/Image';
import img from '../Components/Images/blob.png';
function Hero() {
    return (
        <Twos hero maxwidth={1100}>
            <Card
                left={
                    <Three
                        small="Passion For Christ"
                        big={'Spend quality time in the presence of GOD'}
                        btn_text=" Join Us"
                    />
                }
                right={<Images url={img} />}
                posW="left"
                hero={false}
            />
        </Twos>
    );
}

export default Hero;
