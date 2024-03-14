"use client"
import React from 'react'
import Link from 'next/link'
import { SectionTitle } from '@/components/typography/Typography'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


export const DisplayCategory = () => {
    return (
        <section className='site-container mt-section '>
            <SectionTitle>Categories</SectionTitle>
            {/* <div className="wrapper rounded-md p-4  overflow-hidden bg-white grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2">
                {
                    [...new Array(8)].map((item, index) =>
                        <Link href={''} className="category-item group bg-white  flex shadow-1 py-2 px-1 rounded items-center justify-center flex-col">
                            <img className='w-full group-hover:scale-105 duration-300' src={'https://ecloset-frontend.vercel.app/assets/category-1-090aa4c4.png'} alt="" />
                            <p className='text-center group-hover:text-Primary duration-200 text-gray-800  font-Base text-sm'>Business Cards</p>
                        </Link>
                    )
                }

            </div> */}
            <div className="bg-white p-4">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={
                        { clickable: true }
                    }
                    breakpoints={{
                        440: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 10,
                        },
                        1324: {
                            slidesPerView: 8,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        [...new Array(10)].map((item, index) =>
                            <SwiperSlide key={index}>
                                <div className="pb-[50px]">
                                    <Link href={''} className="category-item group bg-white  flex shadow-1 py-2 px-1 rounded items-center justify-center flex-col">
                                        <img className='w-full group-hover:scale-105 duration-300' src={'https://ecloset-frontend.vercel.app/assets/category-1-090aa4c4.png'} alt="" />
                                        <p className='text-center group-hover:text-Primary duration-200 text-gray-800  font-Base text-sm'>Business Cards</p>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    }


                </Swiper>
            </div>
        </section>
    )
}

