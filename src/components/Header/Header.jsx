import React from 'react'
import { MobileNavbar, Navbar } from './Navbar'
import { DesktopMenu, MobileMenu } from './Menu'
import { DesktopSidebar, MobileSidebar } from '../Sidebar/Sidebar'
export const NavBar = () => {
    return (
        <>
            <Navbar />
            <MobileNavbar />
        </>
    )
}

export const NavMenu = () => {
    return (
        <>
            <header className='bg-white pt-[80px] lg:pl-[60px] hidden lg:block'>
                <DesktopMenu />
            </header>
            <header className='lg:hidden bg-Primary  bg-opacity-30 pt-[70px]'>
                <MobileMenu />
            </header>
        </>
    )
}


export const Sidebar = () => {
    return (
        <>
            <DesktopSidebar />
            <MobileSidebar />
        </>
    )
}