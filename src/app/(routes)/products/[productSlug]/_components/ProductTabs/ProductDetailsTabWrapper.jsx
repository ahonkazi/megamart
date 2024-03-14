"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import DescriptionTab from './DescriptionTab/DescriptionTab';
import { useRouter } from 'next/router';
import ReviewsTab from './ProductReviewTab/ReviewsTab';

const ProductDetailsTabWrapper = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Overview', 'Reviews', 'Tamplates', 'Queries']

    const pathname = usePathname();
    const searchQuery = useSearchParams()
    useEffect(() => {
        if (searchQuery.get('tab') === 'review') {
            setActiveTab(1)
        }
    }, [])
    return (
        <section className='mt-wrapper site-container'>

            <div className="heading  font-Base relative after:content-[''] after:absolute after:w-[100%] after:bottom-0 after:z-[10] after:h-[2px] after:left-0 after:bg-gray-200  ">
                <div className="flex gap-3">
                    {
                        tabs.map((item, index) =>
                            <button key={index} onClick={() => setActiveTab(index)} className={`${activeTab == index ? 'text-Primary after:content-[""] after:absolute after:w-[65%] after:bottom-0 after:z-[10] after:h-[2px] after:left-0 after:bg-Primary z-[20]' : 'text-gray-800'} text-base md:text-lg py-4 tracking-wide font-Inter relative `}>{item}</button>
                        )
                    }
                </div>
            </div>


            {activeTab === 0 && (
                <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <DescriptionTab />

                </motion.div>
            )}



            {activeTab === 1 && (
                <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <ReviewsTab />

                </motion.div>
            )}



        </section >

    )
}

export default ProductDetailsTabWrapper