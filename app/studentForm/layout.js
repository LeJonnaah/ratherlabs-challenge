import Students from "./students";

export default function Home( { children } ) {
    return (
        <section>
            <div>
                <h1>Students</h1>
            </div>
            <aside>
                <Students />
            </aside>
            <main>
                {children}
            </main>
        </section>
    );
}