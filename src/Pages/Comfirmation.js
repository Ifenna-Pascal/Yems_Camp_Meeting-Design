import React from 'react';
import { Button } from '../Components/Nav/style';
import Twos from '../Components/Two_By_To/Twos';
import { Wrapper } from '../SubPages/style';

function Comfirmation() {
    return (
        <Twos>
            <Wrapper>
                <h2>Get Your Ticket Now !</h2>
                <div>
                    <span>
                        <b>STEP 1</b>: Pay to the account details
                    </span>
                    <div>
                        <span>Amount</span>
                        <b>1000 Naira</b>
                    </div>
                    <div>
                        <span>Account Name</span>
                        <b>Ojobo Emelda Chineye</b>
                    </div>
                    <div>
                        <span>Bank Name</span>
                        <b>U.B.A</b>
                    </div>
                    <div>
                        <span>Account Number</span>
                        <b>2212252532</b>
                    </div>
                </div>
                <div>
                    <span>
                        <b>STEP 2 </b>: Send a screenshot indicating your proof of payment alongisde your Fullname to this number on Whatsapp
                        <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=+2349036909104">
                            Send Proof Now
                        </a>
                    </span>
                </div>
                <div>
                    <span>
                        <b>STEP 3 </b>: Kindly come around with the following:
                        <ul>
                            <li>Plates (flat & soup)</li>
                            <li>Spoon</li>
                            <li>Fork</li>
                        </ul>
                    </span>
                </div>
                <Button to="/register">Next</Button>
            </Wrapper>
        </Twos>
    );
}

export default Comfirmation;
