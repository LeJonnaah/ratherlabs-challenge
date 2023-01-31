import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/rooms" className="nav-link">
                                Rooms
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/roomForm" className="nav-link">
                                Room Form
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/studentForm" className="nav-link">
                                Students
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/students" className="nav-link">
                                StudentList
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar