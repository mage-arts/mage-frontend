import React from 'react'
import PostCard from './PostCard'

const AllPostDisplay = () => {
  return (
    <div className="border-left border-right mx-auto w-full max-w-4xl">
        { [0,1,2,3,4,5].map((post, i) => (
          <div key={i}>
          <PostCard id={i}/>
          </div>
        )) }
     
    </div>
  )
}

export default AllPostDisplay