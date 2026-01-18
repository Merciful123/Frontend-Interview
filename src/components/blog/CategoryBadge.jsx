import { Badge } from "@/components/ui/badge";


const CategoryBadges = ({ categories, variant = "secondary" }) => (
  <div className="flex gap-2 flex-wrap">
    {categories?.map((cat, idx) => (
      <Badge key={idx} variant={variant} className={""}>
        {cat}
      </Badge>
    ))}
  </div>
);

export default CategoryBadges;