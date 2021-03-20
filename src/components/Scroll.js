import React, {Fragment, useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import '../css/Boxes.css';
import emporium from '../img/emporiumnoir.jpg';
import epilogue from '../img/epilogue.jpg';
import victory from '../img/victory2.jpg';
import asian from '../img/victory1.jpg';
import photosen from '../img/photosen.jpg';
import {Link} from 'react-router-dom';

const Scroll = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <Fragment>
            <h2 className="text-center mt-5">MY WORKS</h2>
            <Link to='/'>
                <div className="grids">
                    <img data-aos='fade-right' src={emporium} className="box"/>
                    <img data-aos='fade-right' src={epilogue} className="box"/>
                    <img data-aos='fade-right' src={victory} className="box"/>
                    <img data-aos='fade-right' src={emporium} className="box"/>
                    <img data-aos='fade-right' src={epilogue} className="box"/>
                    <img data-aos='fade-right' src={emporium} className="box"/>
                </div>
            </Link>
        </Fragment>
    )
}

export default Scroll;