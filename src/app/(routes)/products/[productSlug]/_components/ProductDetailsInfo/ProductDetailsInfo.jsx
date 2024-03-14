import React from 'react'
import MediaWrapper from './MediaWrapper'
import ProductInformation from './ProductInformation'

const ProductDetailsInfo = () => {
    return (
        <section className='mt-4 site-container'>
            <div className="flex flex-col lg:flex-row gap-[20px] md:gap-[50px]">
                <MediaWrapper />
                <ProductInformation />
            </div>
        </section>
    )
}

export default ProductDetailsInfo