"use client"
import { ButtonCoral } from '@/components/button/Buttons'
import { InputPasswordMidGray } from '@/components/input/InputField'
import React, { useState } from 'react'

const ChangePasswordTab = () => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [retypePassword, setRetypePassword] = useState('')
    const [buttonLoading, setButtonLoading] = useState(false)

    return (
        <div className='grid gap-y-2 md:gap-y-4'>
            <div className="">
                <InputPasswordMidGray value={oldPassword} setValue={setOldPassword} label={'Current password'} />
            </div>
            <div className="">
                <InputPasswordMidGray value={newPassword} setValue={setNewPassword} label={'New Password'} />
            </div>
            <div className="">
                <InputPasswordMidGray value={retypePassword} setValue={setRetypePassword} label={'Retype new password'} />
            </div>
            <div className="flex justify-end">
                <ButtonCoral disabled={buttonLoading}>{buttonLoading ? 'Updating' : 'Update'}</ButtonCoral>
            </div>
        </div>
    )
}

export default ChangePasswordTab