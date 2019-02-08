import React, { Component } from 'react'
import { FaAws } from 'react-icons/fa'


export default class Feature extends Component {
    render() {
        return (


            <section className='section-feature'>


                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box-icon feature-box"> {/* this who chunk is a box */}
                            <i className="icon-basic-world"> <FaAws /> </i>
                            <h3 className="heading-tertiary">Explore the World</h3>
                            <p className="feature-box_text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur illum animi harum.
                            </p>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}
