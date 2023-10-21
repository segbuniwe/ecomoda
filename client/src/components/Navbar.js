import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <header>
            <nav>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/home">
                                EcoModa
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/mission">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/guidelines">
                                Community Guidelines
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/educate">
                                How You Can Help!
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/team">
                                Meet the Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/clothes"
                            >
                                Search For Clothes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/create"
                            >
                                Create Clothing Listing
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
