'use client'

import React, { useState } from 'react';
import Swal from 'sweetalert2'

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

            Swal.fire({
                icon: 'success',
                title: 'Room created successfully',
                showConfirmButton: false,
                timer: 1500
            })
            
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input
                    type='text'
                    className='form-control'
                    id='name'
                    name='name'
                    value={room.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='description' className='form-label'>Description</label>
                <input
                    type='text'
                    className='form-control'
                    id='description'
                    name='description'
                    value={room.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input
                    type='password'
                    className='form-control mb-3'
                    id='password'
                    name='password'
                    value={room.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type='submit' className='btn btn-primary'>
                Submit
            </button>
        </form>
    );
};

    export default RoomForm;