'use client'

import React, { useState } from 'react';
import Swal from 'sweetalert2'

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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid password!',
            });
        }
    };

try {    
    if (isCorrect) {
        return (
            <div>
                <h1>{room.name}</h1>
                <p>{room.description}</p>
            </div>
        );
    } else {    
        return (
            <div>
                <h1>{room.name}</h1>
                <p>{room.description}</p>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        Enter
                    </button>
                </form>
            </div>
        );
    }
} catch (error) {
    return <div>{error.message}</div>;
    }
};

export default Room;