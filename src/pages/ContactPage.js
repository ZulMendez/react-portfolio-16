import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import '../css/Contact.css';
import Contact from '../components/Contact';
import * as AiIcons from "react-icons/ai";

const ContactPage = () => {
    return(
        <Fragment>
            <div className='videoCont'>
                <video className='videoC' src="/videos/video8.mp4" autoPlay loop muted />
            </div>
            <div className="close">
                <Link to='/' className='menu-bars'>
                    <AiIcons.AiOutlineClose/>
                </Link>
            </div>
            <Contact/>
        </Fragment>
    )
}

export default ContactPage;