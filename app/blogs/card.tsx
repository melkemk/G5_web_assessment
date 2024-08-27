'use client';

import Blog from '../../type/blog';
import Image from 'next/image';
import circle from '/public/circle.png';
import Link from 'next/link';

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

const BlogCard = ({ blog }: { blog: Blog }) => {
  const formattedDate = formatDate(blog.createdAt);

  return (
    <Link href={`/blog/detail/${blog._id}`} passHref>

<div className="grid grid-cols-1 md:grid-cols-[80%_20%] gap-8 border-t relative before:content-[''] before:absolute before:top-[-2px] before:left-0 before:w-full before:h-[2px] before:bg-secondary items-center">           <div className="flex flex-col p-4">
          <div className="flex items-center gap-4 mb-4">
            <Image src={circle} alt="author" width={90} height={90} />
            <div className="flex flex-col">
              <div className="flex gap-1 items-center">
                <div className="font-bold">{blog.author?.name || "Unknown Author"}</div>
                <div className="font-bold text-2xl">•</div>
                <div className="text-secondary">{formattedDate}</div>
              </div>
              <div className="text-secondary">{blog.author?.role || "N/A"}</div>
            </div>
          </div>
          <div className="mt-4 font-bold text-[34px]">{blog.title}</div>
          <div
  className="mt-2 text-[#737373] text-[24px] leading-[42px]"
  dangerouslySetInnerHTML={{ __html: blog.description }}
></div>          <div className="flex gap-5 mt-4">
            {blog.tags.map((tag, index) => (
              <div key={index} className="border-none p-2 w-max bg-[#F5F5F5] text-[#8E8E8E] rounded-full">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-[250px] overflow-hidden">
          <Image src={blog.image} width={400} height={250} alt="blog" layout="responsive" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
