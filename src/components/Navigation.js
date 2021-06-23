import React, { Fragment, useState } from 'react';
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SideBar } from './SideBar';
import '../css/Navigation.css';
import { IconContext } from 'react-icons';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

function Navigation() {
const [sidebar, setSidebar] = useState(false)
const showSidebar = () => setSidebar(!sidebar)

//menu responsive 
// let [click, setClick] = useState(false)

// let handleClick = () => setClick(!click)
// let closeMobileMenu = () => setClick(false)
    return (
        <Fragment>
            <IconContext.Provider className="icons" value={{color:'', height:'150vh'}}>
            <div className="navbar">
                <Link to="/" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        {/* <Link to='/' className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link> */}
                    </li>
                    {SideBar.map((item, i) => {
                        return (
                            <li key={i} className={item.classN}>
                                <Link to={item.path}>
                                    {item.icon}
                                    {/* <a href= {item.path} onClick={scrollToTop, closeMobileMenu} className="text-decoration-none navlink text-light">{item.titre}</a> */}
                                    <p>{item.titre}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </Fragment>
    )
}


export default Navigation;