import React, { Fragment } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import About from '../components/About';
import Gallery from '../pages/Gallery';
import Skills from '../pages/Skills';

export default function Home() {
    return (
        <Fragment>
            <Navigation />
            <Banner/>
            <About/>
            <Skills/>
            <Gallery/>
            <Footer/>
        </Fragment>
    )
};
