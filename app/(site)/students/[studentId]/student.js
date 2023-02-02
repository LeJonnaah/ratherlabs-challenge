import { getStudents } from "@lib/prisma/students";

const Student = async ({ student }) => {

    const { students } = await getStudents();


    // i want to know if the student last name is equal to the student last name in the database
    
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