import React from 'react'

import PageWrapper from '@/layouts/PageWrapper'
import HaveCoupon from './_components/coupon/HaveCoupon'
import CheckoutLeft from './_components/CheckoutLeft/CheckoutLeft'
import CheckoutRight from './_components/checkoutRight/CheckoutRight'
const CheckoutPage = () => {


    return (


        <PageWrapper>
            <div className="site-container mt-page">
                <HaveCoupon />
                <div className="flex gap-8 md:gap-[50px] xl:gap-[100px] flex-col lg:flex-row mt-section">
                    <div className="checkoutLayoutLeft w-full">
                        <CheckoutLeft />
                    </div>
                    <div className="checkoutLayoutRight w-full lg:w-[450px] shrink-0">
                        <CheckoutRight />
                    </div>
                </div>
            </div>
        </PageWrapper>

    )
}

export default CheckoutPage