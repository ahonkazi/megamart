import React from 'react'
import ProductDetailsInfo from './_components/ProductDetailsInfo/ProductDetailsInfo'
import ProductDetailsTabWrapper from './_components/ProductTabs/ProductDetailsTabWrapper'
import SimilarProduct from './_components/SimilerProducts/SimilarProduct'
import PageWrapper from '@/layouts/PageWrapper'
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params

    return {
        title: 'S8VK-C06024 Omron',
        description: 'Fonebox Automation  provide best automation products.',
        openGraph: {
            images: '',
        },
    }
}

const ProductDetails = () => {
    return (
        <PageWrapper>
            <ProductDetailsInfo />
            <ProductDetailsTabWrapper />
            <SimilarProduct />
            <div className="mt-section"></div>
        </PageWrapper>
    )
}

export default ProductDetails