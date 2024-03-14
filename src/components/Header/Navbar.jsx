"use client"
import React, { useContext, useState, useEffect } from 'react'
import style from './navbar.module.scss';
import { MdMenu, MdOutlineSupportAgent, MdSearch, MdShoppingCart } from 'react-icons/md';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineWhatsApp } from 'react-icons/ai';
import { GoQuestion } from "react-icons/go";
import Link from 'next/link';
import { GetGlobalContext } from '@/contexts/GlobalContext';
import { LogoDefault } from '@/assets/Logo';
export const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const profileMenu = [
        { name: 'Profile', path: '/profile/index' },
        { name: 'My Cart', path: '/cart' },
        { name: 'WishList', path: '/profile/wishlist' },
        // { name: 'Login', path: '' },
    ]

    const context = useContext(GetGlobalContext);
    const [profileDropdown, setProfileDropdown] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {

                if (window.scrollY > 200) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);

                }


            })
        }

    }, [])

    return (
        <nav className={`lg:pr-4 px-4 lg:pl-[75px] ${isFixed ? 'h-[70px]' : 'h-[80px]'} duration-200 bg-white hidden lg:flex fixed w-full top-0 items-center z-[70]  gap-12 `}>
            <Link href={'/'} className="logo ">
                <LogoDefault />
            </Link>
            <form onSubmit={(e) => { e.preventDefault() }} className="search-bar border-[1.5px] flex justify-between  items-center border-gray-300 w-full h-[44px] px-1">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className='w-full font-Ubuntu bg-transparent border-none outline-none pl-3 pr-4  text-[15px] text-gray-400 font-normal' placeholder='Search for product..' />
                <button className='shrink-0 w-[36px]  duration-200 text-2xl text-white h-[36px] bg-Primary  flex items-center justify-center'>
                    <MdSearch />
                </button>
            </form>
            <div className="right shrink-0  flex items-center justify-between gap-8">

                <div className="flex items-center gap-2">
                    <div className="icon">
                        <GoQuestion className='text-[32px] text-Dark' />
                    </div>
                    <Link href='tel:+' className="flex flex-col items-start">
                        <p className='text-Secondary'>24 Support</p>
                        <p className='text-Dark font-Poppins text-[15px] tracking-wide'>+88016-211549</p>
                    </Link>

                </div>
                {/* extra options */}
                <div className="flex items-center gap-4">
                    <div onMouseEnter={() => setProfileDropdown(true)} onMouseLeave={() => setProfileDropdown(false)} className="relative">
                        <Link href={'/profile/index'}>
                            <button className='w-9 h-9 flex items-center hover:shadow-xl duration-300 justify-center rounded-full bg-white text-Primary'>
                                <AiOutlineUser className='text-xl' />
                            </button>

                        </Link>
                        <ul className={`bg-white ${profileDropdown ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-5 opacity-0 pointer-events-none'} duration-300 min-h-[100px] shadow-2 w-[200px] z-[50] absolute top-10  rounded right-0`}>
                            {
                                profileMenu.map((item, index) =>
                                    <li key={index} className='hover:bg-slate-100 border-b duration-200 '>
                                        <Link className='py-2 px-4 block text-gray-700' href={item.path}>{item.name}</Link>
                                    </li>
                                )
                            }
                            <li className='hover:bg-slate-100 border-b duration-200 '>
                                <button className='py-2 px-4 block text-gray-700 w-full text-start'>Login</button>
                            </li>

                        </ul>
                        <div className={`bg-transparent h-[10px]  w-[200px] z-[20] absolute top-full  rounded right-0`}>
                        </div>

                    </div>

                    <div className="flex items-center gap-2">

                        <button className='w-9 h-9 flex items-center hover:shadow-xl duration-300 justify-center rounded-full text-white bg-Primary'>
                            <MdShoppingCart className='text-xl' />
                        </button>

                        <span className='font-Ubuntu  text-gray-600'><span>৳ </span>0.00</span>
                    </div>
                </div>
            </div>

        </nav>
    )
}




export const MobileNavbar = () => {
    const context = useContext(GetGlobalContext);
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {

                if (window.scrollY > 200) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);

                }


            })
        }

    }, [])
    return (
        <nav className={`${style.HeaderPaddingMobile} ${isFixed ? 'shadow-1 h-[60px]' : 'h-[70px]'}   duration-150 fixed w-full top-0 z-[70] lg:hidden flex bg-white items-center justify-between gap-12`}>
            <button onClick={() => context.setMobileSidebarStatus(true)}>
                <MdMenu className='text-2xl text-Dark' />
            </button>
            <Link onClick={() => window.scrollTo(0, 0)} href={'/'} className={`logo duration-300 `}>
                <LogoDefault />
            </Link>

            <Link href={'/profile/index'}>
                <AiOutlineUser className='text-2xl text-Dark' />
            </Link>


        </nav>
    )
}