import React from 'react'
import { RatingStar } from '../icons/Icon'
import Image from 'next/image'
export const ReviewCard = ({ img, rating }) => {
    return (
        <div className="review-item  cursor-pointer flex gap-4 pb-4">
            <div className="profile shrink-0">
                <Image className='w-[60px] md:w-[70px] 2xl:w-[90px] 2xl:h-[90px] h-[60px] md:h-[70px] object-cover object-top rounded-full ' src={img} alt="" />
            </div>
            <div className="review-content">
                <p className="date text-Dark text-xs md:text-sm ">28 Feb, 2022</p>
                <div className="flex justify-between">
                    <p className="username text-Blue text-sm md:text-base font-medium ">Olga Devidson</p>
                    <div className="rating">
                        <RatingStar rating={rating} />
                    </div>
                </div>
                <p className='text-Dark   mt-2 text-xs md:text-sm'>
                    Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet ipsum dolor sit amet, consectetu Maecenas dignissim orci quis odio egestas, vitae interdum urna sagittis.
                </p>
            </div>
        </div>
    )
}