import { getRooms } from "@lib/prisma/rooms";

const RoomSelect = async () => {
    const { rooms } = await getRooms();

    return (
        <label
            htmlFor="room"
            className="block text-sm font-medium text-gray-700"
        >
            Select a room
            <select
                id="room"
                name="room"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                        {room.name}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default RoomSelect;