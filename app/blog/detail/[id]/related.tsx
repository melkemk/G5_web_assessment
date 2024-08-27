
import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa";
import Image from 'next/image';
import Blog from "../../../../type/blog";
const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

function Related({ blog }: { blog: Blog }) {
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
            className="border-none p-2 max-w-xs bg-gray-100 text-secondary rounded-full overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {tag.length > 9 ? tag.slice(0, 9) + '...' : tag}
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

  export default Related