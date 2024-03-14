"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './similarProduct.scss'
import { Pagination } from 'swiper/modules';
import { ProductCard } from '@/components/cards/Card';
const SimilarProductSlider = () => {
    return (
        <div className='similarProductSlider'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                grabCursor={true}
                pagination={
                    {
                        clickable: true
                    }
                }
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                loop={true}


            >

                <SwiperSlide>
                    <div className="pb-[40px] md:pb-[50px] xs:px-[10%] sm:px-0">
                        <ProductCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pb-[40px] md:pb-[50px] xs:px-[10%] sm:px-0">
                        <ProductCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pb-[40px] md:pb-[50px] xs:px-[10%] sm:px-0">
                        <ProductCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pb-[40px] md:pb-[50px] xs:px-[10%] sm:px-0">
                        <ProductCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pb-[40px] md:pb-[50px] xs:px-[10%] sm:px-0">
                        <ProductCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="pb-[40px] md:pb-[50px] xs:px-[10%] sm:px-0">
                        <ProductCard />
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default SimilarProductSlider