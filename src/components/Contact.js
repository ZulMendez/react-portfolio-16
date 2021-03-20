import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import '../css/Contact.css';
import Footer from '../components/Footer';
import Navigation from './Navigation';


const Contact = () => {
    return(
        <Fragment>
            <div>
                <div className="titreCont">
                    <Navigation/>
                    <h2 className="titre2">CONTACT</h2>
                </div>
                    <Link to='/contact'>
                        <div className="contact">
                            <div className="contactCont">
                                <div>
                                    <p className="text">Your Name</p>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <p className="text">Your Email</p>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <p className="text">Subject</p>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <p className="text">Your Message</p>
                                    <input className="boite" type="text"/>
                                </div>
                                <button className="boutton btn-outline-secondary mt-5 mb-3">Send Message</button>
                            </div>
                            {/* <div className="infos">
                                <p className="">Address</p>
                                <span>Rue de Ransbeek, 1120 Bruxelles</span>
                                <p className="mt-5">Phone</p>
                                <span className="">0032486230881</span>
                                <p className=" mt-5">Email Address</p>
                                <span className="">zumendez7@gmail.com</span>
                            </div> */}
                            <div className="address">
                                <iframe className="map" allowfullscreen="" frameborder="0" tabindex="0" ariahidden="false" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.591767706479!2d103.8707358873495!3d1.297144968320927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a936c551cd%3A0x7fb4e58ad9cd826e!2sBruxelles%20Flyer!5e0!3m2!1sfr!2sbe!4v1608482643554!5m2!1sfr!2sbe" style={{width:"1200px", height:"590px"}}/>
                            </div>
                        </div>
                    </Link>
                    <div className="footerCont">
                        <Footer/>
                    </div>
                </div>
        </Fragment>
    )
}
export default Contact;