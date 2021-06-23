import React, { Fragment } from 'react';
import Scroll from '../components/Scroll';
import {Link} from 'react-router-dom';

export default function Gallery() {
    return (
        <Fragment>
            <Scroll/>
            <Link to="/contact" >
            <div className="lienCont text-center">
                <a className="btnGallery text-center">Let's make something special</a>
            </div>
            </Link>
        </Fragment>
    )
};
