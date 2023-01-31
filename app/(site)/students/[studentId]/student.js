const Student = ({ student }) => {
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