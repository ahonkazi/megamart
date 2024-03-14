"use client"
import React from 'react'
import {MdSearch } from 'react-icons/md'
import FilterWrapperCard from '../card/FilterWrapperCard'
import Tags from './Tags'
import Category from './Category'
import Sizes from './Sizes'

const SearchFilter = () => {

    return (
        <div className="search-filter flex flex-col md:gap-y-4">


            <FilterWrapperCard>
                <div className="search-box bg-gray-200 flex rounded overflow-hidden shadow-1 ">
                    <input type="text" placeholder='Search here..' className='bg-transparent font-Ubuntu text-sm text-DarkGray w-full outline-none border-none px-4' />
                    <button className='shrink-0 w-12 flex items-center py-2.5 text-xl text-white bg-Primary-2 duration-200 hover:bg-LightBlue justify-center'><MdSearch /></button>
                </div>
            </FilterWrapperCard>

            <FilterWrapperCard>
                <Category />
            </FilterWrapperCard >
            <FilterWrapperCard>
                <Tags />
            </FilterWrapperCard>
            <FilterWrapperCard>
                <Sizes />
            </FilterWrapperCard>
        </div >
    )
}

export default SearchFilter


