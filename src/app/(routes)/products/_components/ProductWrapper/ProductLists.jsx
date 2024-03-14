import { ProductAnimatedCard } from '@/components/cards/ProductCard'
import React from 'react'
import ProductPagination from './ProductPagination'

const ProductLists = () => {
    return (
        <section className='mt-wrapper'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-x-8">
                {
                    [...new Array(15)].map((item, index) =>
                        <div key={index} className="grid-item xs:px-[10%] sm:px-0">
                            <ProductAnimatedCard />
                        </div>
                    )
                }

            </div>
            <ProductPagination />
        </section>

    )
}

export default ProductLists