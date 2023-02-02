'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (result.error) {
            console.log(result.error);
        } else {
            window.location.href = '/dashboard';
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Login</legend>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </fieldset>
        </form>
    );
};

export default LoginForm;
