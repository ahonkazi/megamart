"use client"
import { GetGlobalContext } from '@/contexts/GlobalContext'
import React, { useContext } from 'react'
import { BiFilter } from 'react-icons/bi'

const SearchBreadCrumb = () => {
    const context = useContext(GetGlobalContext)
    return (
        <section className='flex bg-white justify-end py-2'>
            <button onClick={() => context.setSearchFilterStatus(!context.searchFilterStatus)} className='shrink-0 md:hidden text-2xl px-2 text-DarkGray'><BiFilter /></button>
        </section>
    )
}

export default SearchBreadCrumb