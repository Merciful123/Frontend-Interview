import { useBlogList } from "../../hooks/useBloggerQuery";
import { EmptyBlogState } from "../ui/EmptyState";
import { ErrorState } from "../ui/ErrorState";
import { BlogListSkeleton } from "../ui/LoadingState";
import BlogListItem from "./BlogListItem";

const BlogList = ({ selectedBlogId, onSelectBlog }) => {
  const { data: blogs, isLoading, error } = useBlogList();

  if (isLoading) return <BlogListSkeleton />;
  if (error) return <ErrorState message={`Error loading blogs: ${error.message}`} />;
  if (!blogs || blogs.length === 0) return <EmptyBlogState />;

  return (
    <div className="">
      {blogs.map((blog) => (
        <BlogListItem
          key={blog.id}
          blog={blog}
          isSelected={selectedBlogId === blog.id}
          onClick={() => onSelectBlog(blog.id)}
        />
      ))}
    </div>
  );
};


export default BlogList;