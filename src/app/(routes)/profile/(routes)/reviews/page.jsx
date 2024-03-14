import { RatingStar } from '@/components/icons/Icon'
import React from 'react'
import { IoMdMore } from 'react-icons/io'
import PageWrapper from '@/layouts/PageWrapper'
const Reviews = () => {
    return (
        <PageWrapper>
            <div className="review-wrapper mt-content">
                <ReviewItem />
            </div>
        </PageWrapper>
    )
}

export default Reviews


const ReviewItem = () => {
    return (
        <div className="flex gap-4 p-4 duration-200 select-none hover:bg-gray-50">
            <div className="shrink-0">
                <img className='w-[40px] h-[40px] rounded-full object-cover' src={'data:image/jpeg;base64,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D8Fx3euLF89viuxwH4Lju9cWL57fFBP0VEUVVcPKS6bTbbOX3XbZLBajmkfCxhdMyh9Crhm9x4Cu2qHPporEeS2C4L3c+422USWWQbI6OOOMB1zuppLj+4H1o8OrjJxDQvT7uu+Oy2MQyuFole0bPO9jQ6dwFMTqACq2hGxr3PDGhzqYiBnNNCuGbiS3ZIwSwVd/BcIz/NRgOIcRVn5ecjPaRWlK7EFtKnYorW/LT4XA2kGug7EMyvhgLWubK8SgnQWAU7Fm7FVAa1rWhrWgNGgAaFVURBVR3Lb1ZB89vgVIVHstfVkHz2+BQc+7/wBrqW2tS7/2upbaqCIiAiIgIiICIiBwH4LiWiVkN5WWWVwZGyZrnOOgCq7R0FRPLNhNz20jghcf7KzyVPt0dzDTedl7wJukuXpOy94F8qiR9P1u1imOTnH6xXt2sXjc8/T6q3R3L0nZe8Cbo7l6TsveBfKuOTnH6xTHJzj9Yp2sDnn6fVW6O5ek7L3gTdHcvSdl7wL5Vxyc4/WKY5OcfrFO1gc8/T6q3R3L0nZe8Cbo7l6TsveBfKuOTnH6xTHJzj9Yp2sDnn6fVW6O5ek7L3gTdHcvSdl7wL5Vxyc4/WKY5OcfrFO1gc8/T6q3R3L0nZe8Cbo7l6TsveBfKuOTnH6xTHJzj9Yp2sDnn6fVW6O5ek7L3gXGypva77dYYYrHbIZpBMCWsdU0zr5uxyc4/WKk/wCHmKS/nAucaRHSfeFMunhJtccs69nu/wDa6ltrWsIwx09y2V4vYRERBERAREQEREBaNvsTLVBJFKwPjeMLmnQQt5UzcKCGS5F3STiF3WcV4A1Y9xd1ewQ6qm9G8SUHEOxXlTUQjcVdXsEOqm4q6vYIdVTeg4h2JQcQ7E3U1EI3FXV7BDqpuKur2CHVU3oOIdiUHEOxN01EI3FXV7BDqpuKur2CHVU3oOIdiUHEOxN01EI3FXV7BDqpuKur2CHVU3oOIdiUHEOxN01EI3FXV7BDqpuKur2CHVU3oOIdiUHEOxN01EJGRd1ewWfVXTurJuwXdPstkscMUhBGNraGn+BSOg4h2JRvEpurqLIW4BRZFRVQEREBERARRTfHyU6UP08nlTfHyU6UP08nlTVErRRM/iRkmNN6Ur/4JPKq74+SlabaGvF+Xk8qaErRRPfIyT6V/wCCTyqu+Nkp0ofp5PKglaKKb4+SnSh+nk8qb4+SnSh+nk8quqJWiim+Pkp0ofp5PKm+Pkp0ofp5PKmqJWiim+Pkp0ofp5PKm+Pkp0ofp5PKmqJWiim+Pkp0ofp5PKm+Pkp0ofp5PKmqJWiim+Pkp0ofp5PKm+Pkp0ofp5PKmqJWiim+Pkp0ofp5PKm+Pkp0ofp5PKmqJWiim+Pkp0ofp5PKm+Pkp0ofp5PKmqJWiim+Pkp0ofp5PKm+Pkp0ofp5PKpqiVoopvj5KdKH6eTypvj5KdKH6eTypqiVoopvj5KdKH6eTypvj5KdKH6eTypqj//Z'} alt='product-image' />
            </div>
            <div className="w-full">
                <div className="flex relative justify-between items-center">
                    <h2 className='leading-[160%] text-base font-medium'>Din Rail</h2>
                    <ItemOption />
                </div>
                <div className='flex items-center py-3 gap-2'>
                    <RatingStar rating={5} />
                    <p className='text-sm text-Gray'>2 days ago</p>
                </div>
                <p className='text-Gray text-sm md:text-base 2xl:text-lg'>Fonebox provide us the best quality of products. I Buy the Din Rail one and i get exactly what i want. Thanks for providing such a precious and useful product. </p>

            </div>
        </div>
    )
}

const ItemOption = () => {
    return (
        <>
            <button className='w-6 h-6 duration-100 active:bg-gray-200 rounded-full flex items-center justify-center text-Gray'><IoMdMore /></button>
            <div className="absolute w-[100px] bg-white shadow-shadowBox rounded top-full right-0 h-[100px]">

            </div>
        </>
    )
}