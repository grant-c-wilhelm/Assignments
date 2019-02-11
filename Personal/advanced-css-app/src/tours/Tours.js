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
                        <div className="card__side card__side--front">Front</div>
                        <div className="card__side card__side--back card__side--back-1">Back</div>
                    </div>

                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">Front</div>

                        <div className="card__side card__side--back card__side--back-2">Back</div>

                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">Front</div>
                        <div className="card__side card__side--back card__side--back-3">Back</div>

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