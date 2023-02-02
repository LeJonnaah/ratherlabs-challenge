'use client'

import React, { useState } from 'react';
import Swal from 'sweetalert2'

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
        } else if (name === 'username') {
            setUsername(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'admin' || password === 'admin') {
            setIsCorrect(true);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid password or username!',
            });
        }
    }

    if (isCorrect) {
        return (
            <div>
                <h1>Logged in!</h1>
            </div>
        );
    } else {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className='form-group'>
                        <label htmlFor='username' className='form-label'>Username</label>
                        <input
                            type='text'
                            className='form-control'
                            id='username'
                            name='username'
                            value={username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input
                            type='password'
                            className='form-control mb-3'
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
};

export default LoginPage;