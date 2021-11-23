import React from 'react';
import Card from '../Components/Card/Card';
import Images from '../Components/ImageHolder/Image';
import Twos from '../Components/Two_By_To/Twos';
import Camping from '../Components/Images/passion.jpg';
import { Heading, Body, HR, Title, AboutWrapper, FirstBox, SecondBox, Content } from './style';
function Welcome() {
    return (
        <Twos maxwidth="500">
            {/* <video src="/videos/camp.mp4" width="750" height="500" autoPlay /> */}
            <AboutWrapper id="about">
                <Card
                    left={
                        <SecondBox>
                            <div>
                                <h1>About Camp Meeting</h1>
                                <p>
                                    Young People Love Jesus Camp Meeting is our annual youth camping programme that
                                    brings young people from different parts of the nation and beyond come together to
                                    experience a mighty touch of God upon their lives and destiny, impacting in them
                                    great passion to do great exploits for God in this generation. YEMs WW Young People
                                    Love Jesus Camping 2021 is with the theme{' '}
                                    <span
                                        style={{ color: 'rgba(29, 28, 28, 0.7)', dispaly: 'block', fontWeight: 'bold' }}
                                    >
                                        PASSION FOR CHRIST
                                    </span>
                                </p>
                            </div>
                        </SecondBox>
                    }
                    right={<Images url={Camping} />}
                    pos="left"
                    hero={true}
                />
            </AboutWrapper>
        </Twos>
    );
}

export default Welcome;

// <Heading>About Camp Meeting 2021</Heading>
// <AboutWrapper>
//     <FirstBox>
//         <Image src={Camping} />
//     </FirstBox>
//     <SecondBox>
//         <p>placeholders. Its written in Go, and uses Redis, PostgreSQL and DigitalOcean Spaces.</p>
//     </SecondBox>
// </AboutWrapper>
