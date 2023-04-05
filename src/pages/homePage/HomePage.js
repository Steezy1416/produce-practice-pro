import { Link } from "react-router-dom"
import puns from "./puns"

export default function HomePage() {
    return (
        <section id="home-page-container">
            <div id="pun-container">
                <p>{puns[0]}</p>
            </div>
            <div id="link-box-container">
                <Link className="homePageLink" to={"/practice"}>Practice</Link>
                <Link className="homePageLink" to={"/"}>Coming Soon</Link>
                <Link className="homePageLink" to={"/"}>Coming Soon</Link>
                <Link className="homePageLink" to={"/"}>Coming Soon</Link>
            </div>
        </section>
    )
}