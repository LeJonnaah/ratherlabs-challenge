'use client'

import React, { useState } from 'react';

const RoomForm = () => {
    const [room, setRoom] = useState({ 
        name: '', 
        description: '',
        password: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoom({ ...room, [name]: value });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (room.name !== '' || room.description !== '' || room.password !== '') {
            fetch('/api/rooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(room),
            })
            .then((res) => res.json())
            .then((data) => console.log(data));

            setRoom({ name: '', description: '', password: '' });
        } else {
            alert('Please fill out all fields');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Create a Room</legend>
                <label htmlFor="name"
                className='col-sm-2 col-form-label'
                >Name</label>
                <div className='col-sm-10'>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={room.name}
                        onChange={handleChange}
                        className='form-control-plaintext'
                    />
                </div>
                <label htmlFor="description"
                className='col-sm-2 col-form-label'
                >Description</label>
                <div className='col-sm-10'>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={room.description}
                        onChange={handleChange}
                        className='form-control-plaintext'
                    />
                </div>
                <label htmlFor="password"
                className='col-sm-2 col-form-label'
                >Password</label>
                <div className='col-sm-10'>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={room.password}
                        onChange={handleChange}
                        className='form-control-plaintext'
                    />
                </div>
                <button type="submit" className='btn btn-primary'>Create Room</button>
            </fieldset>
        </form>
    );
    };

    export default RoomForm;