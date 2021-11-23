import styled from 'styled-components';
import px2vw from '../../Util/resize';
import { Link } from 'react-router-dom';
export const ThreeWrapper = styled.div`
    padding: ${px2vw(5, 414)};
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    /* line-height: ${px2vw(20, 414)}; */
    @media (min-width: 768px) {
        padding: ${px2vw(10, 1440)};
        /* line-height: ${px2vw(40, 1440)}; */
    }
`;
export const ThreeSmall = styled.span`
    color: gray;
    font-size: ${px2vw(22, 414)};
    font-family: 'Praise', sans-serif;
    letter-spacing: 1px;
    word-spacing: 2px;
    text-align: center;
    margin-bottom: ${px2vw(15, 414)};
    line-height: ${px2vw(25, 414)};
    @media (min-width: 768px) {
        font-size: ${px2vw(30, 1440)};
        margin-bottom: ${px2vw(20, 1440)};
        line-height: ${px2vw(50, 1440)};
        text-align: left;
    }
`;
export const ThreeBig = styled.h2`
    text-align: center;
    color: black;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: ${px2vw(42, 414)};
    line-height: ${px2vw(62, 414)};
    letter-spacing: 0.4px;
    margin-bottom: ${px2vw(15, 414)};
    @media (min-width: 768px) {
        font-size: ${px2vw(40, 1440)};
        margin-bottom: ${px2vw(30, 1440)};
        line-height: ${px2vw(60, 1440)};
        text-align: left;
        padding: 0 ${px2vw(44, 1440)} 0 0;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        /* width: ${px2vw(100, 1440)}; */
    }
`;
export const Button = styled(Link)`
    padding: ${px2vw(20, 414)} ${px2vw(50, 414)};
    font-size: ${px2vw(25, 414)};
    border-radius: 7px;
    border: none;
    background: ${(props) => props.bg || '#0082fc'};
    color: white;
    justify-self: center;
    align-self: center;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: 'Lato', sans-serif;
    @media (min-width: 768px) {
        padding: ${px2vw(10, 1440)} ${px2vw(60, 1440)};
        font-size: ${px2vw(25, 1440)};
        justify-self: flex-start;
        align-self: flex-start;
        font-weight: 200;
        border-radius: 0;
    }
`;
