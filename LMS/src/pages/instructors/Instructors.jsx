import React from 'react'
import InstructorsCard from '../../components/instructors/InstructorsCard'
const InstructorsTemplate = () => {
  return (
    <div className='w-full h-full lg:px-28 md:px-16 sm:px-7 px-4 pb-8'>
        <h1 className="text-center text-3xl font-bold text-violet-600 mb-8">
            Meet Our Instructors
        </h1>
        <div className="w-full grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
            <InstructorsCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} fullName={"Luhena Abebe "} position={"CEO"}/>
            <InstructorsCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} fullName={"Luhena Abebe "} position={"CEO"}/>
            <InstructorsCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} fullName={"Luhena Abebe "} position={"CEO"}/>
            <InstructorsCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} fullName={"Luhena Abebe "} position={"CEO"}/>
            <InstructorsCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} fullName={"Luhena Abebe "} position={"CEO"}/>
        
        </div>
    </div>
  )
}

export default InstructorsTemplate