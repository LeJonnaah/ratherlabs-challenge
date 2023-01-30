import { getRooms } from "@lib/prisma/rooms";
import Link from "next/link";
import DeleteButton from "app/components/DeleteButton";

const Rooms = async () => {
    const { rooms } = await getRooms();

    return (
        <div>
            <h2>Rooms</h2>
            <ul>
                {rooms.map((room) => (
                    <li key={room.id}>
                        <Link href={`/rooms/${room.id}`}>
                            {room.name}
                        </Link>
                        <DeleteButton id={room.id} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Rooms;