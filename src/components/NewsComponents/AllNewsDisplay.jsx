"use client";
import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { useGetAllNews } from "@/store/news";

const AllNewsDisplay = () => {
  const [news, setNews] = useState();

  const fetchNews = async () => {
    const { data } = useGetAllNews();
    const response = await data?.results;
    console.log(response);
    setNews(response);
    return data;
  };
  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const {data} = useGetAllNews()
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchNews()
  // }, [])

  fetchNews();

  return (
    <div>
      {news?.map((newsdata, i) => (
        <div
          className="p-3 bg-[rgba(0,0,0,0.2)] m-2 shadow-lg rounded-lg"
          key={i}
        >
          <NewsCard
            image={newsdata.image_url}
            description={newsdata.description}
            date={newsdata.pubDate}
            sourceIcon={newsdata.source_icon}
            link={newsdata.link}
            sourceId={newsdata.source_id}
            title={newsdata.title}
          />
        </div>
      ))}
    </div>
  );
};

export default AllNewsDisplay;
