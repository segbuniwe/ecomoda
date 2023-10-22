import { usePassageLogout } from "../hooks";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const { logout } = usePassageLogout();

  const navigate = useNavigate();

  const signout = () => {
    logout();
    navigate("/");
  };
  return <button className="create-button" onClick={signout}>Sign Out</button>;
};

export default LogoutButton;
