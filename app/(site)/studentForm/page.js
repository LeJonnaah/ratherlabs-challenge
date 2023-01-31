'use client'

import React, { useState } from 'react';

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
            alert('Please fill out all fields');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Name
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={student.name}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </label>
                <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                >
                    Last Name
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={student.lastName}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </label>
                <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                >
                    Age
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={student.age}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </label>
                <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                >
                    Gender
                    <select
                        name='gender'
                        id='gender'
                    >
                        <option
                            value={student.gender}
                        >
                            Man
                        </option>
                        <option
                            value={student.gender}
                        >
                            Girl
                        </option>
                    </select>
                </label>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                    Password
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={student.password}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </label>
                <button
                    type="submit"
                    className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default StudentForm;