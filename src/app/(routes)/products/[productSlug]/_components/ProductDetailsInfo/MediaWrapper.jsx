"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../_assets/details-1.jpg'
import img2 from '../../_assets/details-2.png'
import img3 from '../../_assets/details-3.png'
import Image from 'next/image'
import { Pagination } from 'swiper/modules';
import './mediawrapper.scss'
const MediaWrapper = () => {
  const [activeItem, setActiveItem] = useState(0);
  const images = [
    { url: img1, isVideo: false, videoUrl: '' },
    { url: img2, isVideo: false },
    { url: img3, isVideo: false },
    { url: img1, isVideo: false, videoUrl: '' },
    { url: img2, isVideo: false, videoUrl: '' },
    { url: img3, isVideo: false },

  ]
  return (
    <div className='media-wrapper  shrink-0 lg:w-[450px]'>
      <div className="display-media p-[20%]  relative">
        <Image src={images[activeItem].url} alt='product image' />
        {
          images[activeItem].isVideo && (
            <div className="absolute cursor-pointer shadow-box top-0 left-0 h-full w-full bg-black bg-opacity-40 flex items-center justify-center">
              <svg className='w-[50%]' viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_174_1044)">
                  <circle cx="51.5" cy="51.5" r="21.5" fill="white" />
                </g>
                <circle cx="51.5" cy="51.5" r="21.5" fill="white" />
                <path d="M59.1667 50.634C59.8334 51.0189 59.8334 51.9811 59.1667 52.366L48.4167 58.5726C47.7501 58.9575 46.9167 58.4763 46.9167 57.7065V45.2935C46.9167 44.5237 47.7501 44.0426 48.4167 44.4275L59.1667 50.634Z" fill="#2299F3" />
                <defs>
                  <filtI id="filter0_f_174_1044" x="0" y="0" width="103" height="103" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_174_1044" />
                  </filtI>
                </defs>
              </svg>
            </div>
          )
        }
      </div>
      <div className="sliders duration-200 mt-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={
            {
              clickable: true
            }
          }
          modules={[Pagination]}
        >
          {
            images.map((item, index) =>
              <SwiperSlide key={index}>
                <div className="pb-8">
                  <div onClick={() => setActiveItem(index)} className={`border-[1.5px] p-4 relative cursor-pointer ${activeItem === index ? 'border-Coral' : ' border-gray-300'}`}>
                    <Image src={item.url} alt='image' />
                    {
                      item.isVideo && (
                        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30 flex items-center justify-center">
                          <svg className='w-[60%]' viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_174_1044)">
                              <circle cx="51.5" cy="51.5" r="21.5" fill="white" />
                            </g>
                            <circle cx="51.5" cy="51.5" r="21.5" fill="white" />
                            <path d="M59.1667 50.634C59.8334 51.0189 59.8334 51.9811 59.1667 52.366L48.4167 58.5726C47.7501 58.9575 46.9167 58.4763 46.9167 57.7065V45.2935C46.9167 44.5237 47.7501 44.0426 48.4167 44.4275L59.1667 50.634Z" fill="#2299F3" />
                            <defs>
                              <filtI id="filter0_f_174_1044" x="0" y="0" width="103" height="103" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_174_1044" />
                              </filtI>
                            </defs>
                          </svg>
                        </div>

                      )
                    }
                  </div>
                </div>
              </SwiperSlide>
            )
          }


        </Swiper>
      </div>
    </div>
  )
}
export default MediaWrapper