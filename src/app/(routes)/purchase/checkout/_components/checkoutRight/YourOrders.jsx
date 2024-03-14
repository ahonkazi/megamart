"use client"
import Link from 'next/link'
import React from 'react'
import { MdShoppingCart } from 'react-icons/md'

const YourOrders = () => {

    return (
        <div className='w-full font-Base' >
            <h2 className="md:text-xl 2xl:text-2xl ">Your Orders</h2>


            <div className="box mt-4 w-full  rounded-md shadow-1 py-6 px-6 bg-white">
                <div className="box-body flex flex-col">
                    <div className="box-item hover:bg-gray-50 duration-200 select-none py-2 flex justify-between items-center">
                        <p className='font-semibold text-gray-500'>Sub Total:</p>
                        <p className='font-medium text-gray-500'>$450</p>
                    </div>
                    <div className="box-item hover:bg-gray-50 duration-200 select-none py-2 border-t border-gray-100 flex justify-between items-center">
                        <p className='font-semibold text-gray-500'>Tax:</p>
                        <p className='font-medium text-gray-500'>5%</p>
                    </div>
                    <div className="box-item hover:bg-gray-50 duration-200 select-none py-2 border-t border-gray-100 flex justify-between items-center">
                        <p className='font-semibold text-gray-500'>Shipping:</p>
                        <p className='font-medium text-gray-500'>$15</p>
                    </div>
                    <div className="box-item hover:bg-gray-50 duration-200 select-none py-2 border-t-2  border-gray-200 flex justify-between items-center">
                        <p className='font-semibold text-gray-500'>Total:</p>
                        <p className='font-medium text-gray-500'>$650</p>
                    </div>
                    <Link href={'/purchase/cart'} className='text-Primary hover:underline flex items-center gap-2 font-medium'>
                        <MdShoppingCart />
                        <span>Edit Cart</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default YourOrders