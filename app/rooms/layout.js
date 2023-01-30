import Rooms from "./rooms";

const RoomLayout = async ( { children } ) => {
    return (
        <section>
            <aside>
                <Rooms />
            </aside>
            <main>
                {children}
            </main>
        </section>
    );
}

export default RoomLayout;