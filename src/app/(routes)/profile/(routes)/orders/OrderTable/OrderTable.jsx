import React from 'react'
import { RxExternalLink } from "react-icons/rx";
const OrderTable = () => {
    return (
        <div className="mt-section w-full">
            <div className="relative w-full overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm 2xl:text-base text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs 2xl:text-sm text-gray-700 uppercase ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="col" className="px-6 py-3 min-w-[140px] lg:min-w-0">
                                Order ID
                            </th>
                            <th scope="col" className="px-6 py-3 min-w-[140px] lg:min-w-0">
                                Order date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Method
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Currancy
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className='sr-only'>Action</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...new Array(5)].map((item, index) =>
                                <tr key={index} className="bg-white border-t select-none  hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <th scope="row" className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap ">
                                        <div className="flex items-center gap-2 2xl:gap-4">

                                            <p>#12402</p>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        Nov 12, 2023
                                    </td>
                                    <td className="px-6 py-4">
                                        Paypal
                                    </td>

                                    <td className="px-6 py-4">
                                        USD
                                    </td>
                                    <td className="px-6 py-4">
                                        150$
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className='statusCompleted'>Completed</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button>
                                            <RxExternalLink />
                                        </button>
                                    </td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default OrderTable