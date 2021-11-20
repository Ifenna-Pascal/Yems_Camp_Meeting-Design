import styled from 'styled-components';
import px2vw from '../../Util/resize';

export const PastorsLayout = styled.div`
    max-width: ${px2vw(370, 414)};
    margin: ${px2vw(15, 414)} auto;
    width: 100%;
    @media (min-width: 768px) {
        max-width: ${px2vw(1250, 1440)};
        margin: ${px2vw(30, 1440)} auto;
    }
`;
export const Pastors = styled.div`
    display: grid;
    gap: 30px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
    div {
        position: relative;
        &:hover {
            p {
                opacity: 1;
            }
            div img {
                transform: scale(0.9);
            }
        }
    }
    @media (min-width: 768px) {
        .first {
            grid-row-start: 1;
            grid-row-end: 3;
            grid-column-start: 1;
            grid-column-end: 3;
        }
        .second {
            grid-row-start: 1;
            grid-row-end: 2;
            grid-column-start: 5;
            grid-column-end: 7;
            /* background-color: red; */
        }
        .third {
            grid-row-start: 1;
            grid-row-end: 3;
            grid-column-start: 3;
            grid-column-end: 5;
        }
        .six {
            grid-row-start: 2;
            grid-row-end: 3;
            grid-column-start: 5;
            grid-column-end: 6;
        }
    }
`;

export const Pastor = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 3rem;
    cursor: pointer;
    object-fit: contain;
    transition: 0.5s ease-in-out;
`;
export const Text = styled.p`
    opacity: 0;
    position: absolute;
    top: 80%;
    left: 10%;
    z-index: 10;
`;
