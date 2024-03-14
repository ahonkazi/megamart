"use client"
import { SectionTitle } from '@/components/typography/Typography'
import { GetGlobalContext } from '@/contexts/GlobalContext'
import Link from 'next/link'
import React, { useContext } from 'react'

export default function CategoryPage() {

    const globalContext = useContext(GetGlobalContext)
    return (
        <div className='mt-section site-container'>
            <SectionTitle>All Print Products & Services</SectionTitle>
            <div className="category_section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4">
                {
                    globalContext.Categories?.map((item, index) =>
                        <CategoryItem key={index} data={item} />
                    )
                }
            </div>
        </div>
    )
}

const CategoryItem = ({ data }) => {
    return (
        <div className="">
            {!data.name && (
                <div className="py-4 bg-gray-200 rounded"></div>
            )}
            {data.name && (
                <Link href={'/categories/' + data?.slug} className='text-Dark text-sm md:text-base 2xl:text-lg font-Base'>{data?.name}</Link>
            )}
            {
                data.SubCategories && (
                    <ul>
                        {
                            data?.SubCategories?.map((item, index) =>
                                item ?
                                    <li>
                                        <Link href={'/categories/' + data?.slug + '/' + item?.path} className='text-xs md:text-sm font-Base 2xl:text-base font-medium text-blue-500 '>{item?.name}</Link>
                                    </li> :
                                    <li className='py-4 bg-gray-300'>
                                    </li>

                            )
                        }

                    </ul>
                )
            }

        </div>
    )
}