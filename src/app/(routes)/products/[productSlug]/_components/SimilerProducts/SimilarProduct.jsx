import React from 'react'
import FlashProductSlider from './SimilarProductSlider'
import { SectionTitle } from '@/components/typography/Typography'

const SimilarProduct = () => {
    return (
        <section className='mt-section site-container '>
            <SectionTitle>Simillar products</SectionTitle>
            <div className="wrapper mt-wrapper ">
                <div className="wrapper-header"></div>
                <div className="wrapper-slider">
                    <FlashProductSlider />
                </div>
            </div>

        </section>
    )
}

export default SimilarProduct