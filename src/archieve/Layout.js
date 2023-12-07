import { Link, Outlet } from "react-router-dom"


export default function Layout() {

    console.log("render")

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />

            <footer>
                <ul>
                    <li>
                        <Link to="/contacts">ارتباط با ما</Link>
                    </li>
                    <li>
                        <Link to="/gallery">گالری تصاویر</Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}