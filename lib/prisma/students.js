import prisma from ".";

export const getStudents = async () => {
    try {
        const students = await prisma.student.findMany();
        return { students };
    } catch (error) {
        return { error: error.message };
    }
    }

export const createStudent = async (data) => {
    try {
        const student = await prisma.student.create({
            data,
        });
        return { student };
    } catch (error) {
        return { error: error.message };
    }
    }

export const getStudent = async (id) => {
    try {
        const student = await prisma.student.findUnique({
            where: { id },
        });
        return { student };
    } catch (error) {
        return { error: error.message };
    }
    }

export const deleteStudent = async (id) => {
    try {
        const student = await prisma.student.delete({
            where: { id },
        });
        return { student };
    } catch (error) {
        return { error: error.message };
    }
    }

    