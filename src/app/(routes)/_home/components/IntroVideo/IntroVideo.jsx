import { SectionTitle, SectionTitleCenter } from '@/components/typography/Typography'
import React from 'react'
const IntroVideo = () => {
    return (
        <div className='site-container mt-section'>
            <SectionTitleCenter>About us</SectionTitleCenter>
            <div className="flex">
                <div className="video-wrapper">
                    <video className='w-full h-[400px]' src={`/intro.mp4`}></video>
                </div>
                <div className="context-wrapper">

                </div>
            </div>
        </div>
    )
}

export default IntroVideo