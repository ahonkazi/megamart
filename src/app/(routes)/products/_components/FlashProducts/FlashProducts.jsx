import { SectionTitle } from '@/components/typography/Typography'
import React from 'react'
import FlashProductSlider from './FlashProductSlider'

const FlashProducts = () => {
    return (
        <section className='mt-section '>
            <SectionTitle title='Flash Products' subTitle='Products' />
            <div className="wrapper mt-wrapper ">
                <div className="wrapper-header"></div>
                <div className="wrapper-slider">
                    <FlashProductSlider />
                </div>
            </div>

        </section>
    )
}

export default FlashProducts