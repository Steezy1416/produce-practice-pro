import "./landingStyle.css"
import {Link} from "react-router-dom"

export default function LandingPage() {
    return (
        <section id="landing-page-container">
            <div id="welcome-card">
                <h1>Welcome To <br/>Produce Practice <span>Pro</span></h1>
                <Link to={"/practice"} id="get-started-btn">Get Started</Link>
            </div>
        </section>
    )
}