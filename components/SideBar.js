import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../components/SidebarData';
import { IconContext } from 'react-icons';
import Link from 'next/link';

export default function SideBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: '#6D6D6D' }}>
                <div className='max-w-min pl-10 text-2xl cursor-pointer'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </div>
                <nav className={'bg-secondary w-60 h-screen flex justify-center fixed top-0 text-secondaryText transform duration-500 ' + (sidebar ? "left-0" : " -left-full")}>
                    <ul className='w-full' onClick={showSidebar}>
                        <li className='pt-4 px-10 cursor-pointer flex w-full justify-end text-2xl'>
                            <AiIcons.AiOutlineClose />
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className="flex justify-start items-center py-2 pl-4 list-none h-16 hover:bg-primary cursor-pointer">
                                    {item.icon}
                                    <Link href={item.path}>
                                        <span className="ml-4">{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}
