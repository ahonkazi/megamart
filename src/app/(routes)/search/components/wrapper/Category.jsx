"use client"
import React, { useContext } from 'react'
import { FilterHeading } from '../typography/Typography'
import { MdChevronRight } from 'react-icons/md'
import { GetGlobalContext } from '@/contexts/GlobalContext'

const Category = () => {
    const context = useContext(GetGlobalContext)
    return (
        <div className="category">
            <FilterHeading>Categories</FilterHeading>
            <ul className='mt-4 flex flex-col gap-y-2'>

                {
                    context?.Categories.map((category, index) =>

                        <li key={index} className='flex items-center cursor-pointer'>
                            <p className='w-full font-Roboto text-DarkGray text-sm tracking-wide'>{category.name}</p>
                            <button className='shrink-0 px-2'>
                                <MdChevronRight />
                            </button>
                        </li>
                    )
                }


            </ul>
        </div>)
}

export default Category