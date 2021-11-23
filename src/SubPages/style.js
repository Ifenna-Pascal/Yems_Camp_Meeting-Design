import styled from 'styled-components';
import { NavContainer } from '../Components/Nav/style';
import px2vw from '../Util/resize';

export const Heading = styled.h3`
    text-align: center;
    text-align: center;
    color: rgba(29, 28, 28, 0.8);
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: ${px2vw(25, 414)};
    letter-spacing: 1px;
    margin-bottom: ${px2vw(30, 414)};
    @media (min-width: 768px) {
        font-size: ${px2vw(32, 1440)};
        letter-spacing: 1px;
        margin-bottom: ${px2vw(20, 1440)};
    }
`;
export const Body = styled.p`
    text-align: center;
    width: 100%;
    color: gray;
    margin-top: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${px2vw(20, 414)};
    padding: ${px2vw(15, 414)} ${px2vw(30, 414)};
    border: 1px solid #7ad03a;
    @media (min-width: 768px) {
        padding: 0 ${px2vw(150, 1440)};
        font-size: ${px2vw(20, 1440)};
        border: none;
    }
`;

export const Faq = styled.div`
    width: 100%;
    max-width: ${px2vw(380, 414)};
    margin: 0.7rem auto;
    @media (min-width: 768px) {
        max-width: ${px2vw(900, 1440)};
        margin: 0.7rem auto;
    }
`;
export const Question = styled.div`
    padding: ${px2vw(10, 414)} ${px2vw(20, 414)};
    border: 1px solid rgba(29, 28, 28, 0.2);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin-bottom: 0.8rem;
    @media (min-width: 768px) {
        padding: ${px2vw(17, 1440)} ${px2vw(30, 1440)};
    } ;
`;

export const QuestionHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    span {
        color: ${({ show }) => (show ? '#0082fc' : 'rgba(29, 28, 28, 0.9)')};
        font-size: ${px2vw(15, 414)};
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 1.3px;
    }
    div {
        &:hover {
            cursor: pointer;
        }
    }
    @media (min-width: 768px) {
        span {
            font-size: ${px2vw(16, 1440)};
        }
    }
`;
export const QuestionReply = styled.div`
    margin-top: 1rem;
    color: gray;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const HR = styled.span`
    @media (min-width: 768px) {
        width: 100%;
        text-align: center;
        max-width: 200px;
        margin: 0 auto;
        background-color: #7ad03a;
        height: 3px;
    }
`;

export const Bgg = styled.div``;
export const Title = styled(Heading)`
    align-self: flex-start;
    justify-self: flex-start;
    text-align: left;
`;
export const Content = styled.p`
    align-self: flex-start;
    text-align: left;
`;
export const SuccessWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100vh;
    h1 {
        font-family: 'Monteserrat' sans-serif;
        font-size: ${px2vw(20, 414)};
        margin-bottom: 2rem;
    }
    @media (min-width: 768px) {
        h1 {
            font-size: ${px2vw(40, 1440)};
        }
    }
`;

export const Timer = styled.div`
    max-width: ${px2vw(370, 414)};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${px2vw(20, 414)};
    border: 1px solid gray;
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        padding: ${px2vw(10, 414)};
        margin-right: ${px2vw(10, 414)};
        &:nth-child(1) {
            border-top: 3px solid green;
        }
        &:nth-child(3) {
            border-top: 3px solid #0082fc;
        }
        &:nth-child(5) {
            border-top: 3px solid red;
        }
        &:nth-child(7) {
            border-top: 3px solid purple;
        }
        p {
            font-family: 'Monteserrat' sans-serif;
            font-size: ${px2vw(19, 414)};
            font-weight: 00;
        }
        p small {
            font-size: ${px2vw(13, 414)};
            color: gray;
            font-weight: 300;
        }
    }
    @media (min-width: 768px) {
        max-width: ${px2vw(650, 1440)};
        padding: ${px2vw(30, 1440)};
        section {
            padding: ${px2vw(30, 1440)};
            margin-right: ${px2vw(20, 1440)};
            p {
                font-size: ${px2vw(22, 1440)};
            }
            span {
                font-size: ${px2vw(42, 1440)};
            }
            p small {
                font-size: ${px2vw(15, 1440)};
                color: gray;
                font-weight: 300;
            }
        }
    }
`;

export const Video = styled.video`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;
export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;
export const AboutWrapper = styled.div`
    max-width: ${px2vw(412, 414)};
    margin: 0 auto;
    position: relative;
    display: flex;
    padding: ${px2vw(5, 414)};
    @media (min-width: 768px) {
        max-width: ${px2vw(1200, 1440)};
        padding: ${px2vw(30, 1440)};
    }
`;
export const FirstBox = styled.div`
    position: absolute;
    width: ${px2vw(150, 414)};
    height: ${(150, 414)};
    top: -20%;
    left: 12%;
    z-index: 10;
    @media (min-width: 768px) {
        width: ${px2vw(260, 1440)};
        height: ${(260, 1440)};
    }
`;

export const SecondBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: ${px2vw(8, 414)};
    /* margin-top: ${px2vw(17, 414)}; */
    div {
        padding: ${px2vw(0, 414)} ${px2vw(11, 414)};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1 {
        font-size: ${px2vw(22, 414)};
        color: rgba(29, 28, 28, 0.8);
        width: 100%;
        text-align: center;
        margin-bottom: ${px2vw(12, 414)};
        font-family: 'Montserrat', sans-serif;
    }
    p {
        font-size: ${px2vw(19, 414)};
        text-align: center;
        color: gray;
        line-height: ${px2vw(32, 414)};
    }
    @media (min-width: 768px) {
        margin-top: ${px2vw(150, 1440)};
        padding: ${px2vw(10, 1440)};
        div {
            padding: ${px2vw(10, 1440)};
            margin: ${px2vw(5, 1440)};
            justify-content: flex-start;
        }
        h1 {
            text-align: left;
            font-size: ${px2vw(27, 1440)};
            margin-bottom: ${px2vw(12, 1440)};
        }
        p {
            font-size: ${px2vw(18, 1440)};
            text-align: left;
            line-height: ${px2vw(32, 1440)};
        }
    }
`;
export const AboutSection = styled.section`
    width: 100%;
    &:nth-child(1) {
        background-image: url('https://images.pexels.com/photos/3569890/pexels-photo-3569890.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
                contain,
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
        background-blend-mode: overlay;
        background-repeat: no-repeat;
        padding: 2rem;
    }
    &:nth-child(2) {
        background-color: rgba(0, 0, 0, 0.5);
        padding: 1.3rem;
    }
`;

export const FooterContent = styled(NavContainer)`
    background: #0082fc;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    marquee {
        color: white;
        font-family: 'Monteserrat' sans-serif;
        font-size: ${px2vw(20, 414)};
        padding: 1rem;
    }
    @media (min-width: 768px) {
        marquee {
            font-size: ${px2vw(25, 1440)};
        }
        min-height: ${px2vw(50, 1440)};
    }
`;
export const Events = styled.section`
    width: 100%;
    margin: 2rem 0;
    display: flex;
    background: #0082fc;
    max-height: fit-content;
    flex-direction: column;
    padding: ${px2vw(15, 414)};
    @media (min-width: 768px) {
        padding: ${px2vw(12, 1440)};
    }
`;
export const EventContent = styled.div`
    display: flex;
    margin: 1rem 0;
    flex-direction: column;
    justify-content: space-around;
    padding: ${px2vw(3, 414)};
    div {
        color: white;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-radius: 10px;
        /* clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%); */
        width: 70%;
        flex-basis: 25%;
        margin-bottom: 2.3rem;
        align-self: center;
        /* z-index:; */
        text-align: center;
        padding: 1.5rem;
        justify-self: center;
        /* margin-right: 1rem; */
        span:nth-child(1) {
            /* color: #000; */
        }
        b {
            padding-top: -2rem;
        }
        &:nth-child(2) {
            background: white;
            box-shadow: 0;
            z-index: 10;
            color: #0082fc;
        }
    }
    @media (min-width: 768px) {
        padding: ${px2vw(20, 1440)};
        flex-direction: row;
        div {
            margin-bottom: 0;
        }
    }
`;
