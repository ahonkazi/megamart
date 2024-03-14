"use client"
import React, { useContext, useState } from 'react'
import style from './navbar.module.scss';
import './style.scss';
// import LogoGreen from '../../assets/LogoGreen';
import { MdChevronRight, MdOutlineSupportAgent, MdSearch, MdShoppingCart } from 'react-icons/md';
import { AiOutlineBell, AiOutlineHeart, AiOutlineMenu, AiOutlineNotification, AiOutlineUser } from 'react-icons/ai';
import { GetGlobalContext } from '@/contexts/GlobalContext';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
// import
export const DesktopMenu = () => {
    const profileMenu = [
        { name: 'Profile', path: '/profile/index' },
        { name: 'My Cart', path: '/cart' },
        { name: 'WishList', path: '/profile/wishlist' },
        // { name: 'Login', path: '' },
    ]

    const context = useContext(GetGlobalContext);
    return (
        <menu className={`site-container bg-Primary  bg-opacity-30`}>
            <div className="flex  relative justify-between py-2 ">
                <div className="flex items-center gap-4">
                    <button onClick={() => context.SetDesktopSidebarStatus(!context.desktopSidebarStatus)} className='flex gap-2 items-center group py-1 pl-1 pr-4 rounded-3xl  bg-white'>
                        <span className='bg-Primary group-hover:bg-Green duration-300 rounded-full text-white w-8 h-8 flex items-center justify-center text-xl '><AiOutlineMenu /></span>
                        <span className='text-start text-[15px] text-gray-500 '>All Categories</span>
                    </button>
                    {
                        context.menu?.map((menuItem, index) =>
                            <DesktopMenuItem item={menuItem} key={index} />
                        )
                    }
                </div>

            </div>
        </menu>
    )
}

export const MobileMenu = () => {
    const [searchValue, setSearchValue] = useState('');


    return (
        <menu className={`flex ${style.HeaderPaddingMobile} gap-2  justify-center py-2`}>
            <form onSubmit={(e) => { e.preventDefault() }} className="search-bar bg-white  flex justify-between items-center w-full h-[40px] md:h-[44px] px-1">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className='w-full  bg-transparent border-none outline-none pl-3  text-[15px] text-gray-400 font-normal' placeholder='Search for product..' />
                <button type='submit' className='shrink-0 w-[36px] hover:bg-Primary duration-200 text-2xl text-white h-[36px] bg-Secondary  flex items-center justify-center'>
                    <MdSearch />
                </button>
            </form>

            <div className="flex items-center gap-2">


                <button className='w-9 h-9 flex items-center hover:shadow-xl duration-300 justify-center rounded-full text-white bg-Primary'>
                    <MdShoppingCart className='text-xl' />
                </button>

            </div>
        </menu>
    )
}


const DesktopMenuItem = ({ item }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <Link href={item.path} onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)} className='px-4 font-Base group DesktopMenuLink text-Dark rounded-3xl duration-300 hover:text-Light  hover:bg-Primary py-2  text-[15px] tracking-wide ' >
            {item.name}

            {
                item?.subMenu && (

                    <AnimatePresence>
                        {
                            menuOpen && (
                                <motion.div className="megaMenu z-[40] absolute site-container w-full h-[500px] bg-white py-4 top-full left-0">
                                    <div className="menu-wrapper grid grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4">
                                        {
                                            item.subMenu?.map((subMenuItem, index) =>
                                                <div key={index} className="menu-item">
                                                    <p className='text-Primary font-Base 2xl:text-lg border-b py-1'>{subMenuItem.title}</p>

                                                    {
                                                        subMenuItem.subSubMenu && (
                                                            <ul className='py-2 flex flex-col gap-y-1'>
                                                                {subMenuItem.subSubMenu?.map((subSubMenuItem, subSubMenuIndex) =>
                                                                    <li key={subSubMenuIndex} className='text-Dark text-sm font-Base flex items-center gap-x-3'>
                                                                        <Link href={subSubMenuItem.path} className='duration-150 hover:text-Secondary cursor-pointer'> {subSubMenuItem.title}</Link>
                                                                        {subSubMenuItem?.status && (
                                                                            <span className='bg-Secondary shrink-0 px-1 font-Base text-xs text-Light rounded-sm'>{subSubMenuItem?.status}</span>

                                                                        )}
                                                                        {subSubMenuItem?.hasMore && (
                                                                            <span className='text-sm'>
                                                                                <MdChevronRight />
                                                                            </span>
                                                                        )}
                                                                    </li>
                                                                )}
                                                            </ul>
                                                        )
                                                    }

                                                </div>
                                            )
                                        }
                                    </div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>

                )
            }
        </Link>
    )


}