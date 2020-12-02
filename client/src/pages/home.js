import React from "react";

function Home() {
    return (
        <>
                <div className="container">
                    <div className="card">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="Title">
                                    <h2>About Me</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <img src="../assets/images/bioPic.png" style={{ width: "300px", height: "300px", paddingTop: "20px" }} id="BioPic" alt="Bio Pic" />
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="Bio" style={{ paddingTop: "20px" }}>
                                        <p>I am a throughoubred Texan, born in McAllen and raised in San Antonio. I currently reside in the heart
                                        of Texas, Austin. I have over a decade of management experience. I am currently a senior advisor assisting
      mobile app developers for a major tech company.</p>

                                        <p>With proficiencies in full stack development, I can help make your vision a reality or improve a product
        that you have already deployed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home;