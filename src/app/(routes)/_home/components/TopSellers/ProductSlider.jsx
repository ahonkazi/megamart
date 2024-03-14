"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { SectionTitle } from '@/components/typography/Typography';
import { ProductCard, ProductCardVertical } from '@/components/cards/Card';

export const ProductSlider = ({ title }) => {

    return (
        <>
            <section className="mt-section site-container">
                <SectionTitle>{title}</SectionTitle>
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
                                <ProductCard />
                            </SwiperSlide>
                        )
                    }

                </Swiper>
            </section>

        </>
    )
}

export const ProductSliderVertical = ({ title }) => {

    return (
        <>
            <section className="mt-section site-container">
                <SectionTitle>{title}</SectionTitle>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    breakpoints={{
                        560: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },

                        925: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1324: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        [...new Array(8)].map((item, index) =>
                            <SwiperSlide key={index}>
                                <ProductCardVertical />
                            </SwiperSlide>
                        )
                    }

                </Swiper>
            </section>

        </>
    )
}


export const ProductSliderChild = ({ title }) => {

    return (
        <>
            <section className="">
                <SectionTitle>{title}</SectionTitle>
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
                                <ProductCard />
                            </SwiperSlide>
                        )
                    }

                </Swiper>
            </section>

        </>
    )
}
