"use client"
import React, { useEffect, useState } from 'react'
import './ProductPagination.scss';
import Pagination from '@/utils/pagination/Pagination';
const ProductPagination = () => {
    let totalPage = 500;
    let itemPerPage = 1;
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentPage])
    return (
        <div className="mt-wrapper flex justify-center">
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={totalPage}
                pageSize={itemPerPage}
                onPageChange={page => setCurrentPage(page)}
                paginationContainerClassName='ProductPagination'
                paginationItemClassName='pagination-item'
                disableClassName='disabled'
                prevClassName='prev'
                nextClassName='next'
                activeClassName='active-link'
                prevIconClassName='prevIcon'
                nextIconClassName='nextIcon'

            />
        </div>
    )
}

export default ProductPagination
