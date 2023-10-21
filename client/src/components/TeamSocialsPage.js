import { Link } from "react-router-dom";
import "../styles/aboutpage.css";

function TeamSocialsPage() {
    return (
        <div className="contact-container">
            <h1 className="text-center contact-title">Meet the Team</h1>
            <p className="contact-details">
                <Link className="contact-link" to={"https://www.linkedin.com/in/elahn-danee/"}>Elahn Danee</Link>
                <Link className="contact-link" to={"https://www.linkedin.com/in/katcontreras/"}>Kat Contreras</Link>
                <Link className="contact-link" to={"https://www.linkedin.com/in/sophia-tony-egbuniwe"}>Sophia Tony-Egbuniwe</Link>
                <Link className="contact-link" to={"https://www.linkedin.com/in/tateana-pettiway-6b0449142/"}>Tateana Pettiway</Link>
                <Link className="contact-link" to={"https://www.linkedin.com/in/winda-hao"}>Winda Hao</Link>
                <Link className="contact-link" to={"https://www.linkedin.com/in/tsuki/"}>Zelzin Marquez</Link>
            </p>
        </div>
    )
};

export default TeamSocialsPage;
