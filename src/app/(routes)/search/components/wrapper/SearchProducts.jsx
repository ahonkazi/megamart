"use client"
import { ButtonPrimary } from '@/components/buttons/Buttons';
import { ProductCard } from '@/components/cards/Card';
import React from 'react'
const SearchProducts = () => {
    return (
        <>
            <div className="products grid gap-y-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
            <div className="mt-section flex justify-center">
                <ButtonPrimary>Load More</ButtonPrimary>
            </div>
        </>
    )
}

export default SearchProducts