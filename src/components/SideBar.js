import React from 'react';
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";
import * as BsIcon from "react-icons/bs";

export const SideBar = [
    {
        titre: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        classN: 'nav-text'
    },
    {
        titre: 'About',
        path: '/about',
        icon: <BsIcon.BsInfoCircleFill />,
        classN: 'nav-text'
    },
    {
        titre: 'Skills',
        path: '/skils',
        icon: <GiIcons.GiSkills />,
        classN: 'nav-text'
    },
    {
        titre: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoPersonCircle />,
        classN: 'nav-text'
    }
]

