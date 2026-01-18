import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const CategoryBadges = ({ categories, variant = "secondary", onRemove }) => (
  <div className="flex gap-2 flex-wrap">
    {categories?.map((cat, idx) => (
      <Badge
        key={idx}
        variant={variant}
        className={onRemove ? "pl-2 pr-1" : ""}
      >
        {cat}
        {onRemove && (
          <button
            type="button"
            className="ml-1 inline-flex items-center justify-center rounded-full outline-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-muted"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onRemove(cat);
            }}
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </Badge>
    ))}
  </div>
);

export default CategoryBadges;
