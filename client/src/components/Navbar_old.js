import { NavLink } from "react-router-dom";
import { usePassageUserInfo } from "../hooks";
import "../styles/navbar.css";
import LogoutButton from "./LogoutButton";

function Navbar() {
  const { userInfo } = usePassageUserInfo();

  return (
    <header className='navbar'>
      <nav>
        <div>
          <ul>
            <li>
              <NavLink to='/home'>EcoModa</NavLink>
            </li>
            {userInfo && (
              <li>
                <NavLink to='/dashboard'>Dashboard</NavLink>
              </li>
            )}
            <li>
              <NavLink to='/mission'>About</NavLink>
            </li>
            <li>
              <NavLink to='/guidelines'>Community Guidelines</NavLink>
            </li>
            <li>
              <NavLink to='/educate'>How You Can Help!</NavLink>
            </li>
            <li>
              <NavLink to='/team'>Meet the Team</NavLink>
            </li>
            {userInfo && (
              <li>
                <NavLink to='/clothes'>Search For Clothes</NavLink>
              </li>
            )}
            {userInfo && (
              <li>
                <NavLink to='/create'>Create Clothing Listing</NavLink>
              </li>
            )}
            {!userInfo && (
              <li>
                <NavLink to='/'>Login</NavLink>
              </li>
            )}
            {userInfo && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
