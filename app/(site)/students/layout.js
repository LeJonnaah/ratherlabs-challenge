import Students from "./students";

const StudentsLayout = ({ children }) => {
    return (
        <main>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    {children}
                    <Students />
                </div>
            </div>
        </main>
    );
};

export default StudentsLayout;