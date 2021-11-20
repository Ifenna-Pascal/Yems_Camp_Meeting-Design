import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { ButtonContainer, Button } from '../style';
export const Nav = styled.div`
    background: #555;
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 999;
    opacity: ${({ open }) => (open ? '100%' : '0')};
    top: ${({ open }) => (open ? '10%' : '-100%')};
    transition: 1s ease-in-out;
    left: 0;
`;

export const NavLinks = styled.ul`
    display: flex;
    width: 100%;
    padding: 1rem, 1.5rem;
    flex-direction: column;
    margin: 3rem 2rem;
`;
export const Link = styled(LinkS)`
    margin-bottom: 1rem;
    height: 5rem;
    padding: 2rem 0;
    letter-spacing: 1.6px;
    color: white;
    font-size: 1.1rem;
    width: 78%;
    border-bottom: 1px solid gray;
`;

export const ButtonContainers = styled(ButtonContainer)`
    margin-top: 2.7rem;
    width: 78%;
`;

export const Buttons = styled(Button)`
    width: 100%;
    letter-spacing: 3px;
    font-size: 1.2rem;
`;
