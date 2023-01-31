import prisma from '.'

export const getRooms = async () => {
    try {
        const rooms = await prisma.room.findMany()
        return { rooms }
    } catch (error) {
        return { error: error.message }
    }
}

export const createRoom = async (data) => {
    try {
        const room = await prisma.room.create({
            data
        })
        return { room }
    } catch (error) {
        return { error: error.message }
    }
}

export const getRoom = async (id) => {
    try {
        const room = await prisma.room.findUnique({
            where: { id }
        })
        return { room }
    } catch (error) {
        return { error: error.message }
    }
}

export const deleteRoom = async (id) => {
    try {
        const room = await prisma.room.delete({
            where: { id }
        })
        return { room }
    } catch (error) {
        return { error: error.message }
    }
}

export const updateRoom = async (id, data) => {
    try {
        const room = await prisma.room.update({
            where: { id },
            data
        })
        return { room }
    } catch (error) {
        return { error: error.message }
    }
}