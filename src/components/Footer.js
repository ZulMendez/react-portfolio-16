import React from 'react';
import '../css/Footer.css';

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="boxFooter text-center d-flex flex-column ">
                    <div className="d-flex justify-content-center mt-3">
                        <a className="lien" href="https://www.facebook.com/ztsimi.1"><i className="fab fa-facebook-f fa-3x p-2 ml-2"></i></a>
                        <a className="lien" href="https://www.instagram.com/mendez_ulma/"><i className="fab fa-instagram fa-3x p-2 ml-2"></i></a>
                        <a className="lien" href="https://github.com/ZulMendez"><i className="fab fa-github fa-3x p-2  ml-2"></i></a>
                    </div>
                    <div className="mt-2 text-white">
                        <p className="textFooter font-weight-bold text-secondary mr-3">All Rights Reserved || &copy;opyright 2021 || Made with <i className="far fa-heart"></i> by Zulma Mendez</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
