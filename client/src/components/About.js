import "../styles/aboutpage.css";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <div className="header-main">
                <h1 className="text-center">About/Mission</h1>
                <p className="aboutmedetails">
                    ...
                </p>
                <div className="contact-container">
                <h1 className="text-center contact-title">Contact</h1>
                <p className="contact-details">
                    <Link className="contact-link" to={"https://www.linkedin.com/in/elahn-danee/"}>Elahn Danee</Link>
                    <Link className="contact-link" to={"https://www.linkedin.com/in/katcontreras/"}>Kat Contreras</Link>
                    <Link className="contact-link" to={"https://www.linkedin.com/in/sophia-tony-egbuniwe"}>Sophia Tony-Egbuniwe</Link>
                    <Link className="contact-link" to={"https://www.linkedin.com/in/tateana-pettiway-6b0449142/"}>Tateana Pettiway</Link>
                    <Link className="contact-link" to={"https://www.linkedin.com/in/winda-hao"}>Winda Hao</Link>
                    <Link className="contact-link" to={"https://www.linkedin.com/in/tsuki/"}>Zelzin Marquez</Link>
                </p>
                </div>
            </div>
        </>
    )
}

export default About;
