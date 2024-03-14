import React from 'react'

export const MenuIcon = ({ activeMenu, white = false }) => {
    return (
        <button className={`w-[26px] overflow-x-hidden h-[18px] flex flex-col justify-between `}>
            <span className={`line ${!activeMenu ? 'rotate-[45deg] translate-y-[8px] translate-x-[0px] origin-center' : ''} block h-[2px] w-full ${white ? 'bg-white' : 'bg-gray-300'} duration-300`}></span>
            <span className={`line ${!activeMenu ? '-translate-x-full' : ''} block h-[2px] w-full ${white ? 'bg-white' : 'bg-gray-300'}  duration-300`}></span>
            <span className={`line ${!activeMenu ? '-rotate-45 -translate-y-[8px] translate-x-[0px] origin-center' : ''} block h-[2px] w-full ${white ? 'bg-white' : 'bg-gray-300'} duration-300`}></span>

        </button>
    )
}

export const RatingStar = ({ rating = 5 }) => {
    return (
        <ul className='flex'>
            {
                [...new Array(parseInt(rating))].map((item, index) =>
                    <li key={index}>
                        <svg className='h-[15px] 2xl:h-[19px]' viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.32517 0.570787C9.47625 0.113083 10.1237 0.113082 10.2748 0.570786L12.2012 6.40713C12.2689 6.61202 12.4603 6.75041 12.676 6.75041H18.8932C19.3794 6.75041 19.5796 7.37423 19.184 7.6571L14.1679 11.2446C13.9899 11.3719 13.9153 11.6002 13.9839 11.808L15.9031 17.6224C16.0547 18.0817 15.5309 18.4672 15.1375 18.1858L10.0908 14.5765C9.91688 14.4521 9.68307 14.4521 9.50911 14.5765L4.46249 18.1858C4.0691 18.4672 3.54523 18.0817 3.69682 17.6224L5.61601 11.808C5.68461 11.6002 5.61008 11.3719 5.43207 11.2446L0.415908 7.6571C0.020386 7.37423 0.220503 6.75041 0.70677 6.75041H6.92392C7.13968 6.75041 7.3311 6.61202 7.39873 6.40713L9.32517 0.570787Z" fill="#ffa534" />
                        </svg>
                    </li>
                )
            }
            {
                [...new Array(5 - parseInt(rating))].map((item, index) =>
                    <li key={index}>
                        <svg className='h-[15px] 2xl:h-[19px]' viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.32517 0.570787C9.47625 0.113083 10.1237 0.113082 10.2748 0.570786L12.2012 6.40713C12.2689 6.61202 12.4603 6.75041 12.676 6.75041H18.8932C19.3794 6.75041 19.5796 7.37423 19.184 7.6571L14.1679 11.2446C13.9899 11.3719 13.9153 11.6002 13.9839 11.808L15.9031 17.6224C16.0547 18.0817 15.5309 18.4672 15.1375 18.1858L10.0908 14.5765C9.91688 14.4521 9.68307 14.4521 9.50911 14.5765L4.46249 18.1858C4.0691 18.4672 3.54523 18.0817 3.69682 17.6224L5.61601 11.808C5.68461 11.6002 5.61008 11.3719 5.43207 11.2446L0.415908 7.6571C0.020386 7.37423 0.220503 6.75041 0.70677 6.75041H6.92392C7.13968 6.75041 7.3311 6.61202 7.39873 6.40713L9.32517 0.570787Z" fill="#dbd7d6" />
                        </svg>
                    </li>
                )
            }
        </ul>
    )
}