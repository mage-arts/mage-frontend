'use client'
import React from "react";
import { useRouter } from "next/navigation";

const NewsCard = ({
  image,
  title,
  description,
  date,
  sourceIcon,
  sourceId,
  link,
}) => {
    const router = useRouter()
  return (
    <article onClick={() => {
        router.push(`${link}`)
    }} className="text-light">
      <div className="flex items-center justify-between m-2">
        <div className="flex items-center gap-2">
          <img
            src={sourceIcon}
            alt="src url"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h3>{sourceId}</h3>
        </div>
        <div>
          <small>{date}</small>
        </div>
      </div>
      <div className="w-full h-[300px] my-3">
        <img
          src={image}
          alt="main img"
          className="w-full h-full object-cover rounded-lg mx-auto"
        />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default NewsCard;
