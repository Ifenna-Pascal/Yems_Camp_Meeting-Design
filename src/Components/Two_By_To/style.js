import styled from 'styled-components';
import px2vw from '../../Util/resize';

export const EventContainer = styled.div`
    height: ${(props) => {
        props.hero ? '100vh' : px2vw(300, 414);
    }};
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${px2vw(40, 414)};
    @media (min-width: 768px) {
        margin-bottom: ${px2vw(60, 1440)};
        height: ${(props) => {
            props.hero ? `calc( 100vh - ${px2vw(100, 1440)} )` : px2vw(600, 1440);
        }};
    }
`;
export const EventWrapper = styled.div`
    width: 100%;
`;
export const Event = styled.div`
    max-width: ${px2vw(390, 414)};
    margin: 0 auto;
    width: 100%;
    padding: ${px2vw(15, 414)};
    @media (min-width: 768px) {
        max-width: ${({ maxWidth }) => px2vw(1250, 1440)};
        padding: ${px2vw(0, 1440)} ${px2vw(5, 1440)};
`;
