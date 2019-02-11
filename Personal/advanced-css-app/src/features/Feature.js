import React, { Component } from 'react'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { TiSocialGithub } from 'react-icons/ti'
import { FaSass } from 'react-icons/fa'


export default class Feature extends Component {
    render() {
        return (
            <section className='section-feature'>


                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box"> {/* this who chunk is a box */}
                            <i className="feature-box_icon icon-basic-world"> <FaReact /> </i>
                            <h3 className="heading-tertiary u-margin-bottom-small">REACT</h3>
                            <p className="feature-box_text">
                                I really enjoy using React as well as how it has improve my Vanilla JS
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box"> {/* this who chunk is a box */}
                            <i className="feature-box_icon icon-basic-world"> <FaHtml5 /> </i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Explore the World</h3>
                            <p className="feature-box_text">
                            I really enjoy using React as well as how it has improve my Vanilla JS
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box"> {/* this who chunk is a box */}
                            <i className="feature-box_icon icon-basic-world"> <TiSocialGithub /> </i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Explore the World</h3>
                            <p className="feature-box_text">
                            I really enjoy using React as well as how it has improve my Vanilla JS
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box"> {/* this who chunk is a box */}
                            <i className="feature-box_icon icon-basic-world"> <FaSass /> </i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Explore the World</h3>
                            <p className="feature-box_text">
                            I really enjoy using React as well as how it has improve my Vanilla JS
                            </p>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}
