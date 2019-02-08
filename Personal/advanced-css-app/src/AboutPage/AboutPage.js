import React from 'react'

function AboutPage() {
    return (
        <main>
            <section className="about">
                <div className="u-center-text u-margin-bottom-big">
                    {/* above classname/div here for styling purposes; a 'utility class' */}
                    <h2 className="heading-secondary">
                        A few of my favorite projects
                </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiery u-margin-bottom-small ">Youre going to fall in love with nature</h3>
                        <p className="paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quos molestiae repellendus similique amet atque doloremque quis id suscipit, nisi, ipsum, cupiditate at delectus numquam exercitationem cum. Voluptate, esse animi!
                    </p>
                        <h3 className="heading-tertiery u-margin-bottom-small">Live adventurous like you never have before </h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt enim, voluptatem expedita voluptates quia ipsum impedit unde odio neque.
                    </p>

                        <a href="#" className="btn-text">Learn more > </a>
                    </div>


                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src= {require ("../assets/img/nat-1-large.jpg")} alt="Photo 1" className="photo photo-1"/>

                            <img src= {require ("../assets/img/nat-2-large.jpg")} alt="Photo 2" className="photo photo-2"/>

                            <img src= {require ("../assets/img/nat-3-large.jpg")} alt="Photo 3" className="photo photo-3"/>
                           
                        </div>
                </div>

                </div>
            </section>

        </main>
    )
}

export default AboutPage 
