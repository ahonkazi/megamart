"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'

const CategoryFilter = () => {
    return (
        <div className='shrink-0 w-[300px] bg-white shadow'>
            <div className="filter-header py-2.5 bg-[#f8f7f5]  px-6   rounded">
                <p className='text-Dark font-Secondary font-medium text-lg 2xl:text-xl'>Category Name</p>
            </div>
            <div className='mt-1 bg-white   rounded'>
                <ul className="filter-menu  py-2 ">
                    {
                        [...new Array(8)].map((item, index) =>
                            <SubCategoryItem key={index} />
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default CategoryFilter


const SubCategoryItem = () => {
    const [status, setStatus] = useState(false)
    return (
        <li onMouseEnter={() => setStatus(true)} onMouseLeave={() => setStatus(false)} className='flex px-6 relative justify-between items-center cursor-pointer hover:bg-Primary duration-300 bg-opacity-10 hover:bg-opacity-5'>
            <Link href={'/categories/150/sub-category'} className='text-Dark py-2 rounded font-Base text-sm 2xl:text-base'>Sub Category</Link>
            <span>
                <FaAngleRight />
            </span>
            {
                status && (
                    <div className="absolute  subCategoryMenu top-0 left-full w-[300px] z-[50]">
                        <div className=' bg-white shadow rounded-sm'>

                            <ul className="filter-menu  py-2 ">
                                {
                                    [...new Array(6)].map((item, index) =>
                                        <li key={index} className='px-6 cursor-pointer '>
                                            <p className='text-Dark py-2 rounded font-Base text-sm 2xl:text-base  duration-300 hover:text-Primary'>Product Title</p>


                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
        </li>
    )
}