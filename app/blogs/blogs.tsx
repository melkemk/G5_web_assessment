import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from '../../app/redux/store';
import { fetchBlogs } from "../../app/redux/features/blogs/blogsSlice";
import Blog from "../../type/blog";
import BlogCard from "./card";
import { randomInt } from "crypto";

interface BlogListProps {
  searchTerm: string;
}

const BlogList: React.FC<BlogListProps> = ({ searchTerm }) => {
  const dispatch: AppDispatch = useDispatch();
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const status = useSelector((state: RootState) => state.blogs.status);
  const error = useSelector((state: RootState) => state.blogs.error);

  let filteredBlogs = blogs.filter((blog: Blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  filteredBlogs =  filteredBlogs.length>5?filteredBlogs.slice(0,5):filteredBlogs

  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  return (
    <div className="blog-list pl-[200px] pr-[200px]">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && filteredBlogs.length === 0 && <p>No blogs found</p>}
      {status === 'succeeded' && filteredBlogs.map((blog: Blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;