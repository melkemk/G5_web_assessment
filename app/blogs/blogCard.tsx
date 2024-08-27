import React from "react";
import Image from "next/image";
import Blog from '../../type/blog'
import BlogCard from "./card";

const blogData: Blog[] = [
  {
    _id: "64dfe77d50961c55ce93e7e0",
    image:
      "https://res.cloudinary.com/djtkzulun/image/upload/v1692395388/A2sv/vmjzxwgp3mdvtwn2tlrw.jpg",
    title: "Mastering the Art of Code Refactoring",
    description:
      "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    author: null,
    isPending: true,
    tags: ["Programming", "Code"],
    likes: 0,
    relatedBlogs: [],
    skills: [],
    createdAt: "2023-08-18T21:49:49.752Z",
    updatedAt: "2023-08-18T21:49:49.752Z",
    __v: 0,
  },
  {
    _id: "64dfe79d50961c55ce93e7e4",
    image:
      "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg",
    title: "Mastering the Art of Code Refactoring",
    description:
      "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    author: null,
    isPending: true,
    tags: ["Programming", "Code"],
    likes: 0,
    relatedBlogs: [],
    skills: [],
    createdAt: "2023-08-18T21:50:21.755Z",
    updatedAt: "2023-08-18T21:50:21.755Z",
    __v: 0,
  },
  {
    _id: "64dfe81250961c55ce93e7ed",
    image:
      "https://res.cloudinary.com/djtkzulun/image/upload/v1692395536/A2sv/zt8efjgvtxiripl0d961.jpg",
    title: "Mastering the Art of Code Refactoring 2",
    description:
      "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    author: null,
    isPending: true,
    tags: ["Programming", "Code"],
    likes: 0,
    relatedBlogs: [],
    skills: [],
    createdAt: "2023-08-18T21:52:18.561Z",
    updatedAt: "2023-08-18T21:52:18.561Z",
    __v: 0,
  },
  {
    _id: "64dfe96a50d83607285ffa08",
    image:
      "https://res.cloudinary.com/djtkzulun/image/upload/v1692395881/A2sv/fvpmjksrplpxgqkgxlj3.jpg",
    title: "Mastering the Art of Code Refactoring 2",
    description:
      "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    author: null,
    isPending: true,
    tags: ["Programming", "Code"],
    likes: 0,
    relatedBlogs: [],
    skills: ["Web Development", "Mobile"],
    createdAt: "2023-08-18T21:58:02.754Z",
    updatedAt: "2023-08-18T21:58:02.754Z",
    __v: 0,
  },
  {
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
  },
  {
    _id: "64e062e113118e7f1f0a59b5",
    image:
      "https://res.cloudinary.com/djtkzulun/image/upload/v1692426976/A2sv/eqg5kgjzu8o4592darvb.jpg",
    title: "Mastering the Art of Code Refactoring",
    description:
      "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    author: {
      _id: "64e0623213118e7f1f0a59b0",
      name: "Bruke Mekonen",
      email: "bruke@a2sv.org",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1684307248/Portfolio/dgxjqlgpys1imwnw2bhq.png",
      role: "user",
    },
    isPending: true,
    tags: ["Programming", "Code"],
    likes: 0,
    relatedBlogs: [],
    skills: ["Web Development", "Mobile"],
    createdAt: "2023-08-19T06:36:17.363Z",
    updatedAt: "2023-08-19T06:36:17.363Z",
    __v: 0,
  },
];


const BlogList = () => {
  return (
    <div className="blog-list pl-[200px] pr-[200px]">
      {blogData.map((blog: Blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;