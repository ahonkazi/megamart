"use client"
import React, { useContext } from 'react'
import SearchProducts from './SearchProducts'
import SearchFilter from './SearchFilter'
import { AiOutlineClose } from 'react-icons/ai';
import { GetGlobalContext } from '@/contexts/GlobalContext';

const ProductWrapper = () => {

    return (
        <>

            <section className='flex site-container mt-6 gap-4' >
                <div className="left w-full">
                    <SearchProducts />
                </div>

                <div className={`hidden md:block  duration-300 w-full xs:w-[300px]  shrink-0`}>
                    <div className="md:pt-0 overflow-y-auto">
                        <SearchFilter />

                    </div>

                </div >

            </section >
        </>
    )
}

export default ProductWrapper

export const SearchFilterMobile = () => {
    const searchContext = useContext(GetGlobalContext)

    return (
        <>
            <div className={`fixed bg-red-500 md:hidden block  ${searchContext.searchFilterStatus ? '' : 'translate-x-full'} duration-300 top-0 right-0 z-[180]  w-full xs:w-[300px]`}>
                <div className="relative  md:pt-0 z-[160] h-screen md:h-auto overflow-y-auto">
                    <SearchFilter />
                    <button onClick={() => searchContext.setSearchFilterStatus(false)} className={`absolute duration-200 md:hidden rounded-full ${searchContext.searchFilterStatus ? '' : 'translate-x-full'} bg-white p-2 top-0 xs:right-full `}>
                        <AiOutlineClose />
                    </button>
                </div>
                <button onClick={() => searchContext.setSearchFilterStatus(false)} className={`absolute duration-200 md:hidden ${searchContext.searchFilterStatus ? '' : 'translate-x-full'} bg-white p-2 top-0 xs:right-full `}>
                    <AiOutlineClose />
                </button>
            </div >
            <div onClick={() => searchContext.setSearchFilterStatus(false)} className={`fixed md:hidden  ${searchContext.searchFilterStatus ? 'opacity-100' : 'pointer-events-none opacity-0'} md:hidden duration-300 h-screen z-[70] w-screen bg-black bg-opacity-50 top-0 left-0`}>
            </div>

        </>
    )
}