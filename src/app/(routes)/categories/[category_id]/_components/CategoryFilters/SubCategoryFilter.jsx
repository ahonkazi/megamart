"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'

const SubCategoryFilter = () => {
    return (
        <div className='shrink-0 w-[300px] bg-white shadow'>
            <div className="filter-header py-2.5 bg-[#f8f7f5]  px-6   rounded">
                <p className='text-Dark font-Secondary font-medium text-lg 2xl:text-xl'>Sub Category Name</p>
            </div>
            <div className='mt-1 bg-white   rounded'>
                <ul className="filter-menu  py-2 ">
                    {
                        [...new Array(8)].map((item, index) =>
                            <ProductItem key={index} />
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default SubCategoryFilter


const ProductItem = () => {
    return (
        <li className='px-6 cursor-pointer '>
            <Link href={'/products/product-slug'} className='text-Dark py-2 rounded font-Base text-sm block 2xl:text-base  duration-300 hover:text-Primary'>Product Title</Link>

        </li>
    )
}