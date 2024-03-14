"use client"
import { ProductCard } from '@/components/cards/Card'
import { SectionTitle } from '@/components/typography/Typography'
import React, { useContext } from 'react'

export default function ProductPage() {

    return (
        <div className='mt-section site-container'>
            <SectionTitle>All Print Products & Services</SectionTitle>
            <div className="products_section gap-x-8 md:gap-y-8  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4">
                {
                    [...new Array(20)].map((item, index) =>
                        <ProductCard key={index}  />)
                }
            </div>
        </div>
    )
}

