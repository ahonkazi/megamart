import React from 'react'
import './Button.scss'
export const ButtonPrimary = ({ children }) => {
    return (
        <button className='text-Primary  duration-300 overflow-hidden button-primary  text-sm md:text-base 2xl:text-lg w-fit px-8 py-2 font-Base border border-Primary'>
            <span className='relative z-[20]'>{children}</span>
        </button>
    )
}
