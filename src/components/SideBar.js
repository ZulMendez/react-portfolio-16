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
        classN: 'nav-text', 
        id: 1
    },
    {
        titre: 'Skills',
        path: '/skills',
        icon: <GiIcons.GiSkills />,
        classN: 'nav-text',
        id: 2
    },
    {
        titre: 'My works',
        path: '/gallery',
        icon: <BsIcon.BsInfoCircleFill />,
        classN: 'nav-text',
        id: 3
    },
    {
        titre: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoPersonCircle />,
        classN: 'nav-text',
        id: 4
    }
]

