import { ReviewCard } from '@/components/cards/ReviewCard'
import React from 'react'
import customer1 from '../../../_assets/customer-1.jpg'
const TotalReview = () => {
    return (
        <section className='py-4 md:py-8 px-4 md:px-8 mt-4 rounded-md bg-white'>
            <h2 className='text-center text-Blue  '>Reviews (10)</h2>
            <div className="reviews-wrapper grid grid-cols-1 gap-4 mt-8 ">


                {
                    [...new Array(6)].map((item, index) =>
                        <ReviewCard key={index} img={customer1} rating={5} />
                    )
                }


            </div>
        </section>
    )
}

export default TotalReview