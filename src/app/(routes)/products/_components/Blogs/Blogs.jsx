import BlogCard from '@/components/cards/BlogCard'
import { SectionTitle } from '@/components/typography/Typography'
import React from 'react'

const Blogs = () => {
    return (
        <>
            <section className='mt-section'>
                <SectionTitle responsive={true} mdTitle='Blogs, Customer' mdNextLine='Success, News' subTitle='Blogs' title='Blogs, Customer Success, News' />
                <div className="blogs-wrapper relative mt-wrapper grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        [...new Array(6)].map((item, index) =>
                            <BlogCard key={index} />

                        )
                    }
                    <div className="absolute bottom-0 -z-[10] -translate-x-[40%] translate-y-[40%] left-0">
                        <svg className='h-[50px] 2xl:h-[100px]' viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="50.5" cy="50.4102" rx="50.5" ry="50" fill="#2298F1" fillOpacity="0.5" />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-center mt-wrapper items-center">
                    <button className='px-16 py-2 rounded border border-Coral text-white bg-Coral duration-200 hover:bg-transparent hover:text-Coral'>View all</button>

                </div>
            </section>
            <div className="mt-section"></div>
        </>
    )
}

export default Blogs