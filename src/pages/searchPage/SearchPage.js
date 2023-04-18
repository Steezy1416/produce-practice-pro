import { useState } from "react"
import produce from "../../assets/produce"
import "./searchPage.css"
import Navbar from "../../components/Navbar"

export default function SearchPage() {
    let sortedProduce = []

    produce.forEach(singleProduce => {
        sortedProduce.push(singleProduce)
    })

    sortedProduce = sortedProduce.sort()

    const [hasSearched, setHasSearched] = useState(false)
    const [results, setResults] = useState([])

    const handleSearch = (e) => {
        const searchParam = e.target.value.toLowerCase()
        const resultsArr = []

        if (!searchParam) {
            setResults([])
            return
        }

        sortedProduce.forEach(fruit => {
            let fruitName = fruit.name.toLowerCase()

            if (fruitName.includes(searchParam)) {
                resultsArr.push(fruit)
            }
        })

        setResults(resultsArr)
        setHasSearched(true)
        return
    }

    return (
        <section id="search-page-container">
            <Navbar />
            <input id="search-bar" autoComplete="off" placeholder="Search..." onChange={handleSearch} type="search" />
            <div id="result-container">
                {
                    results.length
                        ? <ul id="result-container">
                            {
                                results.map(result => {
                                    return (
                                        <li className="result-card" key={result.name}>
                                            <p className="resultName">{result.name}</p>
                                            <p className="resultCode">{result.code}</p>
                                            <img className="resultImage" alt="" src={require(`../../assets${result.image}`)} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        : <p id="no-results">
                            {
                                hasSearched
                                    ? "No results..."
                                    : <>
                                        <i className="fa-solid fa-magnifying-glass" />
                                        <br />
                                        Search for produce
                                    </>
                            }
                        </p>
                }
            </div>
        </section>
    )
}