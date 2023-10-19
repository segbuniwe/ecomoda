import { NavLink } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation } from "../app/apiSlice";

function Navbar() {
    const { data: account } = useGetAccountQuery();
    const [logout] = useLogoutMutation();

    return (
        <header>
            <nav>
                <div>
                    <NavLink to="/">
                        EcoModa
                    </NavLink>
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/guidelines">
                                    Community Guidelines
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/education">
                                    How You Can Help!
                                </NavLink>
                            </li>
                            {account && (
                                <li>
                                    <NavLink
                                        to="/clothes"
                                    >
                                        Search For Clothes
                                    </NavLink>
                                </li>
                            )}
                            {account && (
                                <li>
                                    <NavLink
                                        to="/create"
                                    >
                                        Create Clothing Listing
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                        <ul>
                            {!account && (
                                <li>
                                    <NavLink
                                        to="/signup"
                                    >
                                        Sign Up
                                    </NavLink>
                                </li>
                            )}
                            {!account && (
                                <li>
                                    <NavLink
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            )}
                            {account && (
                                <li>
                                    <button onClick={logout}>
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
