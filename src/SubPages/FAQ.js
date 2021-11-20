import React, { useState } from 'react';
import Twos from '../Components/Two_By_To/Twos';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { Faq, Heading, HR, Question, QuestionHeading, QuestionReply } from './style';
import { Questions } from './questions';

const QuesAns = ({ item }) => {
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show);
    };
    return (
        <Question id="faq">
            <QuestionHeading show={show}>
                {' '}
                <span>{item.question}?</span>{' '}
                {show ? (
                    <div>
                        <AiFillCaretUp color="#0082fc" onClick={toggle} />
                    </div>
                ) : (
                    <div>
                        <AiFillCaretDown onClick={toggle} />{' '}
                    </div>
                )}
            </QuestionHeading>

            <QuestionReply index={item.id} show={show}>
                {item.answer}
            </QuestionReply>
        </Question>
    );
};
function FAQ() {
    return (
        <Twos>
            <Faq>
                <Heading>Frequently Asked Questions</Heading>
                <HR />
                <br />
                {Questions.map((item, i) => (
                    <QuesAns key={i} item={item} />
                ))}
            </Faq>
        </Twos>
    );
}

export default FAQ;
