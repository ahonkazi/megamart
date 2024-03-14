"use client"
import { ButtonDelete, ButtonSelect, ButtonText } from '@/components/button/Buttons'
import React, { useState } from 'react'
import OrderTable from './OrderTable/OrderTable'
import PageWrapper from '@/layouts/PageWrapper'

const Order = () => {
    const status = ['All Status', 'Pending', 'Delevered']
    const [selectedData, setSelectedData] = useState('All Status');
    return (
        <PageWrapper >
            <div className="section-header  flex sm:items-center gap-y-3 sm:flex-row flex-col justify-between">
                <div className="flex items-center w-full sm:w-fit justify-between">
                    <ButtonText>Select All</ButtonText>
                    <ButtonDelete />
                </div>
                <div className="2xl:w-[130px] w-full sm:w-[125px]">
                    <ButtonSelect data={status} selectedData={selectedData} setSelectedData={setSelectedData} />
                </div>
            </div>
            <OrderTable />
            <div className=""></div>
        </PageWrapper>
    )
}

export default Order