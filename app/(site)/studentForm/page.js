'use client'

import React, { useState } from 'react';
import Swal from 'sweetalert2'

const StudentForm = () => {
    const [student, setStudent] = useState({
        name: '',
        lastName: '',
        password: '',
        age: '',
        room: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (student.name !== '' || student.age !== '' || student.password !== '' || student.room !== '' || student.lastName !== '' || student.gender) {
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
                password: '',
                room: '',
                gender: '',
            });

            Swal.fire({
                icon: 'success',
                title: 'Student created successfully',
                showConfirmButton: false,
                timer: 1500
            })
            
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
                    type='number'
                    className='form-control'
                    id='age'
                    name='age'
                    value={student.age}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='gender' className='form-label'>Gender</label>
                <input
                    type='text'
                    className='form-control'
                    id='gender'
                    name='gender'
                    value={student.gender}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input
                    type='password'
                    className='form-control'
                    id='password'
                    name='password'
                    value={student.password}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='room' className='form-label'>Room</label>
                <input
                    type='text'
                    className='form-control mb-3'
                    id='room'
                    name='room'
                    value={student.room}
                    onChange={handleChange}
                />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
};

export default StudentForm;