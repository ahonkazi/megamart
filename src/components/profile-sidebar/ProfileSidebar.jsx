"use client"
import React, { useState } from 'react'
import { AiOutlineComment, AiOutlineHeart, AiOutlineLogout, AiOutlineSetting, AiOutlineShoppingCart, AiOutlineUser, AiOutlineWallet } from 'react-icons/ai'
import { MdChevronLeft, MdSecurity } from 'react-icons/md'
import { FiShoppingBag } from 'react-icons/fi'
import { RiRefund2Line } from 'react-icons/ri'

import './Sidebar.scss'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
const ProfileSidebar = () => {
    const menu = [
        { 'name': 'Overview', 'icon': <AiOutlineUser />, 'path': '/profile' },
        { 'name': 'Edit', 'icon': <AiOutlineSetting />, 'path': '/profile/edit' },
        { 'name': 'Orders', 'icon': <FiShoppingBag />, 'path': '/profile/orders' },
        { 'name': 'Wishlist', 'icon': <AiOutlineHeart />, 'path': '/profile/wishlists' },
        { 'name': 'Refunds', 'icon': <RiRefund2Line />, 'path': '/profile/refunds' },
        { 'name': 'Reviews', 'icon': <AiOutlineComment />, 'path': '/profile/reviews' },
        { 'name': 'Security', 'icon': <MdSecurity />, 'path': '/profile/security' },
        // { 'name': 'Settings', 'icon': <AiOutlineSetting />, 'path': '/profile/settings' },
    ]
    const [menuStatus, setMenuStatus] = useState(false);

    return (
        <aside className=' rounded py-2 shrink-0 lg:w-[300px]'>
            <button onClick={() => setMenuStatus(!menuStatus)} className="flex w-full sm:hidden text-xl px-4 justify-between">
                <span className='text-sm text-gray-500'>Menu</span>
                <span>
                    <MdChevronLeft className={`${menuStatus ? 'rotate-90' : '-rotate-90'} text-gray-500 duration-300`} />
                </span>
            </button>
            <div className={`sm:hidden ${menuStatus ? 'pt-2' : ''} duration-200`}>
                <AnimatePresence>
                    {
                        menuStatus && (
                            <motion.div initial={{ height: 0 }} exit={{ height: 0 }} animate={{ height: 'auto' }} className="">
                                <ul className='flex flex-col sm:flex-row md:justify-center lg:flex-col'>
                                    {
                                        menu.map((item, index) =>
                                            <li key={index} className='w-full sm:w-[65px] overflow-clip xl:w-full'>
                                                <Link href={item.path} className='profileLink'>
                                                    <span className='text-xl rounded p-2 flex items-center  justify-center  shadow-1'>{item.icon}</span>
                                                    <span className='font-WorkSans font-medium'>{item.name}</span>
                                                </Link>
                                            </li>
                                        )
                                    }
                                    <li className='w-full sm:w-[65px] overflow-clip xl:w-full'>
                                        <button className='profileLink'>
                                            <span className='text-xl rounded p-2 flex items-center  justify-center  shadow-1'><AiOutlineLogout /></span>
                                            <span className='font-WorkSans font-medium'>Logout</span>
                                        </button>
                                    </li>


                                </ul>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>
            <ul className='hidden sm:flex flex-col sm:flex-row md:justify-center lg:flex-col'>
                {
                    menu.map((item, index) =>
                        <li key={index} className='w-full sm:w-[65px] overflow-clip xl:w-full'>
                            <Link href={item.path} className='profileLink'>
                                <span className='text-xl rounded p-2 flex items-center  justify-center  shadow-1'>{item.icon}</span>
                                <span className='font-WorkSans font-medium'>{item.name}</span>
                            </Link>
                        </li>
                    )
                }
                <li className='w-full sm:w-[65px] overflow-clip xl:w-full'>
                    <button className='profileLink'>
                        <span className='text-xl rounded p-2 flex items-center  justify-center  shadow-1'><AiOutlineLogout /></span>
                        <span className='font-WorkSans font-medium'>Logout</span>
                    </button>
                </li>


            </ul>
        </aside>
    )
}

export default ProfileSidebar