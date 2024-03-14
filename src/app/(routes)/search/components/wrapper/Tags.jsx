"use client"
import React, { useContext } from 'react'
import { FilterHeading } from '../typography/Typography'
import { GetGlobalContext } from '@/contexts/GlobalContext'

const Tags = () => {
    const context = useContext(GetGlobalContext)
    return (
        <div className="tags">
            <FilterHeading>Tags</FilterHeading>
            <ul className='mt-4 flex flex-wrap gap-2'>
                {
                    context.productTags.map((item, index) =>
                        <li key={index} className='px-4 py-2 border border-gray-200 text-gray-800 font-Base  text-sm text-center cursor-pointer'>{item}</li>
                    )
                }
            </ul>
        </div>)
}

export default Tags