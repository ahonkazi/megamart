"use client"
import React, { useContext } from 'react'
import { FilterHeading } from '../typography/Typography'
import { GetGlobalContext } from '@/contexts/GlobalContext'

const Sizes = () => {
    const context = useContext(GetGlobalContext)
    return (
        <div className="Sizes">
            <FilterHeading>Sizes</FilterHeading>
            <ul className='mt-4 flex flex-wrap gap-2'>
                {
                    context.productSizes.map((item, index) =>
                        <li key={index} className='px-4 py-2 border border-gray-200 text-gray-800 font-Base  text-sm text-center cursor-pointer'>{item}</li>
                    )
                }
            </ul>
        </div>)
}

export default Sizes