import { useNavigate } from "react-router-dom";
import { ErrorState } from "../ui/ErrorState";
import CategoryInput from "./CategoryInput";
import FormField from "./FormField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useCreateBlog } from "../../hooks/useBloggerQuery";
import { PlusCircle } from "lucide-react";

const CreateBlogForm = () => {
  const navigate  = useNavigate();
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    coverImage: '',
    categories: []
  });
  
  const mutation = useCreateBlog();

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      content: '',
      coverImage: '',
      categories: []
    });
  };

  const handleSubmit = () => {
    const { title, description, content } = formData;
    if (!title || !description || !content) return;
    
    mutation.mutate({
      title,
      description,
      content,
      coverImage: formData.coverImage,
      category: formData.categories,
      date: new Date().toISOString()
    }, {
      onSuccess: (data) => {
        resetForm();
        setOpen(false);
        setShowSuccess(true);
        navigate(`/blog/${data.id}`);
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }
    });
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addCategory = (category) => {
    setFormData(prev => ({ 
      ...prev, 
      categories: [...prev.categories, category] 
    }));
  };

  const removeCategory = (category) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.filter(c => c !== category)
    }));
  };

  return (
    <>
      {showSuccess && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-top-5">
          <Alert className="bg-green-50 border-green-200">
            <AlertDescription className="flex items-center gap-2 text-green-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Blog created successfully!
            </AlertDescription>
          </Alert>
        </div>
      )}
      
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          <PlusCircle className="w-4 h-4 mr-2" />
          Create New Blog
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Blog Post</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <FormField label="Title" id="title" required>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => updateField('title', e.target.value)}
              placeholder="e.g., Tax Planning Strategies for CA Students"
            />
          </FormField>

          <FormField label="Description" id="description" required>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => updateField('description', e.target.value)}
              placeholder="Brief description of your blog post"
              rows={2}
            />
          </FormField>

          <FormField label="Content" id="content" required>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => updateField('content', e.target.value)}
              placeholder="Write your full blog content here..."
              rows={8}
            />
          </FormField>

          <FormField label="Cover Image URL" id="coverImage">
            <Input
              id="coverImage"
              type="url"
              value={formData.coverImage}
              onChange={(e) => updateField('coverImage', e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </FormField>

          <CategoryInput
            categories={formData.categories}
            onAdd={addCategory}
            onRemove={removeCategory}
          />

          {mutation.isError && (
            <ErrorState message={`Error creating blog: ${mutation.error.message}`} />
          )}

          <div className="flex gap-2 justify-end pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              disabled={mutation.isPending}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit} 
              disabled={mutation.isPending || !formData.title || !formData.description || !formData.content}
            >
              {mutation.isPending ? 'Creating...' : 'Create Blog'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
}


export default CreateBlogForm;