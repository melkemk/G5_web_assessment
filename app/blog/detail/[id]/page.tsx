"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Blog from "../../../../type/blog";
import Image from "next/image";
import Related from "./related";
import axios from "axios";

async function fetchBlog(id: string) {
  const response = await axios.get(
    `https://a2sv-backend.onrender.com/api/blogs/${id}`
  );
  return response.data;
}

const Page = () => {
  const router = useParams();
  const id = router.id;
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const data = await fetchBlog(Array.isArray(id) ? id[0] : id);
          setBlog(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pl-[200px] pr-[200px] pb-[100px] font-montserrat">
      <div className="flex flex-col justify-center items-center">
        <div className="font-semibold text-[40px] font-im-fell-french-canon">
          {blog.title}
        </div>
        <div className="text-lg text-secondary ">
          {blog.tags.join(", ")} |{" "} 
          {Math.ceil((blog.description.length / 200) * 3)} MIN READ
        </div>
        <div className="relative w-full h-[400px] flex justify-center items-center">
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex justify-center items-center h-full flex-col gap-5 pt-10">
          <Image
            src={blog?.author?.image || ""}
            alt="author"
            width={90}
            height={90}
          />
          <div className="flex gap-[10px]">
            <div>{blog?.author?.name}</div>
            <div>|</div>
            <div className="text-secondary">{blog?.author?.role}</div>
          </div>
          <div className="text-primary">@{blog?.author?.name || "unknown"}</div>
        </div>
      </div>
      <div className="pt-8">
        <div
          className="font-semibold text-[30px] pt-3"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>
        <div
          className="text-[24px] pt-8"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>
        <div
          className="text-[24px] pt-8"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>
      </div>
      <div className="font-semibold text-[28px] pt-24">Related Blogs</div>
      <div className="flex gap-2 flex-wrap pt-[20px]">
        {[...Array(3)].map((_, i) => (
          <Related key={i} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Page;