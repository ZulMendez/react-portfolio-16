import React, { Fragment } from 'react';
import '../css/Banner.css';
import logo from '../img/logonoirpur.png';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';



const Banner = () => {

    return (
        <Fragment>
            <Link to="/">
                <div className='banner'>
                    <video className='video' src="/videos/video8.mp4" autoPlay loop muted />
                    {/* <div className="player-btns"><About/></div> */}
                </div>
                </Link>
                <Zoom>{/*Using Zoom Effect*/}
                    <img src={logo} className="logo" alt="logo" />
                </Zoom>
            
        </Fragment>
    )
}

export default Banner;