import React from 'react'
import ProductList from './_components/ProductList/ProductList'
import PriceTotal from './_components/PriceInfo/PriceTotal'
import PageWrapper from '@/layouts/PageWrapper'

const CartPage = () => {
    return (
        <PageWrapper>
            <div className="site-container mt-section">

                <ProductList />
                <PriceTotal />
            </div>
        </PageWrapper>
    )
}

export default CartPage