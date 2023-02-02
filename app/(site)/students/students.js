import { getStudents } from "@lib/prisma/students";
import Link from "next/link";

const Students = async () => {
    const { students } = await getStudents();

    return (
        <div>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        <Link href={`/students/${student.id}`}>
                            {student.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Students;