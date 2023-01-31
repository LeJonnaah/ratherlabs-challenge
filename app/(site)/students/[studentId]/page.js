import { getStudent } from '@lib/prisma/students';
import Student from './student';

const Page = async ({ params }) => {
    const { student } = await getStudent(params.studentId);

    return  <Student student={student} />;
}

export default Page;