import React, { Fragment } from 'react';
// import Link from 'react-router-dom';
// import '../css/Contact.css';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const ContactPage = () => {
    return(
        <Fragment>
            <div className='videoCont'>
                <video className='video' src="/videos/video8.mp4" autoPlay loop muted />
            </div>
            <Contact/>
        </Fragment>
    )
}

export default ContactPage;