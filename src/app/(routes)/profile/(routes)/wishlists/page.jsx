import { ButtonDelete, ButtonText } from '@/components/button/Buttons'
import React from 'react'
import WishListTable from './WishListTable/WishListTable'
import PageWrapper from '@/layouts/PageWrapper'

const Wishlist = () => {
    return (
        <PageWrapper title='Fonebox | WishList'>
            <div className="section-header mt-content flex sm:items-center gap-y-3 sm:flex-row flex-col justify-between">
                <div className="flex items-center w-full sm:w-fit justify-between">
                    <ButtonText>Select All</ButtonText>
                    <ButtonDelete />
                </div>

            </div>
            <WishListTable />

        </PageWrapper>
    )
}

export default Wishlist