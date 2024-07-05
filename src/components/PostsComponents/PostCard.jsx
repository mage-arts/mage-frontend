import React from "react";
// import User from '../../../images/user.jpg';
// import Art from '../../../images/art.jpg';
import {
  MdOutlineThumbUp,
  MdThumbUp,
  MdOutlineModeComment,
  MdIosShare,
} from "react-icons/md";
import Link from "next/link";

const PostCard = ({id}) => {
  return (
    <div className="mt-5 w-full border-bottom p-3">
      <div className="flex gap-3 items-center cursor-pointer">
        <img
          src="./user.jpg"
          alt="user"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-light">
          <p className="font-bold">
            John doe{" "}
            <small className="text-gray-200 mx-2 text-[10px]">April 13.</small>
          </p>
          <small className="text-gray-300">@john_de_artist</small>
        </div>
      </div>
      <Link href={`/post/${id}`} className="my-5 cursor-pointer no-underline">
        <p className="text-light leading-6 text-sm py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vel
          modi non commodi aperiam culpa maxime ipsam unde dolorum totam libero
          voluptas eos, dolores porro voluptate voluptates praesentium magni
          provident corporis nemo atque expedita, beatae alias aliquam.
          Voluptatum itaque dicta perferendis maxime reiciendis! Commodi eveniet
          laboriosam quos velit porro. In?
        </p>
      </Link>
      <div className="w-full h-[500px]">
        <img
          src="./art.jpg"
          alt="art"
          className="w-full h-full object-cover rounded-lg mx-auto"
        />
      </div>
      <div className="text-light flex items-center justify-between p-2 m-3">
        <div className="flex gap-1 items-center py-1 px-3 bg-[rgba(0,0,0,0.3)] rounded-full">
          <small className="text-[18px]">0</small>
          <div>
          <MdOutlineThumbUp size={20} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex gap-1 items-center py-1 px-3 bg-[rgba(0,0,0,0.3)] rounded-full">
          <small className="text-[18px]">0</small>
          <div className="pt-1">
          <MdOutlineModeComment size={18} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex gap-1 items-center py-1 px-3 bg-[rgba(0,0,0,0.3)] rounded-full">
          <small className="text-[18px]">0</small>
          <div>
          <MdIosShare size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
