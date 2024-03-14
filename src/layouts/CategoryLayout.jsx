import CategoryFilter from '@/app/(routes)/categories/[category_id]/_components/CategoryFilters/CategoryFilter'
import SubCategoryFilter from '@/app/(routes)/categories/[category_id]/_components/CategoryFilters/SubCategoryFilter'
import { ProductCard } from '@/components/cards/Card'
import React from 'react'

const CategoryLayout = () => {
    return (
        <>
            <div className='flex site-container mt-section lg:gap-x-[40px]'>
                <div className="hidden shrink-0 lg:block">
                    <CategoryFilter />
                </div>
                <div className="products w-full">
                    <div className="grid gap-x-4 gap-y-4 lg:gap-y-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4">
                        {
                            [...new Array(15)].map((item, index) =>
                                <ProductCard key={index} />
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="mt-section"></div>
        </>
    )
}

export default CategoryLayout

export const SubCategoryLayout = () => {
    return (
        <>
            <div className='flex site-container mt-section lg:gap-x-[40px] '>
                <div className="hidden shrink-0 lg:block">
                    <SubCategoryFilter />
                </div>
                <div className="w-full">
                    <div className="grid gap-x-4 gap-y-4 lg:gap-y-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4">
                        {
                            [...new Array(15)].map((item, index) =>
                                <div className="">
                                    <ProductCard key={index} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="mt-section"></div>
        </>
    )
}
