import React from 'react'
import ProductWrapper from './components/wrapper/ProductWrapper'
import PageWrapper from '@/layouts/PageWrapper'
import SearchBreadCrumb from './components/breadcrumb/SearchBreadCrumb'
const SearchPage = () => {

    return (
        <PageWrapper>

            <SearchBreadCrumb />
            <ProductWrapper />
            <div className="mt-8"></div>


        </PageWrapper>

    )
}

export default SearchPage