import { SearchFilterMobile } from '@/app/(routes)/search/components/wrapper/ProductWrapper'
import Footer from '@/components/Footer/Footer'
import { NavBar, NavMenu, Sidebar } from '@/components/Header/Header'
import MomentumScroll from '@/components/utils/MomentumScroll/MomentumScroll'
import Provider from '@/provider/Provider'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <Provider>
            <NavBar />
            <Sidebar />
            <SearchFilterMobile />
            <MomentumScroll>
                <NavMenu />
                <div className='lg:pl-[60px]'>{children}</div>
                <Footer />
            </MomentumScroll>
        </Provider>
    )
}

export default MainLayout