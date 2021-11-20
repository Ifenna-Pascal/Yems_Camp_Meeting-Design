import React from 'react';
import Card from '../Components/Card/Card';
import Images from '../Components/ImageHolder/Image';
import { Image } from '../Components/ImageHolder/style';
import Three from '../Components/Text_three/Three';
import Twos from '../Components/Two_By_To/Twos';
import Camping from '../Components/Images/passion.jpg';
// import video from "public/camp.mp4"
import { Heading, Body, HR, Title, AboutWrapper, FirstBox, SecondBox, Content } from './style';
const url = 'https://cdn.pixabay.com/photo/2019/12/16/14/46/black-man-4699506_960_720.jpg';
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
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum
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
