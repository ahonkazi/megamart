import PageWrapper from '@/layouts/PageWrapper'
import React from 'react'
import HomeSlider from './components/HomeSlider/HomeSlider'
import { DisplayCategory } from './components/display-category/Category'
import { ProductSlider, ProductSliderVertical } from './components/TopSellers/ProductSlider'
import IntroVideo from './components/IntroVideo/IntroVideo'
import Testimonial from './components/Testimonial/Testimonial'
import BrowseByCategory from './BrowseByCategory/BrowseByCategory'
import HomeBlogs from './components/HomeBlogs/HomeBlogs'

const HomePage = () => {
    return (
        <PageWrapper>
            <HomeSlider />
            <DisplayCategory />
            <ProductSlider title={'Top seller'} />
            <ProductSlider title={'Featured Products'} />
            <ProductSliderVertical title={'New & Updated Products'} />
            <ProductSliderVertical title={'Best Deals'} />
            <Testimonial />
            <BrowseByCategory />
            <HomeBlogs />
        </PageWrapper>
    )
}

export default HomePage