import React, { Fragment, } from 'react'
import Fade from 'react-reveal/Fade';
import About from '../About'
import Contact from '../Contact'
import Portfolio from './Portfolio';
import Blog from './Blog';
require('../../style/home.css')

export default function Home() {
    return (
        <Fragment>
            <section id="about" className="homeSection">
                <About />
            </section>
            <div className='homeCircle '></div>

            <section id="blog" className="homeSection">
                <Fade bottom>
                    <h2 className="homeSectionTitle">Blog</h2>
                </Fade>
                <Fade bottom>
                    <Blog />
                </Fade>

            </section>

            <section id="portfolio" className="homeSection">
                <Fade bottom>
                    <h2 className="homeSectionTitle">Portofolio</h2>
                </Fade>
                <Fade bottom>
                    <Portfolio />
                </Fade>
            </section>

            <section id="contact" className="homeSection">
                <Fade bottom>
                    <h2 className="homeSectionTitle">Ngobrol Yuk</h2>
                </Fade>
                <Fade bottom>
                    <Contact />

                </Fade>
            </section>

            {/* <section className="homeSection">
                    <h2> className="homeSectionTitle">What can I do for you.</h2>
                </section>
                <section className="homeSection">
                    <h2> className="homeSectionTitle">What projects I have done.</h2>
                </section>
                <section className="homeSection">
                    <h2> className="homeSectionTitle">Why you should use my service.</h2>
                </section>
                <section className="homeSection">
                    <h2> className="homeSectionTitle">Feel free to contact me anytime.</h2>
                </section> */}
        </Fragment >
    )
}