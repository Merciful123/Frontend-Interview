const BlogCoverImage = ({ src, alt }) => {
  if (!src) return null;
  
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BlogCoverImage;