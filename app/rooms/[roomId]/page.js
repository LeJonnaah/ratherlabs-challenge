import { getRoom } from "@lib/prisma/rooms";
import Room from "./room";

const Page = async ({ params }) => {
    const { room } = await getRoom(params.roomId);

    return  <Room room={room} />;
};

export default Page;