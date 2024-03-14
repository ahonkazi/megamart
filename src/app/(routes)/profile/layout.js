import ProfileLayout from '@/layouts/ProfileLayout'
import React from 'react'

function ProfileLayoutWrapper({ children }) {
    return (
        <ProfileLayout>
            {children}
        </ProfileLayout>
    )
}

export default ProfileLayoutWrapper