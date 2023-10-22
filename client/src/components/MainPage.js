import logo from "../logo.png";
import '../styles/mainpage.css';
import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div className="main-page-container">
            <img src={logo} alt='logo' className="logo-image" />
            <h1 className="main-title">Welcome to EcoModa</h1>
            <p className="main-description">
                Discover sustainable fashion, reduce waste, and refresh your style responsibly.
            </p>
            <Link to="/" className="explore-button">Login To Explore Clothing Listings</Link>
            <Link to="/mission" className="learn-more-link">Learn More About Us</Link>
        </div>
    );
}

export default MainPage;
