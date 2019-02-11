import React from 'react'

function Tours() {
    return (
        <section className="section-tours">
            <div className="u-center-text u-margin-bottom-big" >
                <h2 className="heading-secondary">
                    Some of my Projects
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1"></div>
                            <h4 className="card__heading">
                                <span className="card__heading--span card__heading--span--1" >The Sea Explorer</span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>React</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>Node</li>
                                    <li>SASS</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card__side card__side--back card__side--back--1">
                            <div className="card-cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Only</p>
                                    <p className="card__price-value">$297</p>
                                </div>
                                <a href="#" className="btn btn-white">Book now!</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1"></div>
                            <div className="card__heading"></div>
                            <div className="card__details"></div>
                        </div>

                        <div className="card__side card__side--back card__side--back--2">Back</div>

                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1"></div>
                            <div className="card__heading"></div>
                            <div className="card__details"></div>
                        </div>
                        <div className="card__side card__side--back card__side--back--3">Back</div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Tours
// .card
//     perspective: 150rem
//     -moz-perspective: 150rem

//     &__side
//         background-color: orangered
//         height: 50rem
//         transition: all .8s

//         &--front
//             background-color: orangered


//         &--back
//             background-color: green
//             transform: rotateY(180deg)



//     &:hover &.__side
//         transform: rotateY(180deg) 

//     // &:hover &--front
//     //     transform: rotateY(0) 