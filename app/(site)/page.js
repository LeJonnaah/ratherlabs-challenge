// import '.global.css';
import Rooms from './rooms/rooms'

export default function PageLayout() {
    return (
        <section>
            <div>
                <h1>Home page</h1>
                <p
                className="text-2xl text-gray-500"
                >
                    Welcome to the home page
                </p>
                <Rooms />
            </div>
        </section>
    )
}