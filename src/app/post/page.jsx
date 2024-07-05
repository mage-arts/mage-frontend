import Navbar from '@/components/NavComponents/Navbar'
import AllPostDisplay from '@/components/PostsComponents/AllPostDisplay'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
        <AllPostDisplay/>
    </div>
  )
}

export default page