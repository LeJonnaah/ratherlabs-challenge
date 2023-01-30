'use client'

import React, { useState } from 'react';

const RoomForm = () => {
    const [room, setRoom] = useState({ name: '', description: '' });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoom({ ...room, [name]: value });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (room.name !== '' || room.description !== '') {
            fetch('/api/rooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(room),
            })
            .then((res) => res.json())
            .then((data) => console.log(data));

            setRoom({ name: '', description: '' });
        } else {
            alert('Please fill out all fields');
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            value={room.name}
            onChange={handleChange}
            />
            <input
            type="text"
            name="description"
            value={room.description}
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
    };

    export default RoomForm;