import React, {Fragment, useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import '../css/Boxes.css';
import emporium from '../img/emporiumnoir.jpg';
import emporiumB from '../img/emporiumblanc.jpg'
import epilogue from '../img/epilogue.jpg';
import victory from '../img/victory2.jpg';
import asian from '../img/victory1.jpg';
import photosen from '../img/photosen.jpg';
import {Link} from 'react-router-dom';
import Navigation from '../components/Navigation';

const Scroll = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <Fragment>
            <h2 className="titreGallery text-center">MY WORKS</h2>
            <Navigation/>
            <Link to='/gallery'>
                <div className="grids">
                    <div className="d-flex flex-column text-center">
                        <img data-aos='fade-right' src={emporium} className="box"/>
                        <a className="link text-decoration-none" href="https://github.com/ZulMendez">view project</a>
                    </div>
                    <div className="d-flex flex-column text-center">
                        <img data-aos='fade-right' src={emporiumB} className="box"/>
                        <a className="link" href="https://github.com/ZulMendez">view project</a>
                    </div>
                </div>
                <div className="grids">
                    <div className="d-flex flex-column text-center">
                        <img data-aos='fade-left' src={victory} className="box"/>
                        <a className="link" href="https://github.com/ZulMendez">view project</a>
                    </div>
                    <div className="d-flex flex-column text-center">
                        <img data-aos='fade-left' src={asian} className="box"/>
                        <a className="link" href="https://github.com/ZulMendez">view project</a>
                    </div>
                </div>
                <div className="grids">
                    <div className="d-flex flex-column text-center">
                        <img data-aos='fade-right' src={epilogue} className="box"/>
                        <a className="link" href="https://github.com/ZulMendez">view project</a>
                    </div>
                    <div className="d-flex flex-column text-center">
                        <img data-aos='fade-right' src={photosen} className="box"/>
                        <a className="link" href="https://github.com/ZulMendez">view project</a>
                    </div>
                </div>
            </Link>
        </Fragment>
    )
}

export default Scroll;