import { createStudent, getStudents } from "@lib/prisma/students";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const { students, error } = await getStudents()
            if (error) throw new Error(error)
            res.status(200).json({ students })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    if (req.method === 'POST') {
        try {
            const data = req.body
            const { student, error } = await createStudent(data)
            if (error) throw new Error(error)
            res.status(200).json({ student })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    if (req.method === 'DELETE') {
        try {
            const { id } = req.body
            const { student, error } = await deleteStudent(id)
            if (error) throw new Error(error)
            res.status(200).json({ student })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export default handler