import RoomSelect from "./rooms";

const StudentFormLayout = ({ children }) => {
    return (
        <div>
            {children}
            <RoomSelect />
        </div>
    )
}

export default StudentFormLayout;