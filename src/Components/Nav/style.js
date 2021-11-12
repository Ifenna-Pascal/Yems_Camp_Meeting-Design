import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import px2vw from '../../Util/resize';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../App.css';

export const NavContainer = styled.section`
    background: white;
    box-shadow: ${({ scroll }) => (scroll ? '0 2px 2px -2px rgba(0,0,0,.2)' : 'none')};
    border-bottom: 0.5px solid #ece5e5;
    height: fit-content;
    padding-bottom: 0.5rem;
    position: sticky;
    z-index: 10;
    top: 0;
    width: 100%;
    @media (min-width: 768px) {
        height: fit-content;
        border-bottom: none;
        padding-bottom: 0;
    }
    /* @media (max-width: 798px) {
        height: ${px2vw(190, 1440)};
        border-bottom: none;
        padding-bottom: 0;
    } */
`;
export const NavContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.9rem 3rem;
    @media (min-width: 768px) {
    }
`;

export const NavRight = styled.div`
    align-self: flex-end;
    display: flex;
`;

export const MobileLogo = styled(LinkS)`
    align-self: flex-end;
    display: block;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const FaBar = styled(FaBars)`
    font-size: 2rem;
    font-weight: 300;
    color: #555;
`;
export const FaTime = styled(FaTimes)`
    font-size: 2rem;
    font-weight: 300;
    color: #555;
`;
export const NavLinks = styled.ul`
    display: none;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-around;
        margin-right: 2rem;
    }
`;

export const Link = styled(LinkS)`
    margin-right: 1rem;
    padding: 0.7rem;
    font-size: 1.1rem;
    font-family: 'Roboto Slab', serif;
    font-weight: 500;
    letter-spacing: 0.8px;

    &:hover {
        color: #7ad03a;
        cursor: pointer;
    }
`;
export const NavLeft = styled.div`
    align-self: flex-start;
`;
export const Heading = styled.h1`
    font-size: 2rem;
    font-family: 'Roboto Slab', serif;
    span {
        color: #7ad03a;
    }
`;
export const ButtonContainer = styled.div`
    @media (min-width: 768px) {
        margin-left: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;
export const Button = styled.button`
    padding: 0.6rem 3rem;
    border: none;
    background: #7ad03a;
    font-size: 1rem;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: 'Lato', sans-serif;

    &:hover {
        cursor: pointer;
        transition: 1s ease-in;
        color: #7ad03a;
        background: whitesmoke;
    }
`;
