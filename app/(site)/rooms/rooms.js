import { getRooms } from "@lib/prisma/rooms";
import Link from "next/link";
import DeleteButton from "app/components/ui/DeleteButton";

const Rooms = async () => {
    const { rooms } = await getRooms();

    return (
        <div>
            <h1>Rooms</h1>
            <ul className="list-group">
                {rooms.map((room) => (
                    <li key={room.id}
                    className="list-group-item"
                    >
                        <Link href={`/rooms/${room.id}`}
                        className="btn btn-link"
                        >
                            {room.name}
                        </Link>
                        {/* <DeleteButton id={room.id} /> */}
                    </li>
                ))}
            </ul>
            <Link href="/roomForm"
            className="btn btn-lg btn-primary"
            >
                Create a new room
            </Link>
        </div>
    );
};

export default Rooms;