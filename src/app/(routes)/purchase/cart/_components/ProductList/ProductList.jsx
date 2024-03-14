import Image from 'next/image'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
const ProductList = () => {
    return (
        <div className='mt-wrapper font-Base'>


            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm 2xl:text-base text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs 2xl:text-sm text-gray-700 uppercase ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Delete</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sub Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...new Array(5)].map((item, index) =>
                                <tr key={index} className="bg-white border-t select-none  hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className='duration-300 hover:text-Primary'>
                                            <AiOutlineClose />
                                        </p>
                                    </td>
                                    <th scope="row" className="px-6 py-4 min-w-[200px] font-medium text-gray-900 whitespace-nowrap ">
                                        <div className="flex items-center gap-2 2xl:gap-4">
                                            <div className="relative shrink-0">
                                                <img className='w-[50px] h-[50px] rounded object-cover' src={'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/8971f8101875761.5f29788a9d40e.jpg'} alt='product-image' />
                                                <div className={`absolute top-0 left-0 w-full h-full ${index % 2 === 0 ? 'bg-PrimaryLight bg-opacity-30 ' : 'bg-Blue bg-opacity-10'} rounded`}></div>
                                            </div>
                                            <p>Business Card</p>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        100$
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="quantity">
                                            <div className="flex items-center border rounded-md w-fit py-1">
                                                <span className='px-4 cursor-pointer 2xl:text-lg'> - </span>
                                                <input type="text" className='w-[40px] text-sm 2xl:text-lg text-center border-x' value={'1'} />
                                                <span className='px-4 cursor-pointer 2xl:text-lg'> + </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        100$
                                    </td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
            <div className="table-footer py-4 mt-1 border-t">
                <div className="flex  flex-col sm:flex-row gap-y-3 gap-x-3 justify-between items-center">
                    <div className="flex w-full md:w-fit flex-col sm:flex-row gap-y-3 items-center gap-4">
                        <input type="text" className='bg-[#F0F0F0] w-full md:w-fit text-sm outline-none 2xl:py-3 2xl:text-base text-Gray px-4 rounded-md py-3' placeholder='Coupon Code' />
                        <button className='px-6 w-full shrink-0 sm:w-fit py-2.5 2xl:py-3 bg-Primary text-white rounded'>Apply</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductList