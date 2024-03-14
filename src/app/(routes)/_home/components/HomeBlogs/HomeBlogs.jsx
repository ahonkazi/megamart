"use client"
import { BlogCard } from '@/components/cards/Card'
import { SectionTitleCenter } from '@/components/typography/Typography'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const HomeBlogs = () => {
    return (
        <div className='py-section'>
            <SectionTitleCenter>Read UP on the Latest in the Printing Industry</SectionTitleCenter>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                breakpoints={{
                    460: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    690: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    925: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1324: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    [...new Array(8)].map((item, index) =>
                        <SwiperSlide key={index}>
                       
                                <BlogCard />
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    )
}

export default HomeBlogs