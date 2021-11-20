import styled from 'styled-components';
import px2vw from '../../Util/resize';

export const Display = styled.div`
    display: flex;
    flex-direction: ${({ pos }) => (pos === 'left' ? 'column' : 'column-reverse')};
    padding: ${px2vw(10, 414)} ${px2vw(20, 414)};
    width: 100%;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        flex-direction: ${({ posW }) => (posW === 'left' ? 'row' : 'row-reverse')};
        padding: ${px2vw(1, 1440)} ${px2vw(10, 1440)};
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`;
export const Left = styled.div`
    flex-basis: 50%;
    padding: ${px2vw(15, 414)};
    height: 100%;
    width: 100%;
    @media (min-width: 768px) {
        padding: ${px2vw(2, 1440)} ${px2vw(10, 1440)};
    }
`;
export const Right = styled.div`
    flex-basis: 50%;
    justify-self: center;
    align-self: center;
    text-align: center;
    display: ${({ hero }) => (hero ? 'block' : 'none')};
    padding: ${px2vw(10, 414)} ${px2vw(20, 414)};
    height: 100%;
    width: 100%;
    @media (min-width: 768px) {
        display: block;
        padding: ${px2vw(4, 1440)} ${px2vw(13, 1440)};
    }
`;
