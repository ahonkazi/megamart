import React from 'react'

export const RatingProgressBar = ({ progress }) => {
    return (
        <div className='w-full h-1.5 rounded bg-gray-200'>
            <span className={`line block h-full bg-Coral rounded`} style={{ width: progress + '%' }}></span>
        </div>
    )
}