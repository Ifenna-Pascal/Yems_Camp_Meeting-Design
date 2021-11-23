import React, { useEffect, useState } from 'react';
import { getDocs } from '@firebase/firestore';
import { colRef, getDocuments } from '../firebase_config';
import { Table } from 'react-bootstrap';
import { Button } from '../Components/Nav/style';
// const ShowMemebers = () => <div>{getDoc(colRef)}</div>;

function Admin() {
    const [books, setBooks] = useState([]);
    const [pass, setPass] = useState(false);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(async () => {
        const store = [];
        getDocs(colRef)
            .then((snapshot) => {
                console.log(snapshot.docs[0].data());
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
        } else {
            setPass(false);
        }
        setInput('');
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
                    <Table striped bordered hover>
                        <thead>
                            <td>FirstName</td>
                            <td>LastName</td>
                            <td>Gender</td>
                            <td> School </td>
                            <td>Branch</td>
                            <td>First Timer</td>
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
                    <Button onClick={() => window.print()}> Print List</Button>
                </>
            )}
        </div>
    );
}

export default Admin;
