'use client'

import Link from "next/link";

const sideBar = () => {
    return (
        <div className="col-2 p-0 sidebar">
            <div className="list-group">
                <Link href="/login" className="list-group-item list-group-item-action">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default sideBar;