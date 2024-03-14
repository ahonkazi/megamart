"use client"
import React, { useEffect, useRef, useState } from 'react'
import { CgPaypal, CgCreditCard } from 'react-icons/cg'
import { AnimatePresence, motion } from 'framer-motion'
import { InputCheckout, SelectCheckout } from '../InputFields'
import { range } from '@/utils/Library'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const PaymentInformation = () => {
    const [selectedMethod, setSelectedMethod] = useState(0);
    const methods = [
        { 'text': 'PayPal', 'icon': <CgPaypal /> },
        { 'text': 'Credit Card', 'icon': <CgCreditCard /> },
    ]
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date();
    const year = range(1970, date.getFullYear())
    const swiperRef = useRef(null);
    useEffect(() => {
        if (selectedMethod === 1) {
            swiperRef.current.swiper.slideNext()
        }
        if (selectedMethod === 0) {
            swiperRef.current.swiper.slidePrev()
        }
    }, [selectedMethod])
    return (
        <div className='mt-content w-full'>
            <h2 className="md:text-xl 2xl:text-2xl ">Payment Information</h2>

            <div className="box mt-4 w-full lg:w-[420px] rounded-md shadow-1 py-6 px-6 bg-white">
                <div className="methods overflow-y-hidden overflow-x-clip">
                    <div className="grid grid-cols-2 gap-2">
                        {
                            methods.map((item, index) =>
                                <button key={index} onClick={() => setSelectedMethod(index)} className={`flex items-center border duration-300  ${selectedMethod === index ? 'border-Primary text-Primary' : 'border-gray-100 bg-gray-100 text-gray-700'}  justify-center gap-2 font-WorkSans py-3 rounded `}>
                                    {item.icon}
                                    <span className=' font-medium'>{item.text}</span>
                                </button>
                            )
                        }

                    </div>




                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        ref={swiperRef}
                        modules={[Navigation]}
                        simulateTouch={false}
                    >

                        <SwiperSlide>
                            <div>
                                <div className="method-info-credit-card pt-4 flex flex-col gap-2">
                                    <div className="input-item mt-2">
                                        <p className='text-gray-500 font-Poppins text-sm'>Paypal Email</p>
                                        <div className="mt-2">
                                            <InputCheckout type={'email'} placeholder={'** ** **'} />

                                        </div>
                                    </div>
                                    <div className="input-item mt-2">
                                        <p className='text-gray-500 font-Poppins text-sm'>Expiration Date</p>
                                        <div className="mt-2 grid grid-cols-2 gap-4">
                                            <SelectCheckout placeholder={'Month'} data={months} />
                                            <SelectCheckout placeholder={'Year'} data={year} />
                                        </div>
                                    </div>
                                    <div className="input-item mt-2">
                                        <p className='text-gray-500 font-Poppins text-sm'>Security Code</p>
                                        <div className="mt-2">
                                            <InputCheckout type={'text'} placeholder={'Security Code'} />

                                        </div>
                                    </div>
                                    <button className='py-3 bg-Primary text-white rounded w-full'>Pay now</button>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="method-info-credit-card pt-4 flex flex-col gap-2">
                                    <div className="input-item mt-2">
                                        <p className='text-gray-500 font-Poppins text-sm'>Credit Card Number</p>
                                        <div className="mt-2">
                                            <InputCheckout type={'password'} placeholder={'** ** **'} />

                                        </div>
                                    </div>
                                    <div className="input-item mt-2">
                                        <p className='text-gray-500 font-Poppins text-sm'>Expiration Date</p>
                                        <div className="mt-2 grid grid-cols-2 gap-4">
                                            <SelectCheckout placeholder={'Month'} data={months} />
                                            <SelectCheckout placeholder={'Year'} data={year} />
                                        </div>
                                    </div>
                                    <div className="input-item mt-2">
                                        <p className='text-gray-500 font-Poppins text-sm'>Security Code</p>
                                        <div className="mt-2">
                                            <InputCheckout type={'text'} placeholder={'Security Code'} />

                                        </div>
                                    </div>
                                    <button className='py-3 bg-Primary text-white rounded w-full font-medium'>Pay now</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>





                </div>
            </div>
        </div >)
}

export default PaymentInformation