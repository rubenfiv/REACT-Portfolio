import React from "react";
import eatDaBurger from '../images/eatDaBurger.png'
import localHops from '../images/localHops.png'
import noteTaker from '../images/noteTaker.png'
import passwordGenerator from '../images/passwordGenerator.png'
import superheroSearchEngine from '../images/superheroSearchEngine.png'
import weatherDashboard from '../images/weatherDashboard.png'
import resume from '../resume/newResume.pdf'
import '../styling/portfoliostyle.css';

function Portfolio() {
    return (
        <>
            <div id="page-container">

                <div className="container">
                    <div className="card">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="Title">
                                    <h2>My Portfolio</h2>
                                </div>
                            </div>
                        </div>

                        <div className="container" id="projectContainer">

                            <div className="row">
                                <div className="col s12 m7">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={localHops}/>
                                        </div>
                                        <div className="card-action" style={{ color: "black", background: "teal" }}>
                                            <a href="https://local-hops.herokuapp.com/brewery">Local Hops</a>
                                            <br /><br />
                                            <a href="https://github.com/rubenfiv/project-2">GitHub Repository</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m7">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={superheroSearchEngine} />
                                        </div>
                                        <div className="card-action" style={{ color: "black", background: "teal" }}>
                                            <a href="https://rubenfiv.github.io/project-1-Superhero_Search_Engine/">Superhero Search Engine</a>
                                            <br /><br />
                                            <a href="https://github.com/rubenfiv/project-1-Superhero_Search_Engine">GitHub Repository</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col s12 m7">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={eatDaBurger} />
                                    </div>
                                    <div className="card-action" style={{ background: "teal", textAlign: "center" }}>
                                        <a href="https://handlebars-eat-da-burger.herokuapp.com/">Eat-Da-Burger</a>
                                        <br /><br />
                                        <a href="https://github.com/rubenfiv/Node_Express_Handlebars-Eat_Da_Burger">GitHub Repository</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-image">
                                    <img src={noteTaker} />
                                </div>
                                <div className="card-action" style={{ background: "teal", textAlign: "center" }}>
                                    <a href="https://node-express-notetaker.herokuapp.com/">Note Taker</a>
                                    <br /><br />
                                    <a href="https://github.com/rubenfiv/Express-Note_Taker">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-image">
                                    <img src={weatherDashboard} />
                                </div>
                                <div className="card-action" style={{ background: "teal", textAlign: "center" }}>
                                    <a href="https://rubenfiv.github.io/Server_Side_APIs-Weather_Dashboard/">Weather Dashboard</a>
                                    <br /><br />
                                    <a href="https://github.com/rubenfiv/Server_Side_APIs-Weather_Dashboard">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={passwordGenerator} />
                            </div>
                            <div className="card-action" style={{ background: "teal", textAlign: "center" }}>
                                <a href="https://rubenfiv.github.io/JavaScript_Password-Generator/">Password Generator</a>
                                <br /><br />
                                <a href="https://github.com/rubenfiv/JavaScript_Password-Generator">GitHub Repository</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




            <div className="container" id="linksContainer">
                <div className="card card-action">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="Title">
                                <h2>Contact Information</h2>
                                <a href="https://github.com/rubenfiv">GitHub Profile</a>
<br></br>
                                <a href="https://www.linkedin.com/in/rubenfiv">LinkedIn Profile</a>
                                <p>EMAIL: rubenfiv@gmail.com</p>
                                <p>PHONE: +1 (956) 373-3333</p>
                                <p>
                                    <a href={resume}>VIEW RESUME</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Portfolio;
