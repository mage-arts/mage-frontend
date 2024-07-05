'use client'
import { useRouter } from 'next/navigation';
import { HiChevronLeft } from 'react-icons/hi2'

const Return = () => {
    const router = useRouter()
  return (
    <div className='flex items-center gap-5 p-4 bg-primary top-0 left-0 w-full sticky top-0 left-0 right-0'>
        <div onClick={() => {
            router.back();
        }} className='text-light'>
            <HiChevronLeft size={25}/>
        </div>
    </div>
  )
}

export default Return;