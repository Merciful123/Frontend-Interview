import { Calendar } from "lucide-react";

const BlogDate = ({ date, format = 'short' }) => {
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return format === 'short' 
      ? d.toLocaleDateString()
      : d.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
  };

  return (
    <div className="flex items-center text-xs text-muted-foreground">
      <Calendar className={`${format === 'short' ? 'w-3 h-3' : 'w-4 h-4'} mr-2`} />
      {formatDate(date)}
    </div>
  );
};

export default BlogDate;