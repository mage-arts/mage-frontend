import { IoIosImages } from "react-icons/io";

const CreatePost = () => {
  return (
    <div className="w-full max-w-4xl my-2 mx-auto">
        <div className="border rounded-lg">
            <textarea placeholder="Create a Post" className="w-full border-none bg-transparent p-3 focus:outline-none text-light"/>
            <div className="flex items-center justify-between p-3">
                <IoIosImages className="text-light cursor-pointer"/>
                <button className="bg-primary py-3 px-5 rounded-full text-light capitalize border-none font-bold cursor-pointer">post</button>
            </div>
        </div>
    </div>
  )
}

export default CreatePost