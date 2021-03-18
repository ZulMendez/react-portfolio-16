import React, { Fragment } from 'react';
// import LightSpeedPage from './LighSpeedPage';
import '../css/Banner.css';

const Banner = () => {

    return (
        <Fragment>
            <div className='banner'>
                {/* <LightSpeedPage/> */}
                <video className='video' src="/videos/video5.mp4" autoPlay loop muted />
                <div className="player-btns">
                </div>
            </div>
        </Fragment>
    )
}

export default Banner;