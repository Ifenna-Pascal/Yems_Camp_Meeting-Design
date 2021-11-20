import React, { useEffect, useState } from 'react';
import { getDocs } from '@firebase/firestore';
import { colRef, getDocuments } from '../firebase_config';
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
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            {/* {loading && <h1>Loading....</h1>} */}
            {pass && (
                <table>
                    <thead>
                        <th>FirstName</th>
                        <th>LastName</th>
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
                </table>
            )}
        </div>
    );
}

export default Admin;
