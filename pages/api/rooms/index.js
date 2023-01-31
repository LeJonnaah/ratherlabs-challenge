import { createRoom, getRooms, deleteRoom, updateRoom } from "@lib/prisma/rooms";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const { rooms, error } = await getRooms()
            if (error) throw new Error(error)
            res.status(200).json({ rooms })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    if (req.method === 'POST') {
        try {
            const data = req.body
            const { room, error } = await createRoom(data)
            if (error) throw new Error(error)
            res.status(200).json({ room })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    if (req.method === 'DELETE') {
        try {
            const { id } = req.body
            const { room, error } = await deleteRoom(id)
            if (error) throw new Error(error)
            res.status(200).json({ room })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    if (req.method === 'PUT') {
        try {
            const { id, data } = req.body
            const { room, error } = await updateRoom(id, data)
            if (error) throw new Error(error)
            res.status(200).json({ room })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export default handler