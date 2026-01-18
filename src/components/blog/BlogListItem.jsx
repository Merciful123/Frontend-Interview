import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import CategoryBadges from './CategoryBadge';
import BlogDate from './BlogDate';

export default function BlogListItem({ blog, isSelected }) {
  return (
    <Link to={`/blog/${blog.id}`}>
      <Card className={`mb-3 cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'border-l-4 border-l-blue-300' : ''
      }`}>
        <CardHeader  className="mt-0 pt-0">
          <CategoryBadges categories={blog.category} />
          <CardTitle className="text-md line-clamp-2 mt-0 pt-0">{blog.title}</CardTitle>
        </CardHeader>
        <CardContent className="mt-0 pt-0">
          <CardDescription className="line-clamp-2">{blog.description}</CardDescription>
          <div className='mt-2'>
          <BlogDate date={blog.date} className="mt-2"/>

          </div>
        </CardContent>
      </Card>
    </Link>
  );
}