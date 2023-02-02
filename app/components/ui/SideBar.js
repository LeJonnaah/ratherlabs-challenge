import Link from "next/link";
import '../../../styles/sideBar.css'

const SideBar = () => {
    return (
        <div 
        className="col-2 p-0 sidebar">
            <div className="list-group">
                <Link href="/login" className="list-group-item list-group-item-action">
                    Login
                </Link>
                <Link
                    href="/register"
                    className="list-group-item list-group-item-action"
                >
                    Register
                </Link>
                <Link
                    href="/students"
                    className="list-group-item list-group-item-action"
                >
                    Dashboard
                </Link>
                <Link
                    href="/roomForm"
                    className="list-group-item list-group-item-action"
                >
                    Add Room
                </Link>
                <Link
                    href="/studentForm"
                    className="list-group-item list-group-item-action"
                >
                    Add Student
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
