import { ButtonPrimary } from '@/components/buttons/Buttons'
import React from 'react'

const HomeSlider = () => {
    return (
        <div className="relative flex flex-col lg:block">
            <div className="image-container">
                <img className='hidden w-full lg:block' src="https://images.ctfassets.net/cma41nsiygxr/14gHZ9gWgakalxX2mwrasg/09c5d439daad2f362d8cd4a1d57d089f/img_home_desk_2023_12_13_stickers.jpg" alt="" />
                <img className='lg:hidden w-full' src="https://images.ctfassets.net/cma41nsiygxr/4bd84CAqE65X3jOQFB2qHu/007685a961573a08955dcf1b51dbddfe/img_home_mob_2023_12_13_stickers.jpg" alt="" />
            </div>
            <div className="static site-container lg:absolute w-full  text-Dark py-8 font-Secondary flex items-center justify-start lg:justify-end  lg:ClipPathSlider bg-[#f1f1f3] right-0 top-0 h-full lg:w-[60%]">
                <div className="text-start lg:text-right flex flex-col gap-y-4 lg:gap-y-8">
                    <h1 className='titleH1'>Custom <span className='text-Primary'>online printing</span> <br />
                        for professionals.</h1>
                    <div className="flex flex-col items-start lg:items-end gap-y-4">
                        <p>Ready. Set. Goal!</p>
                        <ButtonPrimary>Shop Now</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSlider