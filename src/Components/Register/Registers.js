import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Heading, NavContainer, NavContent, NavLeft, NavCenter } from '../Nav/style';
import Twos from '../Two_By_To/Twos';
import { Form, FormWrapper, But } from './style';
import { colRef } from '../../firebase_config';
import { addDoc } from '@firebase/firestore';
import Footer from '../../Pages/Footer';
function RegNav() {
    return (
        <NavContainer>
            <NavContent>
                <NavLeft>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Heading>
                            <span>YE</span>Ms
                        </Heading>
                    </Link>
                </NavLeft>
                <NavCenter>
                    <span style={{ color: '#0082fc' }}>Register Here</span>
                </NavCenter>
            </NavContent>
        </NavContainer>
    );
}

function Registers() {
    const history = useHistory();
    const initialDoc = {
        firstname: '',
        lastname: '',
        first_time: '',
        gender: '',
        branch: '',
        school: '',
    };
    const [input, setInput] = useState(initialDoc);
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        addDoc(colRef, input)
            .then((e) => {
                setLoading(false);
                setInput(initialDoc);
                if (e) {
                    history.push('/success');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <RegNav />
            <Twos>
                <FormWrapper>
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <label>First Name:</label>
                            <input name="firstname" value={input.firstname} onChange={handleChange} type="text" />
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input type="text" name="lastname" value={input.lastname} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Name of School:</label>
                            <input type="text" name="school" value={input.school} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Branch Church:</label>
                            <select
                                name="branch"
                                value={input.branch}
                                defaultValue="Select Branch"
                                onChange={handleChange}
                            >
                                <option value="" selected disabled hidden>
                                    Select Your Branch
                                </option>
                                <option value="lagos">Lagos</option>
                                <option value="Nsukka">Nsukka</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Abia">Abia</option>
                                <option value="Ebonyi">Ebonyi</option>
                                <option value="Anambra">Anambra</option>
                            </select>
                        </div>
                        <div>
                            <label>Your First Time?:</label>
                            <select name="first_time" value={input.first_time} onChange={handleChange}>
                                <option value="" selected disabled hidden>
                                    First Time?
                                </option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div>
                            <label>Gender:</label>

                            <select name="gender" value={input.gender} onChange={handleChange}>
                                <option value="" selected disabled hidden>
                                    Select Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <But type="submit">{loading ? 'Resgistering....' : 'REgister Now'}</But>
                        </div>
                    </Form>
                </FormWrapper>
            </Twos>
            <Footer />
        </>
    );
}

export default Registers;
