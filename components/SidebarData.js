import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Details',
        path: '/details',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Pricing',
        path: '/pricing',
        icon: <IoIcons.IoIosPricetags />,
        cName: 'nav-text'
    },
    {
        title: 'Collaborators',
        path: '/collaborators',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    }
];