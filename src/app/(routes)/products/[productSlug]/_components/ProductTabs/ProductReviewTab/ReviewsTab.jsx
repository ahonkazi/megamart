import React from 'react'
import RatingsDisplay from './RatingsDisplay'
import AddReviewForm from './AddReviewForm'
import TotalReview from './TotalReview'

const ReviewsTab = () => {
    return (
        <div className="reviews ">
            <RatingsDisplay />
            <AddReviewForm />
            <TotalReview />
        </div>
    )
}

export default ReviewsTab