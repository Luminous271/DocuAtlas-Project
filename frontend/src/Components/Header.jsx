import { Link } from "react-router-dom";

function Header({title = "Website-Title"}) {
    return (
        <>
            <header className="homeheader">
                <h1>{title}</h1>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <hr />
        </>
    );
}

export default Header;