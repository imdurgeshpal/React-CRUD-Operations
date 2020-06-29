import React, { useState, useEffect } from 'react';

const User = (props) => {

    const initUser = { id: '', firstName: '', lastName: '' };
    const [user, setUser] = useState(initUser);

    useEffect(() => {
        if(props.currentUser) {
            setUser(props.currentUser)
        } else {
            setUser(initUser);
        }
    }, [props])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.firstName && user.lastName) {
            handleChange(e, props.addUser(user));
            setUser(initUser);
        }
    }
    if (props.editable === null) {
        return null;
    }
    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit}>
                <h2>Add New User</h2>
                <p>First Name: <input type="text" name="firstName" value={user.firstName} onChange={handleChange} /></p>
                <p>Last Name: <input type="text" name="lastName" value={user.lastName} onChange={handleChange} /></p>
                <p>
                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    <button type="button" className="btn btn-warning" onClick={props.cancel}>Cancel</button>
                </p >
            </form >
        </div>
    )
}
export default User;