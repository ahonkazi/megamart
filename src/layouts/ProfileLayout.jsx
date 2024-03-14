import ProfileSidebar from '@/components/profile-sidebar/ProfileSidebar'
import React from 'react'

const ProfileLayout = ({ children }) => {
    return (
        <div className='flex  flex-col md:flex-row'>
            <ProfileSidebar />
            <div className="py-8 w-full site-container bg-white">
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout