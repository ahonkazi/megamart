"use client"
import React, { useState } from 'react'
import ChangePasswordTab from './ChangePasswordTab'
import ChangeEmailTab from './ChangeEmailTab'
import PageWrapper from '@/layouts/PageWrapper'

const Security = () => {
    const tabButtons = ['Change Password', 'Change Email'];
    const [activeTab, setActiveTab] = useState(0);
    return (
        <PageWrapper >
            <div className="tab-header  flex gap-y-2">

                {tabButtons.map((item, index) =>
                    <button onClick={() => setActiveTab(index)} key={index} className={`py-2 w-full sm:w-fit sm:px-10 ${activeTab === index ? 'bg-Primary text-white' : 'text-Gray'} duration-300 rounded text-sm md:text-base 2xl:text-lg`}>{item}</button>

                )}

            </div>
            <div className="tab-body mt-section">
                {activeTab === 0 && (
                    <ChangePasswordTab />
                )}
                {activeTab === 1 && (
                    <ChangeEmailTab />
                )}
            </div>
        </PageWrapper>
    )
}

export default Security