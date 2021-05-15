import React from 'react'
import Rock from "../images/rock_and_roam.png"
import Weather from "../images/weather_app.png"
import Pop from "../images/pop_quiz.png"
import Culture from "../images/culture.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp} from "@fortawesome/free-solid-svg-icons"


const Portfolio = () => {

    const projectArr = [
        {
            title: "Rock and Roam",
            picture: Rock,
            website: "https://glynismullankwok.github.io/musiclocations/",
            github: "https://github.com/glynismullankwok/musiclocations",
            description: "Rock and Roam is an interactive website where users can enter the name of a city/state/country and get results of songs about the place."
        },
        {
            title: "Weather Dashboard",
            picture: Weather,
            website: "https://droman09.github.io/weather_dashboard/",
            github: "https://github.com/Droman09/weather_dashboard",
            description: "A weather dashboard that will run in the browser and let travelers see the weather outlook for multiple cities to plan a trip accordingly."
        },
        {
            title: "Pop Quiz!",
            picture: Pop,
            website: "https://droman09.github.io/pop_quiz-/",
            github: "https://github.com/Droman09/pop_quiz-",
            description: "Timed coding quiz with multiple-choice questions using HTML, CSS and Javascript."
        },
        {
            title: "Culture",
            picture: Culture,
            website: "https://gentle-cliffs-54160.herokuapp.com",
            github: "https://github.com/matthayden09/project_2",
            description: "This project is a blog and CMS system about different cultural topics that allows authors to delete their own posts, and allows for non-author users to like posts and add comments that are then appended to a comment box."
        }

    ]
    return (
        <>
            <div id="portfolio" className="portfolio-wrapper">
                <div className="container">
                    <h1 className="text-uppercase text-center py-5">portfolio</h1>
                    <div className="image-box-wrapper row justify-content-center">
                        {projectArr.map(index => {
                            return (
                                <div>
                                    <div className="info-box"><p>{index.title}</p></div>
                                    <div className="portfolio-image-box">
                                        <img className="portfolio-image" src={index.picture} alt={index.title}></img>
                                        <div className="overflow" onClick={() => window.open(index.website)}></div>
                                        <FontAwesomeIcon className="portfolio-icon" icon={faAngleUp} />
                                    </div>
                                    <div className="info-box"><p>{index.description}</p></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Portfolio