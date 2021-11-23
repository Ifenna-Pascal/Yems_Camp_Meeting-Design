import styled from 'styled-components';
import px2vw from '../../Util/resize';
export const ImageHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    padding: ${px2vw(6, 414)};
    @media (min-width: 768px) {
        padding: ${px2vw(35, 1440)};
    }
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 1rem;
    height: 100%;
    @media (min-width: 768px) {
        border-radius: 2rem;
    }
`;
