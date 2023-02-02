'use client'

import React, { useState } from 'react';
import Swal from 'sweetalert2'

const StudentForm = () => {
    const [student, setStudent] = useState({
        name: '',
        lastName: '',
        password: '',
        age: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (student.name !== '' || student.age !== '' || student.password !== '') {
            fetch('/api/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(student),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));

            setStudent({
                name: '',
                lastName: '',
                age: '',
                gender: '',
                password: '',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
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
                    value={student.name}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='lastName' className='form-label'>Last Name</label>
                <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    name='lastName'
                    value={student.lastName}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='age' className='form-label'>Age</label>
                <input
                    type='text'
                    className='form-control'
                    id='age'
                    name='age'
                    value={student.age}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='gender'
                className='form-label'>Gender</label>
                <select
                    className='form-control'
                    id='gender'>
                        <option value={student.gender}>Male</option>
                        <option>Girl</option>
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input
                    type='password'
                    className='form-control mb-3'
                    id='password'
                    name='password'
                    value={student.password}
                    onChange={handleChange}
                />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
};

export default StudentForm;