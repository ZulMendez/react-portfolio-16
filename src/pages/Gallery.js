import React, { Fragment } from 'react';
import Scroll from '../components/Scroll';
import Navigation from '../components/Navigation';
import {Link} from 'react-router-dom';

export default function Gallery() {
    return (
        <Fragment>
            <Navigation/>
            <Scroll/>
            <Link to="/contact" >
            <div className="lienCont text-center">
                <a className="btnGallery text-center">Let's make something special</a>
            </div>
            </Link>
        </Fragment>
    )
};
