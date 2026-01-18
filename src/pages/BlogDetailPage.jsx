import { useNavigate, useParams } from "react-router-dom";
import BlogDate from "../components/blog/BlogDate";
import CategoryBadges from "../components/blog/CategoryBadge";
import BlogCoverImage from "../components/blog/BlogCoverImage";
import { ErrorState } from "../components/ui/ErrorState";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { BlogDetailSkeleton } from "../components/ui/LoadingState";
import { ArrowLeft } from "lucide-react";
import { useBlogDetail } from "../hooks/useBloggerQuery";

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog, isLoading, error } = useBlogDetail(id);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto p-4 lg:p-8">
        <div className="mb-6">
          <Button
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Blogs
          </Button>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            {isLoading && <BlogDetailSkeleton />}
            
            {error && <ErrorState message={`Error loading blog: ${error.message}`} />}
            
            {blog && (
              <article className="space-y-6">
                <BlogCoverImage src={blog.coverImage} alt={blog.title} />
                
                <div>
                  <CategoryBadges categories={blog.category} variant="default" />
                  
                  <h1 className="text-4xl font-bold mt-4 mb-4">{blog.title}</h1>
                  
                  <BlogDate date={blog.date} format="long" />
                  
                  <p className="text-xl text-muted-foreground my-6 leading-relaxed">
                    {blog.description}
                  </p>
                  
                  <div className="prose prose-slate prose-lg max-w-none">
                    <p className="whitespace-pre-wrap leading-relaxed">{blog.content}</p>
                  </div>
                </div>
              </article>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogDetailPage;