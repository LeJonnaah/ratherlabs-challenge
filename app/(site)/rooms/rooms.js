import { getRooms } from "@lib/prisma/rooms";
import Link from "next/link";
import DeleteButton from "app/components/ui/DeleteButton";

const Rooms = async () => {
    const { rooms } = await getRooms();

    return (
        <div>
            <h1>Rooms</h1>
            <Link href="/roomForm"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Create a new room
            </Link>
            <ul>
                {rooms.map((room) => (
                    <li key={room.id}>
                        <Link href={`/rooms/${room.id}`}>
                            {room.name}
                        </Link>
                        {/* <DeleteButton id={room.id} /> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Rooms;