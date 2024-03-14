import React from 'react'
import WrapperHeader from './WrapperHeader'
import ProductLists from './ProductLists'

const ProductWrapper = () => {
    return (
        <div className='w-full'>
            <WrapperHeader />
            <ProductLists />
        </div>
    )
}

export default ProductWrapper