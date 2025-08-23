import React from 'react'
import ReviewCard from '../../components/review/ReviewCard'

const ReviewsTemplate = () => {
  return (
    <div className='w-full h-full lg:px-28 md:px-16 sm:px-7 px-4 pb-8'>
        <h1 className="text-center text-3xl font-bold text-violet-600 mb-8">
            Our Students Review 
        </h1>
        <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <ReviewCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} name={"john joe"} userName={"johnjoe123"} date="2024-01-01"review={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nesciunt, dolore nihil ut error rem vel,"}/>
            <ReviewCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} name={"john joe"} userName={"johnjoe123"} date="2024-01-01"review={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nesciunt, dolore nihil ut error rem vel,"}/>
            <ReviewCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} name={"john joe"} userName={"johnjoe123"} date="2024-01-01"review={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nesciunt, dolore nihil ut error rem vel,"}/>
        </div>
    </div>
  )
}

export default ReviewsTemplate