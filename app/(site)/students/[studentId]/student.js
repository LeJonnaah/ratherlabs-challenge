'use client'

import { getStudents } from "@lib/prisma/students";

const Student = async ({ student }) => {

    const { students } = await getStudents();

    return (
        <div>
            <h3>Student Name: {student.name}</h3>
            <p>Last name: {student.lastName}</p>
            <p>Age: {student.age}</p>
            <p>Gender: {student.gender}</p>
        </div>
    );
    }

export default Student;