import React from 'react'
import aImg from '../../images/about/img-1.jpg'

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <img src="/profile/DSC03601.png" alt="My Profile" style={{ filter: 'none' }}/>
                                <div className="tf-about-img-text">
                                    <div className="tf-about-icon">
                                        <h3>3+</h3>
                                        <span>Years Exprience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>about Me</small>
                                <h2>Welcome to My Creative Paradise — All-in-One Video Powerhouse.</h2>
                                <h5>I have 3+ years of experience in solving creative problems through scripting, shooting, and editing.</h5>
                                <p>I bring ideas to life through visual storytelling — from scripting and shooting to editing and delivery.
                                    enjoy the creative process; it feels like paradise to me.My focus is on crafting content that not 
                                    only looks great but also solves real problems, tells meaningful stories, and connects deeply 
                                    with the audience,blending creativity with strategy every step of the way. </p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3><span>200</span>+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Me</h1>
            </div>
        </section>
    )
}

export default About;