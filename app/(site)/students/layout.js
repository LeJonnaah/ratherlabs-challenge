import Students from "./students";

const StudenLayout = ({ children }) => {
    return (
        <section>
            <aside>
                <Students />
            </aside>
            <main>
                {children}
            </main>
        </section>
    );
};

export default StudenLayout;