"use client"
import Link from 'next/link'
import React from 'react'

const PriceTotal = () => {

    return (
        <div className="mt-wrapper font-Base flex justify-end">
            <div className="w-full lg:w-fit">
                <h2 className='text-xl text-Dark md:text-2xl 2xl:text-3xl leading-[120%] font-medium text-center'>Cart Total</h2>
                <ul className="box flex flex-col  text-Gray mt-4 2xl:mt-6 w-full 2xl:w-[470px] md:w-[400px] 2xl:px-[40px] 2xl:py-[58px] px-6 py-12 shadow-shadowBox rounded-md" >
                    <li className="flex justify-between items-center py-2">
                        <p className='text-base 2xl:text-lg 2xl:font-medium'>Sub Total:</p>
                        <p className='text-base 2xl:text-lg 2xl:font-medium'>$183.00</p>

                    </li>

                    <li className="flex justify-between items-center border-t py-2">
                        <p className='text-base 2xl:text-lg 2xl:font-medium'>Coupone:</p>
                        <p className='text-base 2xl:text-lg 2xl:font-medium'>$18.00</p>

                    </li>

                    <li className="flex justify-between items-center border-t py-2">
                        <p className='text-base 2xl:text-lg 2xl:font-medium'>Shipping:</p>
                        <p className='text-base 2xl:text-lg 2xl:font-medium'>$10.00</p>

                    </li>
                    <li className="flex justify-between items-center border-t py-2">
                        <p className='text-base 2xl:text-lg 2xl:font-medium'>Subtotal:</p>
                        <p className='text-base 2xl:text-lg 2xl:font-medium'>$183.00</p>

                    </li>
                    <li className="flex justify-between items-center py-2 border-t">
                        <p className='text-base 2xl:text-lg 2xl:font-semibold font-medium'>Total:</p>
                        <p className='text-base 2xl:text-lg 2xl:font-semibold font-medium'>$293.00</p>

                    </li>
                    <li>
                        <Link href={'/purchase/checkout'} className='w-full bg-Primary text-sm block text-center lg:text-base 2xl:text-lg text-white py-3 rounded-md'>Proceed To Checkout</Link>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PriceTotal