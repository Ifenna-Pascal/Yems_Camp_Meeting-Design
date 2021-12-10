import styled from 'styled-components';
import px2vw from '../../Util/resize';
import { Button } from '../Text_three/style';
export const FormWrapper = styled.div`
    max-width: ${px2vw(380, 414)};
    margin: 2rem auto;
    width: 100%;
    @media (min-width: 768px) {
        max-width: ${px2vw(700, 1440)};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    padding: ${px2vw(10, 414)} ${px2vw(23, 414)};
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    div {
        height: ${px2vw(90, 414)};
        margin-bottom: 2.5rem;
        label {
            display: block;
            margin-bottom: 0.55rem;
            font-size: ${px2vw(23, 414)};
            font-weight: 600;
            letter-spacing: 1px;
        }
        input {
            width: 100%;
            height: ${px2vw(55, 414)};
            padding: 0.3rem 1rem;
            border: none;
            color: gray;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            outline: none;
            font-size: ${px2vw(19, 414)};
            border-radius: 0.4rem 0 0.4rem 0;
        }
        textarea {
            width: 100%;
            height: ${px2vw(55, 414)};
            padding: 0.4rem 1rem;
            border: none;
            color: gray;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            outline: none;
            font-size: ${px2vw(19, 414)};
            border-radius: 0.4rem 0 0.4rem 0;
        }
        select {
            width: 100%;
            height: ${px2vw(40, 414)};
            padding: 0 0.5rem;
            border: none;
            color: gray;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            outline: none;
            font-size: ${px2vw(19, 414)};
            border-radius: 0.4rem 0 0.4rem 0;
            option {
                border: none;
            }
        }
    }
    @media (min-width: 768px) {
        padding: ${px2vw(20, 1440)} ${px2vw(23, 1440)};
        div {
            height: ${px2vw(55, 1440)};
            label {
                font-size: ${px2vw(20, 1440)};
            }
            input {
                font-size: ${px2vw(15, 1440)};
                height: ${px2vw(30, 1440)};
            }
            textarea {
                font-size: ${px2vw(15, 1440)};
                height: ${px2vw(40, 1440)};
            }
            select {
                font-size: ${px2vw(15, 1440)};
                height: ${px2vw(30, 1440)};
            }
        }
    }
`;

export const But = styled.button`
    border-radius: 0.4rem;
    padding: 1rem 2rem;
    border: none;
    background: #0082fc;
    font-size: 1rem;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
`;
