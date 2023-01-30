'use client'

import React, { useState } from 'react';

const StudentForm = () => {
    const [student, setStudent] = useState({
        name: '',
        lastName: '',
        age: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (student.name !== '' || student.email !== '' || student.phone !== '' || student.address !== '' || student.city !== '' || student.state !== '' || student.zip !== '' || student.country !== '') {
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
            });
        } else {
            alert('Please fill out all fields');
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            />
        </label>
        <label>
            Last Name:
            <input
            type="text"
            name="email"
            value={student.email}
            onChange={handleChange}
            />
        </label>
        <label>
            Age
            <input
            type="text"
            name="phone"
            value={student.phone}
            onChange={handleChange}
            />
        </label>
        <button type="submit">Submit</button>
        </form>
    );
    }

    export default StudentForm;