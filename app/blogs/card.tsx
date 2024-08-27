
import Blog from '../../type/blog'
import Image from 'next/image'
import circle from '/public/circle.png'
import Link from 'next/link';

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

}
const   BlogCard = ({ blog }: { blog: Blog }) => {
    const formattedDate = formatDate(blog.createdAt);
  
    return (
<Link href={`/blog/detail/${blog._id}`} passHref>
  <div className="flex gap-8 border-t relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-secondary">      <div className="flex flex-col max-w-[970px] p-4">
          <div className="flex items-center gap-4">
            <div>
              <Image src={circle} alt="author" width={90} height={90} />
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <div className="flex gap-1 items-center">
                  <div className="font-bold">{blog.author?.name || "Unknown Author"}</div>
                  <div className="font-bold text-2xl">•</div>
                  <div className="text-secondary">{formattedDate}</div>
                </div>
                <div className="text-secondary">{blog.author?.role || "N/A"}</div>
              </div>
            </div>
          </div>
          <div className="mt-4 font-bold text-[34px]">{blog.title}</div>
          <div className="mt-2 text-secondary text-[24px]">{blog.description}</div>
          <div className="flex gap-5 mt-4">
            {blog.tags.map((tag, index) => (
              <div key={index} className="border-none p-2 w-max bg-gray-100 text-secondary rounded-full">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center w-[450px] h-[400px]">
          <Image src={blog.image} width={450} height={400} alt="blog" />
        </div>
      </div>
      </Link>
    );
  };
  export default BlogCard;