import React, { Fragment } from 'react';
import LightSpeedPage from '../components/LighSpeedPage';
import {Link} from 'react-router-dom';

export default function Skills() {
    return (
        <Fragment>
            <Link to='/skills'>
                <LightSpeedPage/>
            </Link>
        </Fragment>
    )
};
