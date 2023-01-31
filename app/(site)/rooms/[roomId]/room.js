'use client'


import React, { useState } from 'react';

const Room = ({ room }) => {
    const [password, setPassword] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === room.password) {
            setIsCorrect(true);
        } else {
            alert('Incorrect password');
        }
    };

    if (isCorrect) {
        return (
            <div>
                <h1>{room.name}</h1>
                <p>{room.description}</p>
            </div>
        );
    } else {
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleChange}
                />
                <button type="submit">Enter Room</button>
            </form>
        );
    }
}

export default Room;