'use client';

import { deleteRoom } from "@lib/prisma/rooms";

const DeleteButton = ({ id }) => {
    const handleDelete = async () => {
        const { error } = await deleteRoom(id);
        if (error) throw new Error(error);
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteButton;