import { Link } from "react-router-dom"
import puns from "./puns"
import "./homePage.css"

export default function HomePage() {

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledPuns = shuffleArray(puns)

    return (
        <section id="home-page-container">
            <div id="pun-container">
                <p>"{shuffledPuns[0]}"</p>
            </div>
            <div id="link-box-container">
                <Link className="homePageLink practiceLink" to={"/practice"}>Practice</Link>
                <Link className="homePageLink flashcardLink" to={"/"}>Flashcards</Link>
                <Link className="homePageLink searchLink" to={"/"}>Search</Link>
                <Link className="homePageLink customPracticeLink" to={"/"}>Custom Practice</Link>
            </div>
        </section>
    )
}