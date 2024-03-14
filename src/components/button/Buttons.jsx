"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { BiSolidChevronRight } from 'react-icons/bi'
import { MdChevronRight } from 'react-icons/md'

export const ButtonSwiperPrev = () => {
    return (
        <button className='h-[50px] w-[60px] flex items-center justify-center rounded border-[1.5px] duration-200 border-CoralLight'  >
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.45427 15.5779L13.5534 23.677C13.9195 24.0431 13.9195 24.6367 13.5534 25.0028C13.1873 25.3689 12.5937 25.3689 12.2276 25.0028L2.52987 15.3051C2.16376 14.939 2.16374 14.3454 2.52987 13.9793L12.4657 3.96575C12.8318 3.59963 13.4254 3.59963 13.7916 3.96575C14.1577 4.33186 14.1577 4.92546 13.7916 5.29157L5.45794 13.7029L27.1209 13.7038C27.6387 13.7038 28.0584 14.1236 28.0584 14.6413C28.0584 15.1591 27.6386 15.5788 27.1209 15.5788L5.45427 15.5779Z" fill="#FF6534" />
            </svg>
        </button>
    )
}

export const ButtonSwiperNext = () => {
    return (
        <button className='h-[50px] w-[60px] flex items-center justify-center rounded border-[1.5px] duration-200 border-CoralLight'>
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5457 15.5779L16.4466 23.677C16.0805 24.0431 16.0805 24.6367 16.4466 25.0028C16.8127 25.3689 17.4063 25.3689 17.7724 25.0028L27.4701 15.3051C27.8362 14.939 27.8363 14.3454 27.4701 13.9793L17.5343 3.96575C17.1682 3.59963 16.5746 3.59963 16.2084 3.96575C15.8423 4.33186 15.8423 4.92546 16.2084 5.29157L24.5421 13.7029L2.87911 13.7038C2.36134 13.7038 1.94161 14.1236 1.94161 14.6413C1.94163 15.1591 2.36136 15.5788 2.87911 15.5788L24.5457 15.5779Z" fill="#FF6534" />
            </svg>
        </button>
    )
}

export const ButtonBackToTop = () => {
    const [visible, setVisible] = useState(false);
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > 600) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        })
    }
    return (
        <AnimatePresence>
            {
                visible && (
                    <motion.button transition={{ duration: 0.4, type: 'spring' }} initial={{ y: '-100vh', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '-100vh', opacity: 0 }} onClick={() => window.scrollTo(0, 0)}
                        className={`fixed right-[40px] h-8 text-white flex top-[80%] items-center justify-center text-xl lg:text-2xl  w-8 rounded-full shadow-2  z-[50] bg-Coral`}>
                        <BiSolidChevronRight className="-rotate-90" />
                    </motion.button>
                )
            }
        </AnimatePresence>
    )
}

export const ButtonText = ({ children }) => {
    return (
        <button className='px-4 py-1.5 text-sm 2xl:text-base font-medium'>
            {children}
        </button>
    )
}

export const ButtonDelete = () => {
    return (
        <button className='px-6 py-1.5 bg-[#FF2B2B] rounded-sm text-sm 2xl:text-base font-medium text-white'>
            Delete
        </button>
    )
}
export const ButtonSelect = ({ data, setSelectedData, selectedData }) => {
    const [menuStatus, setMenuStatus] = useState(false)
    return (
        <div className="  relative   ">
            <button onClick={() => setMenuStatus(!menuStatus)} className='flex text-sm 2xl:text-base w-full bg-Coral items-center rounded-sm text-white px-5 2xl:px-[18px] py-1 2xl:py-2 justify-between'>
                <p>{selectedData}</p>
                <MdChevronRight className='rotate-90' />
            </button>
            {
                menuStatus && (
                    <div className="absolute z-[10] top-full border-t p-1 left-0 w-full  bg-Coral rounded-sm">
                        <ul>
                            {
                                data.map((item, index) =>
                                    <li onClick={() => { setSelectedData(item); setMenuStatus(false) }} key={index} className={`select-none ${item === selectedData ? 'bg-orange-600' : ''} hover:bg-orange-600 duration-300  rounded px-4 2xl:px-[17px] py-1.5  text-white text-sm`}>{item}</li>
                                )
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}



export const ButtonCoral = ({ children, fullWidth = false, disabled = false, type = 'button', onclickFunction }) => {
    return (
        <button onClick={onclickFunction} type={type} disabled={disabled} className={`px-8 ${fullWidth ? 'w-full' : 'w-full sm:w-fit'} disabled:opacity-75 disabled:scale-100 active:scale-[0.98] duration-100 py-2.5 md:py-2 lg:py-2.5 bg-Coral rounded-sm text-sm md:text-base 2xl:text-lg font-medium text-white`}>
            {children}
        </button>
    )
}