import { useNavigate, useParams } from 'react-router-dom';
import BlogDetailPage from './BlogDetailPage';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import BlogList from '../components/blog/BlogList';
import { useBlogList } from '../hooks/useBloggerQuery';
import { useEffect } from 'react';


const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blogs } = useBlogList();
  
  useEffect(() => {
    if (!id && blogs && blogs.length > 0) {
      navigate(`/blog/${blogs[0].id}`, { replace: true });
    }
  }, [id, blogs, navigate]); 
  
  return (
    <div className="bg-linear-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto p-4 lg:p-8">
        <header className="mb-4">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">CA Monk Blog</h1>
          <p className="text-slate-600">Stay updated with latest insights</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Blog List */}
          <div className="lg:col-span-1 space-y-4">
            {/* add create form here */}
            <div className="max-h-[calc(100vh-100px)] overflow-y-auto pr-2 mt-1 scrollbar-thin custom-scroll">
              <BlogList selectedBlogId={id} />
            </div>
          </div>

          {/* Right Panel - Blog Detail */}
          <div className="lg:col-span-2">
            <Card className="min-h-150">
              <CardContent className="p-6">
                <BlogDetailPage blogId={id} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


export default BlogPage;