import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { query, where } from '@firebase/firestore';
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
        phone: '',
        purpose: '',
    };
    const [input, setInput] = useState(initialDoc);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    const find_user_exists = () => {
        const user = query(colRef, where('firstname', '==', input.firstname));
        return user;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const user = find_user_exists();
        if (user) {
            setMessage('You are already registered.');
            setInput(initialDoc);
            setTimeout(() => {
                history.push('/');
            }, 5000);
        } else {
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
        }
    };
    return (
        <>
            <RegNav required />
            <Twos>
                <FormWrapper>
                    {message ? (
                        <p
                            style={{
                                height: '90vh',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '2rem',
                            }}
                        >
                            {' '}
                            {message}{' '}
                        </p>
                    ) : (
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <label>First Name:</label>
                                <input
                                    name="firstname"
                                    value={input.firstname}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                />
                            </div>
                            <div>
                                <label>Last Name:</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    value={input.lastname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Name of School / City:</label>
                                <input
                                    type="text"
                                    name="school"
                                    value={input.school}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input
                                    type="number"
                                    name="phone"
                                    value={input.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Kindly State Your Purpose of Coming</label>
                                <textarea
                                    cols="4"
                                    rows="8"
                                    name="purpose"
                                    value={input.purpose}
                                    onChange={handleChange}
                                />
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
                                <select name="first_time" value={input.first_time} onChange={handleChange} required>
                                    <option value="" selected disabled hidden>
                                        First Time?
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div>
                                <label>Gender:</label>

                                <select name="gender" value={input.gender} onChange={handleChange} required>
                                    <option value="" selected disabled hidden>
                                        Select Gender
                                    </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div>
                                <But type="submit">{loading ? 'Registering....' : 'Register Now'}</But>
                            </div>
                        </Form>
                    )}
                </FormWrapper>
            </Twos>
            <Footer />
        </>
    );
}

export default Registers;
