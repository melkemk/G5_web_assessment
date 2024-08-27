"use client";
import React from "react";
import { useParams } from "next/navigation";
import Blog from "../../../../type/blog";
import Image from "next/image";
import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa";

function Related(blog: Blog) {
  return (
    <div className="flex flex-col gap-5 max-w-[350px] shadow-lg p-4">
      <div className="relative w-full h-[190px] flex justify-center items-center">
        <Image src={blog.image} alt="blog" layout="fill" objectFit="cover" />
      </div>
      <div>{blog.title}</div>
      <div className="flex gap-1 text-[14px]">
        <Image
          src={blog?.author?.image || ""}
          width={25}
          height={25}
          alt="person"
        />
        <div className="text-secondary">by </div>
        <div>{blog?.author?.name}</div>
        <div>|</div>
        <div className="text-secondary">{formatDate(blog.createdAt)}</div>
      </div>

      <div className="flex gap-5 mt-4">
        {blog.tags.map((tag, index) => (
          <div
            key={index}
            className="border-none p-2 w-max bg-gray-100 text-secondary rounded-full"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="text-secondary text-[16px]">
        A little personality goes a long way, especially on a business blog. So
        don’t be afraid to let loose.
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <FaThumbsUp />
          <div>{blog.likes} Likes</div>
        </div>
        <Link href={`/blog/detail/${blog._id}`} passHref>
          <div className="text-primary cursor-pointer">Read More</div>
        </Link>
      </div>
    </div>
  );
}
const blog: Blog = {
  _id: "64dfe9dd50d83607285ffa10",
  image:
    "https://res.cloudinary.com/djtkzulun/image/upload/v1692395995/A2sv/c6fnsnngdrjrrvxv8xos.jpg",
  title: "Mastering the Art of Code Refactoring 2",
  description:
    "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
  author: {
    _id: "64dfe6fb50961c55ce93e7de",
    name: "Bruk Mekonen",
    email: "bruk@gmail.com",
    image:
      "https://res.cloudinary.com/djtkzulun/image/upload/v1684307248/Portfolio/dgxjqlgpys1imwnw2bhq.png",
    role: "user",
  },
  isPending: true,
  tags: ["Programming", "Code"],
  likes: 0,
  relatedBlogs: [],
  skills: ["Web Development", "Mobile"],
  createdAt: "2023-08-18T21:59:57.206Z",
  updatedAt: "2023-08-18T21:59:57.206Z",
  __v: 0,
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
function Page() {
  const router = useParams();
  const id = router.id;

  return (
    <div className=" pl-[200px] pr-[200px] pb-[100px] ">
      <div className="flex flex-col justify-center items-center">
        <div className="font-semibold text-[40px] font-im-fell-french-canon">
          {blog.title}
        </div>{" "}
        <div>PROGRAMMING, TECH | 6 MIN READ</div>
        <div className="relative w-full h-[400px] flex justify-center items-center">
          <Image src={blog.image} alt="blog" layout="fill" objectFit="cover" />
        </div>
        <Image
          src={blog?.author?.image || ""}
          alt="author"
          width={90}
          height={90}
        />
        <div>
          {blog?.author?.name} | {blog?.author?.role}
        </div>
        <div className="text-primary">@chaltu_kebede</div>
      </div>
      <div>
        {/* detail */}
        <p className="font-semibold text-[30px] pt-3    ">
          We know that data structure and algorithm can seem hard at first
          glance. And you may not be familiar with advanced algorithms, but
          there are simple steps you can follow to see outstanding results in a
          short period of time.
        </p>
        <p className="text-[24px]  pt-8 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="font-semibold text-[28px] pt-24">Related Blogs</div>{" "}
      <div className="flex gap-5 flex-wrap pt-[20px]">
        {blog.relatedBlogs.map((blog, index) => (
          <Related key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default Page;
