import Rooms from "./rooms";

const RoomLayout = async ( { children } ) => {
    return (
        <section>
            {children}
            <Rooms />
        </section>

    );
}

export default RoomLayout;