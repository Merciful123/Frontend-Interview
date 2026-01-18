import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CategoryBadges from "./CategoryBadge";
import BlogDate from "./BlogDate";


const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`} className="block">
      <Card className="cursor-pointer transition-all hover:shadow-lg h-full">
        <CardHeader className="pb-3">
          <CategoryBadges categories={blog.category} variant="secondary" />
          <CardTitle className="text-lg line-clamp-2 mt-2">{blog.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3 mb-2">
            {blog.description}
          </CardDescription>
          <BlogDate date={blog.date} format="short" />
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;