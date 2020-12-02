import React from "react";

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
                                            <img src="./assets/images/localHops.png" />
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
                                            <img src="./assets/images/superheroSearchEngine.png" />
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
                                        <img src="./assets/images/eatDaBurger.png" />
                                    </div>
                                    <div className="card-action" style={{ background: "teal", textAlign: "center" }}>
                                        <a href="https://secret-coast-00616.herokuapp.com/">Eat-Da-Burger</a>
                                        <br /><br />
                                        <a href="https://github.com/rubenfiv/burger">GitHub Repository</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-image">
                                    <img src="./assets/images/noteTaker.png" />
                                </div>
                                <div className="card-action" style={{ background: "teal", textAlign: "center" }}>
                                    <a href="https://ancient-refuge-39771.herokuapp.com/notes">Note Taker</a>
                                    <br /><br />
                                    <a href="https://github.com/rubenfiv/Express_Note-Taker">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-image">
                                    <img src="./assets/images/weatherDashboard.png" />
                                </div>
                                <div className="card-action" style={{ background: "teal", textAlign: "center" }}>
                                    <a href="https://rubenfiv.github.io/HW-06/">Weather Dashboard</a>
                                    <br /><br />
                                    <a href="https://github.com/rubenfiv/Server-Side-APIs_Weather-Dashboard">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src="./assets/images/passwordGenerator.png" />
                            </div>
                            <div className="card-action" style={{ background: "teal", textAlign: "center" }}>
                                <a href="https://rubenfiv.github.io/03-JavaScript-Password-Generator/">Password Generator</a>
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

                                <a href="https://www.linkedin.com/in/rubenfiv">LinkedIn Profile</a>
                                <p>EMAIL: rubenfiv@gmail.com</p>
                                <p>PHONE: +1 (956) 373-3333</p>
                                <p>
                                    <a href="./assets/newResume.pdf">VIEW RESUME</a>
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
