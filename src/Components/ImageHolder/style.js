import styled from 'styled-components';
import px2vw from '../../Util/resize';
export const ImageHolder = styled.div`
    display: flex;
    border-radius: 0 2rem 0 2rem;
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
    height: 100%;
    @media (min-width: 768px) {
        border-radius: 2rem;
    }
`;
