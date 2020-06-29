import React, { useState } from 'react';
import User from './User';

const UserList = () => {
    const initUser = { id: '', firstName: '', lastName: '' };
    const [editable, setEditable] = useState(null);
    const [users, setUsers] = useState([
        {
            id: 1,
            firstName: "Durgesh",
            lastName: "Pal"
        },
        {
            id: 2,
            firstName: "Ankur",
            lastName: "Pal"
        },
        {
            id: 3,
            firstName: "Suresh",
            lastName: "Pal"
        }
    ]);

    const [currentUser, setCurrentUser] = useState(initUser);

    const addUser = user => {
        if (user.id) {
            setUsers(users.map((u) => (u.id === user.id ? user : u)));
        } else {
            user.id = users.length + 1;
            setUsers([...users, user]);
        }
    }

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    const isAddEditUser = (val, user) => {
        setCurrentUser(user);
        setEditable(val);
    }

    const cancel = () => setEditable(null);

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>
                                <button className="btn btn-primary mr-2 btn-sm" onClick={() => isAddEditUser(true, user)}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-success" onClick={() => isAddEditUser(false)} >Add New User</button>
            <User addUser={addUser} editable={editable} cancel={cancel} currentUser={currentUser} />
        </div>
    )
}

export default UserList;