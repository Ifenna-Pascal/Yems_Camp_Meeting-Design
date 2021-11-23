import React, { useEffect, useState } from 'react';
import { getDocs } from '@firebase/firestore';
import { colRef, getDocuments } from '../firebase_config';
import { Button } from '../Components/Nav/style';
import { Table } from '../SubPages/style';
import { Redirect } from 'react-router';
function Error() {
    return <h1 style={{ textAlign: 'center', marginTop: '10%' }}> You are not authorized to view this page </h1>;
}
function Admin() {
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([]);
    const [pass, setPass] = useState(false);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(async () => {
        const store = [];
        getDocs(colRef)
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    store.push({ ...doc.data(), id: doc.id });
                });
            })
            .catch((err) => {
                return err;
            });
        setBooks(store);
    }, []);
    const handleSubmit = () => {
        if (input === 'admin') {
            setPass(true);
            setError(false);
        } else {
            setPass(false);
            setError(true);
        }
        setInput('');
    };
    const handlePrint = () => {
        window.print();
        <Redirect to="/" />;
    };
    return (
        <div>
            <div
                style={{
                    display: pass ? 'none' : 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginTop: '10rem',
                    alignItems: 'center',
                }}
            >
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    style={{
                        outline: 'none',
                        marginBottom: '1rem',
                        borderRadius: '0.2rem 0.5rem',
                        padding: '0.2rem',
                    }}
                />
                <button
                    type="submit"
                    style={{ padding: '0.2rem 0.7rem', border: 'none', color: '#fff', background: ' #0082fc' }}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
            {/* {loading && <h1>Loading....</h1>} */}
            {pass && (
                <>
                    {console.log(books)}
                    <Table>
                        <thead>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th> School </th>
                            <th>Branch</th>
                            <th>First Timer</th>
                        </thead>
                        <tbody>
                            {books.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.firstname}</td>
                                    <td>{book.lastname}</td>
                                    <td>{book.gender}</td>
                                    <td>{book.school}</td>
                                    <td>{book.branch}</td>
                                    <td>{book.first_time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Button
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '40%',
                            margin: '0 auto',
                        }}
                        onClick={handlePrint}
                    >
                        {' '}
                        Print List
                    </Button>
                </>
            )}
            {error && <Error />}
        </div>
    );
}

export default Admin;
