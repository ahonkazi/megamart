"use client"

import { ButtonPrimary } from '@/components/buttons/Buttons'
import { InputMidGray, InputPasswordMidGray } from '@/components/input/InputField'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

const ChangeEmailTab = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [loadingButton, setLoadingButton] = useState(false)
    const [completeButton, setCompleteButton] = useState(false)
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='grid gap-y-2 md:gap-y-4'>
            <div className="">
                <InputMidGray value={email} setValue={setEmail} type='email' label={'New Email'} />
            </div>
            <div className="overflow-hidden">
                <AnimatePresence>
                    {currentStep === 1 && (
                        <motion.div initial={{ x: 0 }} animate={{ x: 0 }} transition={{ duration: 0.2 }} exit={{ x: '100%' }}>
                            <ButtonPrimary disabled={loadingButton}>{loadingButton ? 'Sending...' : 'Send OTP'}</ButtonPrimary>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {currentStep === 2 && (
                        <motion.div transition={{ delay: 0.2 }} initial={{ y: '100%' }} animate={{ y: 0 }}>
                            <div className='grid gap-y-2 md:gap-y-4'>
                                <div className="">
                                    <InputMidGray value={otp} setValue={setOtp} type='text' label={'Security key'} />
                                </div>
                                <div className="">
                                    <InputPasswordMidGray value={password} setValue={setPassword} label={'Current Password'} />

                                </div>
                                <div className="flex justify-end">
                                    <ButtonPrimary disabled={completeButton ? completeButton : loadingButton} onclickFunction={changeEmail}>{completeButton ? 'Changed' : loadingButton ? 'Updaing...' : 'Change email'}</ButtonPrimary>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>


        </div>)
}

export default ChangeEmailTab